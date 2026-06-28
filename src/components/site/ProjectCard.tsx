import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/site";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      className="group relative block overflow-hidden rounded-[28px] glass gradient-border p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(124,58,237,0.5)]"
    >
      <div
        className={`absolute -inset-32 -z-10 bg-gradient-to-br ${p.accent} opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-80`}
        aria-hidden
      />
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono text-muted-foreground">{p.index}</span>
        <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {p.status}
        </span>
      </div>
      <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">{p.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{p.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {p.tech.slice(0, 6).map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm text-foreground/80 group-hover:text-foreground">
        <span>Read the case study</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
