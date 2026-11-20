// Shared Tailwind class strings, so the look stays consistent and easy to tweak.

export const container = "mx-auto w-full max-w-[1200px] px-4 sm:px-6";

export const eyebrow = "font-mono text-[13px] text-accent";

export const h2 =
  "font-display font-semibold text-[clamp(30px,4.4vw,52px)] leading-[1.1] tracking-[-0.02em] max-w-[760px]";

export const h3 = "font-display text-2xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl";

export const lead = "text-base text-muted";

export const btn =
  "inline-flex items-center rounded-full font-semibold text-[15px] transition-colors";

// Regular, large and extra-large buttons (sizes are written out so they never conflict)
export const btnAccent = `${btn} min-h-12 px-6 bg-accent text-bg hover:text-bg`;
export const btnAccentLg = `${btn} min-h-[52px] px-7 bg-accent text-bg hover:text-bg`;
export const btnAccentXl = `${btn} min-h-14 px-8 text-base bg-accent text-bg hover:text-bg`;

export const btnGhostLg = `${btn} min-h-[52px] px-7 border border-line-2 text-ink font-medium hover:border-muted hover:text-ink`;

export const link = "text-muted transition-colors hover:text-ink";
