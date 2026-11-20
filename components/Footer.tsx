import Link from "next/link";
import { profile } from "@/lib/data";
import { container, link } from "@/lib/ui";

export default function Footer() {
  return (
    <footer
      className={`${container} flex flex-wrap items-center justify-between gap-4 border-t border-line py-8 text-sm text-muted`}
    >
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
        <Link href="/about" className={link}>About</Link>
        <Link href="/work" className={link}>Work</Link>
        <Link href="/contact" className={link}>Contact</Link>
      </nav>
      <span className="font-mono text-xs">{profile.role}</span>
    </footer>
  );
}
