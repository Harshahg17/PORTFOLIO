import { Layout, Server, Database, Code, Drill, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SkillPill from "@/components/ui/skill-pill";
import { data } from "@/lib/data";

export default function Skills() {
  const { skills } = data;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A collection of technologies and tools I've worked with throughout my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Layout className="w-5 h-5 mr-2" />
                Frontend Development
              </h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Server className="w-5 h-5 mr-2" />
                Backend Development
              </h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Database Skills */}
          <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Databases
              </h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Programming Languages */}
          <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Programming Languages
              </h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dev Tools */}
          <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Drill className="w-5 h-5 mr-2" />
                Dev Tools
              </h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.devTools.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Other Skills */}
          <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <PlusCircle className="w-5 h-5 mr-2" />
                Other Skills
              </h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
