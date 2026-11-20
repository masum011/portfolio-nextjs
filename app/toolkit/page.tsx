import type { Metadata } from "next";
import { skills } from "@/lib/data";
import SectionHead from "@/components/SectionHead";
import { Stagger, StaggerItem } from "@/components/Motion";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Toolkit",
  description: "Technologies and tools used for frontend, backend, performance and deployment.",
  alternates: { canonical: "/toolkit" },
};

export default function ToolkitPage() {
  return (
    <main className={`${container} flex flex-col gap-12 border-t border-line py-[72px] sm:py-[120px]`}>
      <SectionHead index="04" label="Toolkit" title="What I work with." />
      <Stagger className="flex flex-col border-t border-line">
        {skills.map((skill) => (
          <StaggerItem
            key={skill.group}
            className="flex flex-wrap gap-x-10 gap-y-3 border-b border-line py-[26px]"
          >
            <h2 className="flex-[0_0_220px] font-display text-lg font-semibold">{skill.group}</h2>
            <p className="min-w-0 flex-[1_1_360px] text-base text-muted">{skill.items}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </main>
  );
}
