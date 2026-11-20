import type { Metadata } from "next";
import { services } from "@/lib/data";
import SectionHead from "@/components/SectionHead";
import { Stagger, StaggerItem } from "@/components/Motion";
import { container, eyebrow } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack web development, dashboards, performance work, backend integrations and deployment.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className={`${container} flex flex-col gap-12 border-t border-line py-[72px] sm:py-[120px]`}>
      <SectionHead index="02" label="What I do" title="From first screen to live domain." />
      <Stagger className="flex flex-wrap gap-5">
        {services.map((service, index) => (
          <StaggerItem
            key={service.title}
            lift
            className="flex flex-[1_1_260px] flex-col gap-4 rounded-[20px] border border-line bg-surface px-7 py-8"
          >
            <div className={eyebrow}>{String(index + 1).padStart(2, "0")}</div>
            <h2 className="font-display text-[22px] font-semibold leading-[1.2]">{service.title}</h2>
            <p className="text-[15px] text-muted">{service.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </main>
  );
}
