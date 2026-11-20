import type { Metadata } from "next";
import { experience } from "@/lib/data";
import SectionHead from "@/components/SectionHead";
import { Stagger, StaggerItem } from "@/components/Motion";
import { container, eyebrow, lead } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and education of full-stack developer Masum Reza.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <main className={`${container} flex flex-col gap-12 border-t border-line py-[72px] sm:py-[120px]`}>
      <SectionHead index="05" label="Experience" title="Where I've worked." />
      <Stagger className="flex flex-col border-t border-line">
        {experience.map((item) => (
          <StaggerItem
            key={item.title}
            className="flex flex-wrap gap-x-10 gap-y-4 border-b border-line py-8"
          >
            <div className="flex flex-[0_0_220px] flex-col gap-1">
              <div className={eyebrow}>{item.period}</div>
              <div className="text-sm text-muted">{item.place}</div>
            </div>
            <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-3">
              <h2 className="font-display text-2xl font-semibold leading-[1.2]">{item.title}</h2>
              <div className="text-[15px] text-ink">{item.org}</div>
              {item.text && <p className={lead}>{item.text}</p>}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </main>
  );
}
