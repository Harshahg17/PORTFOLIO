import { 
  type User, type InsertUser,
  type ContactSubmission, type InsertContactSubmission 
} from "@shared/schema";

// Interface remains the same for consistency
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: User[] = [];
  private contactSubmissions: ContactSubmission[] = [];
  private nextUserId = 1;
  private nextSubmissionId = 1;

  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user = {
      ...insertUser,
      id: this.nextUserId++,
      createdAt: new Date().toISOString(),
    } as User;
    this.users.push(user);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const submission = {
      ...insertSubmission,
      id: this.nextSubmissionId++,
      createdAt: new Date().toISOString(),
    } as ContactSubmission;
    this.contactSubmissions.push(submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return this.contactSubmissions;
  }
}

export const storage = new MemStorage();
