import Link from "next/link";
import type { Metadata } from "next";
import {
  profile,
  stats,
  techStrip,
} from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/Motion";
import {
  btnAccentLg,
  btnGhostLg,
  container,
} from "@/lib/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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

      <main>
        <section className={`${container} pb-[72px] pt-10 sm:pt-12`}>
          <Stagger immediate className="flex flex-col gap-5">
            <StaggerItem className="self-start">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 font-mono text-[13px] text-muted">
                <span className="size-2 animate-pulse rounded-full bg-accent" />
                Available for new projects
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="max-w-[1000px] font-display text-[clamp(40px,8.2vw,70px)] font-bold leading-[0.98] tracking-[-0.035em]">
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
              <Link href="/work" className={btnAccentLg}>
                See my work
              </Link>
              <Link href="/about" className={btnGhostLg}>
                More about me
              </Link>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-10 flex flex-wrap border-t border-line">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-[1_1_200px] flex-col gap-1 py-7">
                    <div className="font-display text-[40px] font-bold leading-[1.1]">{stat.value}</div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </Stagger>
        </section>

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

        <section className={`${container} grid gap-5 border-t border-line py-16 sm:grid-cols-2 sm:py-24`}>
          {[
            { href: "/services", label: "Services", title: "What I do" },
            { href: "/work", label: "Selected work", title: "What I build" },
            { href: "/toolkit", label: "Toolkit", title: "How I work" },
            { href: "/experience", label: "Experience", title: "Where I've worked" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-36 flex-col justify-between rounded-[20px] border border-line bg-surface p-6 transition-colors hover:border-accent sm:p-8"
            >
              <span className="font-mono text-[13px] text-muted">{item.label}</span>
              <span className="font-display text-2xl font-semibold group-hover:text-accent sm:text-3xl">
                {item.title} ↗
              </span>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
