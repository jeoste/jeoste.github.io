import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AchievementsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Achievements</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground">Milestones</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Throughout my career, I've achieved various milestones, obtained certifications and worked on various projects, here's more details.
        </p>
      </div>

      {/* Professional Experience */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">Professional Experience</h3>
        <div className="grid gap-6">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-xl">Technical Lead</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">6+ years leading technical teams and architectural decisions</p>
              <p className="text-sm text-muted-foreground">Successfully delivered in production 15+ projects, more than 95% success rate</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-xl">Data Consultant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                Expertise across multiple industries (logistics, e-commerce, bank, insurance, transport etc..) 
                and technologies (Java, SQL, Qlik, Talend, AWS, Azure etc..)
              </p>
              <p className="text-sm text-muted-foreground">Specialized in data platform architecture and pipelines</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-xl">Startup & Entrepreneurship</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">Active involvement in the startup ecosystem</p>
              <p className="text-sm text-muted-foreground">Following AI and data-driven innovation trends</p>
              <p className="text-sm text-muted-foreground">Active in the startup ecosystem</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Success */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">Technical Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <CardTitle className="text-emerald-900 dark:text-emerald-100">Data Platform Architecture</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                Designed and implemented from scratch modern data architectures for complex and real-time systems
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                  </svg>
                </div>
                <CardTitle className="text-blue-900 dark:text-blue-100">Legacy System Migration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Successfully migrated multiple legacy data systems to modern platforms
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <CardTitle className="text-purple-900 dark:text-purple-100">Optimization & Scalability</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Optimized databases, data pipelines, and data platforms for better performance and scalability
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <CardTitle className="text-orange-900 dark:text-orange-100">Team Leadership</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Led technical teams and established best practices across organizations and teams
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Projects */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">Key Projects & Clients</h3>
        <div className="grid gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-xl">For leading client in nautic industry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Modern datahub architecture for complex systems to transform their information system from a company to a European group
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-xl">For french transport company</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Legacy Data Integration Architecture for simple systems
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-xl">For leading client in crane & lifting industry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                REST API scenarios in database for workflow automation
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-xl">For 3PL client industry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive monitoring and observability solutions
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">Areas of Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "Data Engineering", "ETL/ELT", "Java", "SQL", 
            "Data Observability", "Database Design", "API Development", 
            "System Architecture", "Problem Solving"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-accent/20 px-3 py-2 rounded-lg text-sm text-center font-medium hover:bg-accent/30 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">Certifications & Accreditations</h3>
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"/>
                  <path d="M15.5 7.5C15.5 7.5 14.5 8.5 13.5 9.5C12.5 10.5 11.5 11.5 10.5 12.5C9.5 13.5 8.5 14.5 7.5 15.5C8.5 14.5 9.5 13.5 10.5 12.5C11.5 11.5 12.5 10.5 13.5 9.5C14.5 8.5 15.5 7.5 15.5 7.5Z"/>
                </svg>
              </div>
              <div>
                <CardTitle className="text-blue-900 dark:text-blue-100">Qlik/Talend Certifications</CardTitle>
                <p className="text-sm text-blue-700 dark:text-blue-300">Advanced practitioner with comprehensive knowledge</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  type: "Developer",
                  version: "v7",
                  title: "Certified Developer",
                  description: "Advanced development skills and best practices"
                },
                {
                  type: "Administrator",
                  version: "v7",
                  title: "Certified Administrator",
                  description: "System administration and deployment expertise"
                },
                {
                  type: "Architect & Sales",
                  version: "v8",
                  title: "Technical Solutions Architect",
                  description: "Enterprise architecture design and consulting"
                }
              ].map((cert) => (
                <Card key={cert.type} className="bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        {cert.type}
                      </span>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full font-medium">
                        {cert.version}
                      </span>
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{cert.title}</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="pt-4 border-t border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-medium">Expertise Level:</span>
                <span>Advanced practitioner with comprehensive knowledge across development, administration, and architecture domains.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Future Goals */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">Future Goals</h3>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {[
                "Continue contributing to the data community through knowledge sharing",
                "Explore emerging technologies in AI and data observability & monitoring",
                "Contribute to open-source data projects"
              ].map((goal, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{goal}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 