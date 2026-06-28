import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass gradient-border rounded-full transition-all duration-500 ${
          scrolled ? "px-3 py-2 max-w-3xl w-full" : "px-5 py-3 max-w-4xl w-full"
        } flex items-center justify-between`}
      >
        <Link to="/" className="flex items-center gap-2 pl-2">
          <span className="size-7 rounded-full animated-gradient" aria-hidden />
          <span className="font-display text-lg italic">Rohini</span>
        </Link>
        <ul className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`/#${s.id}`}
                className="px-3 py-2 rounded-full hover:text-foreground hover:bg-white/5 transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://mail.google.com/mail/?view=cm&to=rohinimanjunath0613@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-2 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
