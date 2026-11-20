import Image from "next/image";
import type { Metadata } from "next";
import { aboutParagraphs, profile } from "@/lib/data";
import { Reveal } from "@/components/Motion";
import { container, eyebrow, h2, link } from "@/lib/ui";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Masum Reza, a full-stack developer focused on React, Next.js and fintech products.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className={`${container} border-t border-line py-[72px] sm:py-[120px]`}>
      <div className="flex flex-wrap items-start gap-16">
        <Reveal className="flex max-w-[360px] flex-[1_1_280px] flex-col gap-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-line bg-[#f2f1ec]">
            <Image
              src="/images/me.jpg"
              alt="Illustrated portrait of Masum Reza"
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className="object-cover mix-blend-multiply"
            />
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3.5 font-mono text-[13px]">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
              LinkedIn ↗
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={link}>
              Résumé ↗
            </a>
          </div>
        </Reveal>

        <Reveal className="flex min-w-0 flex-[999_1_460px] flex-col gap-7" delay={0.1}>
          <div className={eyebrow}>( 01 ) About</div>
          <h1 className={h2}>
            I turn complex business flows into interfaces that feel simple and run fast.
          </h1>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </main>
  );
}
