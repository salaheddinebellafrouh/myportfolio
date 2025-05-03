"use client";

import React, { useEffect, useState } from "react";
import { skills as allSkills, Skill } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "ai", name: "AI" },
    { id: "tools", name: "Tools" }
  ];

  const filteredSkills = allSkills.filter(skill => 
    activeCategory === "all" || skill.category === activeCategory
  ).sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 gsap-fade-up">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit and areas of expertise.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="gsap-fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSkills.map(skill => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="p-4 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{skill.name}</h3>
        <Badge variant="outline">
          {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
        </Badge>
      </div>
      <Progress value={skill.level * 20} className="h-2 mt-1" />
    </Card>
  );
}