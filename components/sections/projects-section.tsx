"use client";

import React, { useState, useEffect, useRef } from "react";
import { Project, projects } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { initScrollAnimations } from "@/lib/animations";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "client" | "personal">("all");
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      initScrollAnimations();
    }
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 gsap-fade-up">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, including client projects and personal
            endeavors across various technologies.
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-2 gsap-fade-up">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            All
          </Button>
          <Button
            variant={filter === "client" ? "default" : "outline"}
            onClick={() => setFilter("client")}
            className="rounded-full"
          >
            Client Work
          </Button>
          <Button
            variant={filter === "personal" ? "default" : "outline"}
            onClick={() => setFilter("personal")}
            className="rounded-full"
          >
            Personal Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gsap-stagger-container">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectDialog 
        project={selectedProject} 
        open={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  onDetails: () => void;
}

function ProjectCard({ project, onDetails }: ProjectCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden transition-all h-full flex flex-col gsap-stagger-item",
      project.featured ? "md:col-span-2 lg:col-span-1" : ""
    )}>
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        {project.featured && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="pt-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline">+{project.technologies.length - 3}</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4 pt-0">
        <Button variant="outline" onClick={onDetails}>
          Details
        </Button>
        <div className="flex space-x-2">
          {project.github && (
            <Button variant="ghost" size="icon" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub repository</span>
              </a>
            </Button>
          )}
          {project.link && (
            <Button variant="ghost" size="icon" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Live project</span>
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

function ProjectDialog({ project, open, onClose }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            {project.category === "client" ? "Client Project" : "Personal Project"}
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative h-64 my-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        
        <div className="space-y-4">
          <p>{project.description}</p>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          {project.github && (
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
          {project.link && (
            <Button asChild className="w-full sm:w-auto">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Project
              </a>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}