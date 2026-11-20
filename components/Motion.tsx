"use client";

import { MotionConfig, motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Wrap the app once. Respects the visitor's "reduce motion" setting. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Animate on page load instead of when scrolled into view */
  immediate?: boolean;
};

/** Slide into place once in view while keeping server-rendered content visible. */
export function Reveal({ children, className, delay = 0, y = 24, immediate = false }: RevealProps) {
  const target = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y }}
      {...(immediate
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "-80px" } })}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 1, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/** Parent that staggers its <StaggerItem> children. */
export function Stagger({
  children,
  className,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "-80px" } })}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  lift = false,
}: {
  children: ReactNode;
  className?: string;
  /** Lift slightly on hover (cards) */
  lift?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={item}
      whileHover={lift ? { y: -6 } : undefined}
      transition={lift ? { type: "spring", stiffness: 300, damping: 22 } : undefined}
    >
      {children}
    </motion.div>
  );
}

/** Link/button with a small hover and press animation. */
export function MotionLink({
  href,
  className,
  children,
  external = false,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </motion.a>
  );
}
