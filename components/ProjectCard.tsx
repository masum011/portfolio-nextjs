import Image from "next/image";
import type { Project } from "@/lib/data";
import { Reveal, MotionLink } from "@/components/Motion";
import { btnAccent, eyebrow, h3, lead } from "@/lib/ui";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <Reveal>
      <article className="flex flex-wrap items-center gap-10">
        <div className="min-w-0 flex-[1_1_480px] overflow-hidden rounded-[20px] border border-line bg-surface-2">
          <div className="flex items-center gap-2 border-b border-line bg-surface px-[18px] py-3.5">
            <span className="size-2.5 rounded-full bg-line-2" />
            <span className="size-2.5 rounded-full bg-line-2" />
            <span className="size-2.5 rounded-full bg-line-2" />
            <span className="ml-3 rounded-full bg-bg px-3.5 py-1 font-mono text-xs text-muted">
              {project.domain}
            </span>
          </div>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden leading-[0]"
            aria-label={`Open ${project.domain}`}
          >
            <Image
              src={project.image}
              alt={project.alt}
              width={1400}
              height={637}
              sizes="(max-width: 900px) 100vw, 600px"
              className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </a>
        </div>

        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-[18px]">
          <div className={eyebrow}>
            {n} · {project.kind}
          </div>
          <h3 className={h3}>{project.name}</h3>
          <p className={lead}>{project.description}</p>

          {project.roles && (
            <ul className="flex flex-wrap gap-2" aria-label="Dashboards built">
              {project.roles.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-accent px-3.5 py-1.5 text-[13px] font-medium text-accent"
                >
                  {r}
                </li>
              ))}
            </ul>
          )}
          {project.extra && <p className="text-[15px] text-muted">{project.extra}</p>}

          <div className="font-mono text-xs text-muted">{project.stack}</div>
          <div>
            <MotionLink href={project.href} external className={btnAccent}>
              Visit {project.domain} ↗
            </MotionLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
