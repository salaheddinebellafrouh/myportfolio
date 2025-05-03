"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { fadeIn, fadeInUp, staggerFadeInUp } from "@/lib/animations";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { aboutMe } from "@/lib/data";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !headingRef.current ||
      !subheadingRef.current ||
      !ctaRef.current ||
      !socialRef.current ||
      !scrollIndicatorRef.current
    )
      return;

    // Animation sequence
    fadeInUp(headingRef.current, 0.2);
    fadeInUp(subheadingRef.current, 0.4);
    fadeInUp(ctaRef.current, 0.6);
    
    const socialItems = Array.from(socialRef.current.children);
    staggerFadeInUp(socialItems, 0.8, 0.1);
    
    fadeIn(scrollIndicatorRef.current, 1.2);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto">
        <h1 
          ref={headingRef} 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
        >
          Hi, I'm <span className="text-primary">{aboutMe.name}</span>
        </h1>
        <p 
          ref={subheadingRef}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          {aboutMe.summary}
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div 
          ref={socialRef}
          className="flex justify-center gap-6 mb-16"
        >
          <Link 
            href="https://github.com/salaheddinebellafrouh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/sbellafr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link 
            href={`mailto:${aboutMe.email}`}
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>

      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Background gradient element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1/2 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}