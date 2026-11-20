import { container } from "@/lib/ui";

type SkeletonPage = "home" | "about" | "services" | "work" | "toolkit" | "experience" | "contact";

function Block({ className = "" }: { className?: string }) {
  return <div className={`motion-safe:animate-pulse rounded-lg bg-surface-2 ${className}`} />;
}

function Heading() {
  return (
    <div className="flex flex-col gap-5">
      <Block className="h-4 w-28" />
      <Block className="h-12 w-full max-w-[620px]" />
      <Block className="h-8 w-4/5 max-w-[480px]" />
    </div>
  );
}

export default function ContentSkeleton({ page }: { page: SkeletonPage }) {
  if (page === "home") {
    return (
      <main aria-busy="true" aria-label="Loading home page">
        <section className={`${container} flex flex-col gap-5 pb-[72px] pt-10 sm:pt-12`}>
          <Block className="h-10 w-48 rounded-full" />
          <Block className="h-24 w-full max-w-[900px] sm:h-40" />
          <Block className="h-6 w-full max-w-[620px]" />
          <Block className="h-6 w-4/5 max-w-[500px]" />
          <div className="flex gap-3.5 pt-2">
            <Block className="h-[52px] w-36 rounded-full" />
            <Block className="h-[52px] w-40 rounded-full" />
          </div>
          <div className="mt-10 flex flex-wrap gap-8 border-t border-line pt-7">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-[1_1_160px] flex-col gap-3">
                <Block className="h-10 w-24" />
                <Block className="h-4 w-32" />
              </div>
            ))}
          </div>
        </section>
        <div className="border-y border-line bg-surface-2 py-8" />
        <section className={`${container} grid gap-5 border-t border-line py-16 sm:grid-cols-2 sm:py-24`}>
          {[1, 2, 3, 4].map((item) => (
            <Block key={item} className="h-36 rounded-[20px] border border-line" />
          ))}
        </section>
      </main>
    );
  }

  if (page === "about") {
    return (
      <main aria-busy="true" aria-label="Loading about page" className={`${container} border-t border-line py-[72px] sm:py-[120px]`}>
        <div className="flex flex-wrap items-start gap-16">
          <div className="flex max-w-[360px] flex-[1_1_280px] flex-col gap-5">
            <Block className="aspect-[4/5] w-full rounded-[20px]" />
            <Block className="h-5 w-56" />
          </div>
          <div className="flex min-w-0 flex-[999_1_460px] flex-col gap-7">
            <Heading />
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col gap-3">
                <Block className="h-5 w-full" />
                <Block className="h-5 w-11/12" />
                <Block className="h-5 w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (page === "services") {
    return (
      <main aria-busy="true" aria-label="Loading services page" className={`${container} flex flex-col gap-12 border-t border-line py-[72px] sm:py-[120px]`}>
        <Heading />
        <div className="flex flex-wrap gap-5">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-[1_1_260px] flex-col gap-5 rounded-[20px] border border-line bg-surface px-7 py-8">
              <Block className="h-4 w-10" />
              <Block className="h-7 w-4/5" />
              <Block className="h-4 w-full" />
              <Block className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </main>
    );
  }

  if (page === "work") {
    return (
      <main aria-busy="true" aria-label="Loading projects page" className={`${container} flex flex-col gap-16 border-t border-line py-[72px] sm:py-[120px]`}>
        <Heading />
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-wrap items-center gap-10">
            <Block className="min-h-64 flex-[1_1_480px] rounded-[20px]" />
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-5">
              <Block className="h-4 w-32" />
              <Block className="h-9 w-3/4" />
              <Block className="h-5 w-full" />
              <Block className="h-5 w-5/6" />
              <Block className="h-12 w-40 rounded-full" />
            </div>
          </div>
        ))}
      </main>
    );
  }

  if (page === "toolkit") {
    return (
      <main aria-busy="true" aria-label="Loading toolkit page" className={`${container} flex flex-col gap-12 border-t border-line py-[72px] sm:py-[120px]`}>
        <Heading />
        <div className="flex flex-col border-t border-line">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex flex-wrap gap-x-10 gap-y-3 border-b border-line py-[26px]">
              <Block className="h-6 w-[220px]" />
              <Block className="h-6 min-w-0 flex-[1_1_360px]" />
            </div>
          ))}
        </div>
      </main>
    );
  }

  if (page === "experience") {
    return (
      <main aria-busy="true" aria-label="Loading experience page" className={`${container} flex flex-col gap-12 border-t border-line py-[72px] sm:py-[120px]`}>
        <Heading />
        <div className="flex flex-col border-t border-line">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-wrap gap-x-10 gap-y-4 border-b border-line py-8">
              <div className="flex flex-[0_0_220px] flex-col gap-3">
                <Block className="h-4 w-32" />
                <Block className="h-4 w-24" />
              </div>
              <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-3">
                <Block className="h-8 w-3/4" />
                <Block className="h-5 w-40" />
                <Block className="h-5 w-full" />
                <Block className="h-5 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main aria-busy="true" aria-label="Loading contact page" className={`${container} border-t border-line py-[72px] sm:py-[120px]`}>
      <section className="flex min-h-[480px] flex-col items-center justify-center gap-7 rounded-[28px] border border-line bg-surface px-5 py-12 text-center sm:px-10 sm:py-[72px]">
        <Block className="h-4 w-24" />
        <Block className="h-16 w-full max-w-[700px]" />
        <Block className="h-5 w-full max-w-[480px]" />
        <Block className="h-5 w-4/5 max-w-[400px]" />
        <Block className="h-14 w-52 rounded-full" />
        <Block className="h-5 w-40" />
      </section>
    </main>
  );
}
