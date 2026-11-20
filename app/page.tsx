import Image from "next/image";
import {
  profile,
  stats,
  techStrip,
  aboutParagraphs,
  services,
  projects,
  skills,
  experience,
} from "@/lib/data";
import SectionHead from "@/components/SectionHead";
import ProjectCard from "@/components/ProjectCard";
import { Reveal, Stagger, StaggerItem, MotionLink } from "@/components/Motion";
import Navbar from "@/components/Navbar";
import {
  btnAccentLg,
  btnAccentXl,
  btnGhostLg,
  container,
  eyebrow,
  h2,
  lead,
  link,
} from "@/lib/ui";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    url: profile.site,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Supabase",
      "REST APIs",
      "GraphQL",
      "JWT authentication",
      "SEO",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        {/* HERO */}
        <section id="top" className={`${container} pb-[72px] pt-10 sm:pt-12`}>
          <Stagger immediate className="flex flex-col gap-5">
            <StaggerItem className="self-start">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 font-mono text-[13px] text-muted">
                <span className="size-2 animate-pulse rounded-full bg-accent" />
                Available for new projects
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="max-w-[1000px] font-display text-[clamp(40px,8.2vw,104px)] font-bold leading-[0.98] tracking-[-0.035em]">
                Full-stack developer building <span className="text-accent">fintech products</span>{" "}
                and fast web apps.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-[620px] text-[17px] text-muted sm:text-[19px]">
                I&apos;m {profile.name}, a full-stack developer focused on React and Next.js. I build
                responsive websites and role-based dashboards, connect them to backend services and
                APIs, and help bring them live with hosting and SEO.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-wrap gap-3.5 pt-2">
              <MotionLink href="#work" className={btnAccentLg}>
                See my work
              </MotionLink>
              <MotionLink href={`mailto:${profile.email}`} className={btnGhostLg}>
                {profile.email}
              </MotionLink>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-10 flex flex-wrap border-t border-line">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-[1_1_200px] flex-col gap-1 py-7">
                    <div className="font-display text-[40px] font-bold leading-[1.1]">{s.value}</div>
                    <div className="text-sm text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </Stagger>
        </section>

        {/* TECH STRIP */}
        <div className="border-y border-line bg-surface-2">
          <div className={`${container} overflow-hidden py-[22px]`}>
            <div className="tech-marquee flex w-max">
              {[false, true].map((duplicate) => (
                <ul
                  key={String(duplicate)}
                  aria-label={duplicate ? undefined : "Technologies"}
                  aria-hidden={duplicate || undefined}
                  className="flex shrink-0 gap-x-6 pr-6 font-mono text-sm text-muted sm:gap-x-9 sm:pr-9"
                >
                  {techStrip.map((technology) => (
                    <li key={technology} className="whitespace-nowrap">
                      {technology}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className={`${container} border-t border-line py-[72px] sm:py-[120px]`}>
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
              <h2 className={h2}>
                I turn complex business flows into interfaces that feel simple and run fast.
              </h2>
              {aboutParagraphs.map((p) => (
                <p key={p} className="text-lg text-muted">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className={`${container} flex flex-col gap-12 border-t border-line pb-[72px] pt-10 sm:pb-[120px]`}>
          <SectionHead index="02" label="What I do" title="From first screen to live domain." />
          <Stagger className="flex flex-wrap gap-5">
            {services.map((s, i) => (
              <StaggerItem
                key={s.title}
                lift
                className="flex flex-[1_1_260px] flex-col gap-4 rounded-[20px] border border-line bg-surface px-7 py-8"
              >
                <div className={eyebrow}>{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-[22px] font-semibold leading-[1.2]">{s.title}</h3>
                <p className="text-[15px] text-muted">{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* WORK */}
        <section id="work" className={`${container} flex flex-col gap-16 border-t border-line pb-[72px] pt-10 sm:pb-[120px]`}>
          <SectionHead index="03" label="Selected work" title="Live products, built end to end." />
          <div className="flex flex-col gap-16 sm:gap-[88px]">
            {projects.map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
          </div>
        </section>

        {/* TOOLKIT */}
        <section id="stack" className={`${container} flex flex-col gap-12 border-t border-line pb-[72px] pt-10 sm:pb-[120px]`}>
          <SectionHead index="04" label="Toolkit" title="What I work with." />
          <Stagger className="flex flex-col border-t border-line">
            {skills.map((s) => (
              <StaggerItem key={s.group} className="flex flex-wrap gap-x-10 gap-y-3 border-b border-line py-[26px]">
                <div className="flex-[0_0_220px] font-display text-lg font-semibold">{s.group}</div>
                <div className="min-w-0 flex-[1_1_360px] text-base text-muted">{s.items}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className={`${container} flex flex-col gap-12 border-t border-line pb-[72px] pt-10 sm:pb-[120px]`}>
          <SectionHead index="05" label="Experience" title="Where I've worked." />
          <Stagger className="flex flex-col border-t border-line">
            {experience.map((e) => (
              <StaggerItem key={e.title} className="flex flex-wrap gap-x-10 gap-y-4 border-b border-line py-8">
                <div className="flex flex-[0_0_220px] flex-col gap-1">
                  <div className={eyebrow}>{e.period}</div>
                  <div className="text-sm text-muted">{e.place}</div>
                </div>
                <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-3">
                  <h3 className="font-display text-2xl font-semibold leading-[1.2]">{e.title}</h3>
                  <div className="text-[15px] text-ink">{e.org}</div>
                  {e.text && <p className={lead}>{e.text}</p>}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${container} border-t border-line pb-[72px] pt-10 sm:pb-[120px]`}>
          <Reveal>
            <div className="flex flex-col items-center gap-7 rounded-[28px] border border-line bg-surface px-5 py-12 text-center sm:px-10 sm:py-[72px]">
              <div className={eyebrow}>( 06 ) Contact</div>
              <h2 className="max-w-[800px] font-display text-[clamp(34px,6vw,72px)] font-bold leading-[1.02] tracking-[-0.03em]">
                Have a project in mind? Let&apos;s build it.
              </h2>
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
            </div>
          </Reveal>
        </section>
      </main>

      <footer className={`${container} flex flex-wrap justify-between gap-3 pb-12 text-sm text-muted`}>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs">{profile.role}</span>
      </footer>
    </>
  );
}
