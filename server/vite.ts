import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

// Create a custom logger for Vite
const viteLogger = createLogger();

// Log function to standardize log format
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

// Function to set up Vite for SSR and middleware mode
export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  try {
    // Initialize Vite server
    const vite = await createViteServer({
      ...viteConfig,
      configFile: false,
      customLogger: {
        ...viteLogger,
        error: (msg, options) => {
          viteLogger.error(msg, options);
          process.exit(1); // Exit on critical Vite errors
        },
      },
      server: serverOptions,
      appType: "custom",
    });

    // Use Vite middleware for SSR support
    app.use(vite.middlewares);

    // Fallback to index.html for all routes
    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;

      try {
        const clientTemplate = path.resolve(__dirname, "..", "client", "index.html");

        // Always reload the index.html file from disk in case it changes
        let template = await fs.promises.readFile(clientTemplate, "utf-8");
        template = template.replace(
          `src="/src/main.tsx"`,
          `src="/src/main.tsx?v=${nanoid()}"`, // Prevent caching by adding versioning query param
        );

        // Transform the template using Vite's SSR support
        const page = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(page);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } catch (error) {
    viteLogger.error("Error setting up Vite server:", error);
    throw error;
  }
}

// Function to serve static files in production
export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "../../../dist/public");

  // Check if the build directory exists before serving static files
  if (!fs.existsSync(distPath)) {
    throw new Error(`❌ Could not find the build directory: ${distPath}. Make sure to build the client first.`);
  }

  app.use(express.static(distPath));

  // Fall back to index.html for all routes that don't match static files
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
