import { Link } from "@tanstack/react-router";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="size-8 rounded-full animated-gradient" aria-hidden />
            <span className="font-display italic text-2xl">Rohini M</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Building AI systems, data products, and intelligent software. Available for engineering
            roles and collaborations.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-foreground transition-colors" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                className="hover:text-foreground transition-colors"
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="hover:text-foreground transition-colors"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-muted-foreground">{PHONE}</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" hash="projects" className="hover:text-foreground transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/" hash="experience" className="hover:text-foreground transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/" hash="skills" className="hover:text-foreground transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/" hash="contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rohini M · Crafted with attention to detail.
      </div>
    </footer>
  );
}
