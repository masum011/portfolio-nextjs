import type { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import SectionHead from "@/components/SectionHead";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Explore fintech, business and brand websites built by Masum Reza.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className={`${container} flex flex-col gap-16 border-t border-line py-[72px] sm:py-[120px]`}>
      <SectionHead index="03" label="Selected work" title="Live products, built end to end." />
      <div className="flex flex-col gap-16 sm:gap-[88px]">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
