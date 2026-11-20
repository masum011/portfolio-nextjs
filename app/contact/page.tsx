import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/data";
import { Reveal, MotionLink } from "@/components/Motion";
import { btnAccentXl, container, eyebrow, link } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Masum Reza about freelance projects and full-stack development roles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className={`${container} border-t border-line py-[72px] sm:py-[120px]`}>
      <Reveal>
        <section className="flex flex-col items-center gap-7 rounded-[28px] border border-line bg-surface px-5 py-12 text-center sm:px-10 sm:py-[72px]">
          <div className={eyebrow}>( 06 ) Contact</div>
          <h1 className="max-w-[800px] font-display text-[clamp(34px,6vw,72px)] font-bold leading-[1.02] tracking-[-0.03em]">
            Have a project in mind? Let&apos;s build it.
          </h1>
          <p className="max-w-[520px] text-lg text-muted">
            I&apos;m open to freelance projects and full-stack development roles. Email or call, whichever
            suits you.
          </p>
          <MotionLink href={`mailto:${profile.email}`} className={btnAccentXl}>
            {profile.email}
          </MotionLink>
          <a href={profile.phoneHref} className="font-mono text-base text-ink hover:text-accent">
            {profile.phone}
          </a>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3.5 font-mono text-sm">
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
          <Link href="/work" className={`${link} pt-2`}>
            Back to selected work
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
