"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { FloatingDock } from "../ui/floating-dock";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-16">
      <h2
        className={cn(
          "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-16",
          "bg-gradient-to-b from-black/80 to-black/50 dark:from-white/80 dark:to-white/20"
        )}
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
    >
      <Image
        src={project.src}
        alt={project.title}
        width={400}
        height={250}
        className="w-full h-[250px] object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        <span className="text-xs text-zinc-300 bg-white/20 px-2 rounded-md w-fit mt-1">
          {project.category}
        </span>
      </div>
    </Link>
  );
};

export default ProjectsSection;
