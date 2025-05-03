"use client";

import React from "react";
import { experiences, education } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 gsap-fade-up">
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>

        <Tabs defaultValue="experience" className="gsap-fade-up">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="experience">Work Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="experience">
            <div className="space-y-6">
              {experiences.length > 0 ? (
                experiences.map((exp, index) => (
                  <ExperienceCard
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    duration={exp.duration}
                    location={exp.location}
                    description={exp.description}
                  />
                ))
              ) : (
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-muted-foreground">
                      Looking for new opportunities! Check out my projects and skills.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <EducationCard
                  key={index}
                  degree={edu.degree}
                  institution={edu.institution}
                  duration={edu.duration}
                  location={edu.location}
                  description={edu.description}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

function ExperienceCard({
  title,
  company,
  duration,
  location,
  description,
}: ExperienceCardProps) {
  return (
    <Card className="gsap-stagger-item">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <p className="text-primary font-medium">{company}</p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <Badge variant="outline" className="mb-1 flex items-center gap-1">
              <Calendar size={14} /> {duration}
            </Badge>
            <span className="text-muted-foreground text-sm flex items-center gap-1">
              <MapPin size={14} /> {location}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

interface EducationCardProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description?: string;
}

function EducationCard({
  degree,
  institution,
  duration,
  location,
  description,
}: EducationCardProps) {
  return (
    <Card className="gsap-stagger-item">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <CardTitle className="text-xl">{degree}</CardTitle>
            <p className="text-primary font-medium">{institution}</p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <Badge variant="outline" className="mb-1 flex items-center gap-1">
              <Calendar size={14} /> {duration}
            </Badge>
            <span className="text-muted-foreground text-sm flex items-center gap-1">
              <MapPin size={14} /> {location}
            </span>
          </div>
        </div>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      )}
    </Card>
  );
}