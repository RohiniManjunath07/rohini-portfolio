import { createFileRoute } from "@tanstack/react-router";
import portraitUrl from "@/assets/portrait.jpg";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";
import { NeuralBg } from "@/components/site/NeuralBg";
import { Counter, Reveal } from "@/components/site/Motion";
import { ProjectCard } from "@/components/site/ProjectCard";
import { BrowserMockup, PhoneMockup } from "@/components/site/Mockups";
import { projects, GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohini M — AI & Software Engineer" },
      {
        name: "description",
        content:
          "Rohini M builds AI systems, data products, and intelligent software — RAG, computer vision, edge ML and causal inference.",
      },
      { property: "og:title", content: "Rohini M — AI & Software Engineer" },
      {
        property: "og:description",
        content: "Building AI systems, data products, and intelligent software.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 6, suffix: "+", label: "Projects" },
  { value: 2, suffix: "", label: "Internships" },
  { value: 100, suffix: "+", label: "GitHub Contributions" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 90, suffix: " Days", label: "Industry Experience" },
];

const bento = [
  {
    title: "Problem Solver",
    note: "From ambiguous brief to shipped system.",
    span: "md:col-span-2 md:row-span-2",
    tone: "violet",
  },
  { title: "Software Engineer", note: "Clean architecture · APIs · clean code." },
  { title: "AI Engineer", note: "RAG, LLMs, embeddings, evaluation." },
  { title: "Data Scientist", note: "Causal inference · statistics · ML." },
  { title: "Flutter Developer", note: "Production mobile apps · on-device ML." },
  { title: "Python Developer", note: "Backends, pipelines, automation." },
  { title: "Curious Learner", note: "Reads papers, ships experiments.", span: "md:col-span-2" },
  { title: "Team Player", note: "Pairs well with designers & PMs." },
  { title: "Quick Learner", note: "Production-ready in days, not weeks." },
];

const timeline = [
  {
    kind: "Internship",
    title: "AI / ML Intern",
    org: "Industry",
    period: "90 days",
    body: "Shipped applied-AI features in a fast feedback loop with engineering and product.",
  },
  {
    kind: "Internship",
    title: "Software Engineering Intern",
    org: "Industry",
    period: "—",
    body: "Owned features end-to-end across backend and frontend surfaces.",
  },
  {
    kind: "Education",
    title: "B.E. / B.Tech",
    org: "Engineering",
    period: "Recent",
    body: "Coursework in algorithms, ML, systems, databases, and software engineering.",
  },
  {
    kind: "Project",
    title: "Healthcare RAG Assistant",
    org: "Personal",
    period: "Recent",
    body: "Retrieval-augmented clinical assistant with grounding and citations.",
  },
  {
    kind: "Project",
    title: "Biometric Auth System",
    org: "Personal",
    period: "Recent",
    body: "Flutter app doing face + voice authentication fully offline.",
  },
];

const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "JavaScript", "Dart"] },
  { title: "AI / ML", items: ["TensorFlow", "LangChain", "Scikit-Learn", "OpenCV"] },
  { title: "Frameworks", items: ["Flutter", "Django", "Streamlit"] },
  { title: "Data", items: ["Power BI", "Excel", "Pandas", "NumPy"] },
  { title: "Storage", items: ["Firebase", "SQLite", "ChromaDB"] },
  { title: "Tooling", items: ["Git", "Docker"] },
];

const certs = [
  "Data Analytics",
  "Machine Learning Foundations",
  "Python for Data Science",
  "AI / LLM Engineering",
];

const achievements = [
  { value: 6, suffix: "+", label: "Projects shipped" },
  { value: 4, suffix: "", label: "Production case studies" },
  { value: 15, suffix: "+", label: "Stacks fluent in" },
];

function Home() {
  return (
    <div className="relative">
      <CursorGlow />
      <Nav />
      <main className="relative">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GitHubSection />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] pt-32 pb-16 overflow-hidden">
      <div className="aurora" aria-hidden />
      <NeuralBg className="absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for AI & engineering roles
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              <span className="text-gradient">Rohini M</span>
              <span className="block mt-3 text-3xl sm:text-4xl lg:text-5xl text-foreground/90 font-sans font-medium">
                Building AI systems,
                <br />
                data products, and
                <br />
                intelligent software.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-base text-muted-foreground leading-relaxed">
              Engineer working at the intersection of machine learning, data, and product. I design
              systems that earn trust — grounded, observable, and built to ship.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full px-5 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-white/10"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-full px-5 py-3 text-sm font-medium glass gradient-border hover:bg-white/10 transition-all"
              >
                Contact
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-5 py-3 text-sm font-medium glass hover:bg-white/10 transition-all"
              >
                GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-5 py-3 text-sm font-medium glass hover:bg-white/10 transition-all"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-full px-5 py-3 text-sm font-medium glass hover:bg-white/10 transition-all"
              >
                Résumé
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md aspect-square">
            <div
              className="absolute inset-0 rounded-full animated-gradient blur-2xl opacity-60"
              aria-hidden
            />
            <div className="absolute inset-4 rounded-full p-[2px] animated-gradient">
              <div className="size-full rounded-full bg-background overflow-hidden relative">
                <img
                  src={portraitUrl}
                  alt="Rohini M"
                  width={896}
                  height={1152}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>
            {/* floating chips */}
            <FloatingChip className="-top-2 left-2" delay={0}>
              RAG · Llama · Groq
            </FloatingChip>
            <FloatingChip className="top-1/3 -right-6" delay={400}>
              TensorFlow Lite
            </FloatingChip>
            <FloatingChip className="bottom-6 -left-6" delay={800}>
              DoWhy · EconML
            </FloatingChip>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FloatingChip({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute glass gradient-border rounded-full px-3 py-1.5 text-xs text-muted-foreground float ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- STATS ---------- */
function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="rounded-[28px] glass gradient-border p-8 md:p-12 grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl md:text-5xl text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- ABOUT (Bento) ---------- */
function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          kicker="01 — About"
          title={
            <>
              A multidisciplinary engineer
              <br />
              wired for AI products.
            </>
          }
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] gap-4">
          {bento.map((b, i) => (
            <Reveal
              key={b.title}
              delay={i * 60}
              className={`group relative overflow-hidden rounded-[24px] glass gradient-border p-6 transition-transform duration-500 hover:-translate-y-1 ${b.span ?? ""}`}
            >
              <div
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--violet) 25%, transparent), transparent 70%)",
                }}
              />
              <div className="flex h-full flex-col justify-between">
                <p className="font-display text-2xl">{b.title}</p>
                <p className="text-xs text-muted-foreground">{b.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          kicker="02 — Experience"
          title={
            <>
              Internships, education,
              <br />
              and major projects.
            </>
          }
        />
        <div className="relative mt-16 ml-3 md:ml-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <ol className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.title + i} delay={i * 70} className="relative pl-10">
                <div className="absolute -left-[7px] top-2 size-3.5 rounded-full bg-background border border-white/30">
                  <div className="absolute inset-0.5 rounded-full animated-gradient" />
                </div>
                <div className="rounded-[20px] glass p-6 gradient-border">
                  <div className="flex flex-wrap items-baseline gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">
                      {t.kind}
                    </span>
                    <span>{t.org}</span>
                    <span>·</span>
                    <span>{t.period}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          kicker="03 — Featured work"
          title={
            <>
              Six case studies.
              <br />
              Real systems, shipped.
            </>
          }
        />
        {/* Featured: first 4 with custom layouts; last 2 placeholders */}
        <div className="mt-16 space-y-32">
          <ProjectFeature p={projects[0]} side="right">
            <BrowserMockup title="rohini.dev/healthcare-rag">
              <div className="absolute inset-0 grid grid-cols-12 gap-3 p-4 text-[10px]">
                <div className="col-span-3 rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col gap-2">
                  <div className="h-2 w-3/4 rounded bg-white/10" />
                  <div className="h-2 w-1/2 rounded bg-white/10" />
                  <div className="mt-2 space-y-1.5">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-1.5 rounded bg-white/5" />
                    ))}
                  </div>
                </div>
                <div className="col-span-6 rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col gap-2">
                  <div className="h-3 w-1/3 rounded bg-white/10" />
                  <div className="mt-2 flex-1 space-y-2">
                    <div className="rounded-lg bg-white/5 p-2">
                      <div className="h-1.5 w-5/6 rounded bg-white/10" />
                      <div className="mt-1 h-1.5 w-2/3 rounded bg-white/10" />
                    </div>
                    <div className="ml-6 rounded-lg bg-violet-500/10 border border-violet-500/30 p-2">
                      <div className="h-1.5 w-4/5 rounded bg-white/20" />
                      <div className="mt-1 h-1.5 w-3/5 rounded bg-white/20" />
                    </div>
                    <div className="rounded-lg bg-white/5 p-2">
                      <div className="h-1.5 w-3/4 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-2 flex items-center gap-2">
                    <div className="h-2 flex-1 rounded bg-white/10" />
                    <div className="size-5 rounded-md animated-gradient" />
                  </div>
                </div>
                <div className="col-span-3 rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col gap-2">
                  <div className="h-2 w-2/3 rounded bg-white/10" />
                  <div className="space-y-1.5 mt-1">
                    {[0.92, 0.81, 0.74, 0.61].map((s, i) => (
                      <div key={i} className="rounded-md bg-white/5 p-1.5">
                        <div className="flex items-center justify-between text-[9px] text-muted-foreground">
                          <span>doc_{i + 1}.pdf</span>
                          <span>{s}</span>
                        </div>
                        <div className="mt-1 h-1 rounded bg-white/10 overflow-hidden">
                          <div
                            className="h-full animated-gradient"
                            style={{ width: `${s * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BrowserMockup>
          </ProjectFeature>

          <ProjectFeature p={projects[1]} side="left">
            <div className="relative h-[460px]">
              <div
                className="absolute -inset-20 -z-10 bg-gradient-to-tr from-blue-500/20 via-cyan-500/10 to-emerald-500/15 blur-3xl rounded-full"
                aria-hidden
              />
              <div className="absolute left-0 top-8 rotate-[-6deg]">
                <PhoneMockup label="Register Face" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0">
                <PhoneMockup label="Authenticate" />
              </div>
              <div className="absolute right-0 top-8 rotate-[6deg]">
                <PhoneMockup label="Success" />
              </div>
            </div>
          </ProjectFeature>

          <ProjectFeature p={projects[2]} side="right">
            <BrowserMockup title="rohini.dev/sign-language">
              <div className="absolute inset-0 p-4 grid grid-cols-6 grid-rows-4 gap-2">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-display text-lg text-muted-foreground"
                  >
                    {String.fromCharCode(65 + (i % 26))}
                  </div>
                ))}
                <div className="col-span-2 row-span-2 rounded-xl glass gradient-border p-3 flex flex-col justify-between">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Prediction
                  </div>
                  <div className="font-display text-5xl text-gradient text-center">A</div>
                  <div className="text-[10px] text-muted-foreground text-right">conf 0.97</div>
                </div>
              </div>
            </BrowserMockup>
          </ProjectFeature>

          <ProjectFeature p={projects[3]} side="left">
            <BrowserMockup title="rohini.dev/causal-inference">
              <div className="absolute inset-0 p-4 grid grid-cols-6 gap-3 text-[10px]">
                <div className="col-span-4 rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-muted-foreground">ATE distribution</div>
                  <svg viewBox="0 0 200 80" className="mt-2 w-full">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="oklch(0.65 0.2 295)" stopOpacity="0.8" />
                        <stop offset="1" stopColor="oklch(0.65 0.2 295)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,70 C30,40 50,20 80,30 S140,70 200,20 L200,80 L0,80 Z"
                      fill="url(#g1)"
                    />
                    <path
                      d="M0,70 C30,40 50,20 80,30 S140,70 200,20"
                      stroke="oklch(0.78 0.15 295)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="col-span-2 rounded-xl bg-white/5 border border-white/10 p-3 space-y-2">
                  {[
                    { l: "ATE", v: "+0.214" },
                    { l: "ITE σ", v: "0.063" },
                    { l: "PSM bal.", v: "0.94" },
                  ].map((k) => (
                    <div key={k.l} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{k.l}</span>
                      <span className="font-mono">{k.v}</span>
                    </div>
                  ))}
                </div>
                <div className="col-span-3 rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-muted-foreground">Treatment vs Control</div>
                  <div className="mt-2 grid grid-cols-10 gap-0.5 items-end h-16">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-sm"
                        style={{
                          height: `${20 + Math.abs(Math.sin(i)) * 70}%`,
                          background:
                            i % 2 ? "oklch(0.65 0.2 255 / 0.7)" : "oklch(0.65 0.2 295 / 0.7)",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-span-3 rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-muted-foreground">Feature distribution</div>
                  <svg viewBox="0 0 200 60" className="mt-2 w-full">
                    <path
                      d="M0,55 C40,10 60,50 100,25 S160,5 200,40"
                      stroke="oklch(0.74 0.18 165)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M0,55 C40,30 80,15 120,30 S180,50 200,30"
                      stroke="oklch(0.65 0.2 255)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </BrowserMockup>
          </ProjectFeature>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(4).map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectFeature({
  p,
  side,
  children,
}: {
  p: (typeof projects)[number];
  side: "left" | "right";
  children: React.ReactNode;
}) {
  const order = side === "right" ? "lg:order-2" : "";
  return (
    <Reveal>
      <div className="relative">
        <div
          className={`absolute -inset-x-20 -inset-y-24 -z-10 bg-gradient-to-br ${p.accent} opacity-40 blur-3xl rounded-[80px]`}
          aria-hidden
        />
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className={`lg:col-span-6 ${order}`}>
            <div className="text-xs font-mono text-muted-foreground">
              {p.index} · {p.category}
            </div>
            <h3 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">{p.title}</h3>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">{p.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tech.slice(0, 7).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href={`/projects/${p.slug}`}
                className="rounded-full px-5 py-2.5 text-sm font-medium bg-white text-black hover:bg-white/90 transition-all hover:-translate-y-0.5"
              >
                Read case study →
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">{children}</div>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- SKILLS ---------- */
function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          kicker="04 — Stack"
          title={
            <>
              Tools I reach for
              <br />
              when shipping.
            </>
          }
        />
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {skillGroups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 60}
              className="rounded-[24px] glass gradient-border p-6"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{g.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="group relative rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-sm transition-all hover:bg-white/10 hover:-translate-y-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GITHUB ---------- */
function GitHubSection() {
  // Animated contribution heatmap (decorative)
  const cells = Array.from({ length: 7 * 26 }, (_, i) => {
    const r = Math.abs(Math.sin(i * 0.7) + Math.cos(i * 0.3));
    return Math.min(4, Math.floor(r * 4));
  });
  const tones = [
    "bg-white/5",
    "bg-violet-500/30",
    "bg-violet-500/55",
    "bg-violet-400/75",
    "bg-violet-300",
  ];
  const pinned = [
    {
      name: "healthcare-rag-assistant",
      desc: "Grounded RAG over private medical docs.",
      lang: "Python",
    },
    { name: "biometric-auth-flutter", desc: "Offline face + voice authentication.", lang: "Dart" },
    { name: "sign-language-cnn", desc: "CNN for static sign recognition.", lang: "Python" },
    {
      name: "causal-inference-dashboard",
      desc: "ATE, ITE, PSM, DR — interactively.",
      lang: "Python",
    },
  ];
  return (
    <section id="github" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel kicker="05 — GitHub" title={<>Code, in public.</>} />
        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-8 rounded-[28px] glass gradient-border p-8">
            <div className="flex items-baseline justify-between">
              <p className="font-display text-2xl">Contribution graph</p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                @RohiniManjunath07 ↗
              </a>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl">
              <div className="grid grid-flow-col grid-rows-7 gap-1">
                {cells.map((v, i) => (
                  <div
                    key={i}
                    className={`size-3 rounded-[3px] ${tones[v]} transition-colors`}
                    style={{ animation: "reveal-up 0.6s both", animationDelay: `${i * 4}ms` }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
              Less{" "}
              {tones.map((t, i) => (
                <span key={i} className={`size-3 rounded-[3px] ${t}`} />
              ))}{" "}
              More
            </div>
          </Reveal>
          <Reveal
            delay={120}
            className="lg:col-span-4 rounded-[28px] glass gradient-border p-8 space-y-4"
          >
            <p className="font-display text-2xl">Most used</p>
            {[
              { l: "Python", v: 62 },
              { l: "Dart", v: 18 },
              { l: "JavaScript", v: 12 },
              { l: "SQL", v: 8 },
            ].map((l) => (
              <div key={l.l}>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{l.l}</span>
                  <span>{l.v}%</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full animated-gradient" style={{ width: `${l.v}%` }} />
                </div>
              </div>
            ))}
          </Reveal>
          <div className="lg:col-span-12 grid md:grid-cols-2 gap-4">
            {pinned.map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 70}
                className="rounded-[24px] glass gradient-border p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">{r.name}</span>
                  <span className="text-[10px] text-muted-foreground rounded-full border border-white/10 px-2 py-0.5">
                    {r.lang}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CERTIFICATIONS ---------- */
function Certifications() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel kicker="06 — Certifications" title={<>Learning, continuously.</>} />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <Reveal
              key={c}
              delay={i * 70}
              className="group relative rounded-[24px] glass gradient-border p-6 overflow-hidden"
            >
              <div
                className="absolute -inset-10 -z-10 opacity-50 blur-3xl bg-gradient-to-br from-violet-500/30 to-blue-500/20"
                aria-hidden
              />
              <div className="font-mono text-xs text-muted-foreground">CERT · 0{i + 1}</div>
              <p className="mt-4 font-display text-xl">{c}</p>
              <p className="mt-6 text-xs text-muted-foreground">Available on GitHub / LinkedIn</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ACHIEVEMENTS ---------- */
function Achievements() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          kicker="07 — Achievements"
          title={
            <>
              Numbers I keep
              <br />
              pushing up.
            </>
          }
        />
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <Reveal
              key={a.label}
              delay={i * 80}
              className="rounded-[28px] glass gradient-border p-10 text-center"
            >
              <div className="font-display text-6xl text-gradient">
                <Counter to={a.value} suffix={a.suffix} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{a.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="relative rounded-[32px] overflow-hidden">
          <div
            className="absolute inset-0 -z-10 animated-gradient opacity-30 blur-3xl"
            aria-hidden
          />
          <div className="rounded-[32px] glass-strong gradient-border p-12 md:p-20 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">08 — Contact</p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
              Let's build something <span className="text-gradient italic">intelligent.</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
              Open to engineering roles, AI product collaborations, and research-flavoured builds.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-all hover:-translate-y-0.5"
              >
                Email
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 text-sm font-medium glass gradient-border hover:bg-white/10 transition-all"
              >
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 text-sm font-medium glass hover:bg-white/10 transition-all"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 text-sm font-medium glass hover:bg-white/10 transition-all"
              >
                Résumé
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- shared ---------- */
function SectionLabel({ kicker, title }: { kicker: string; title: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{kicker}</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}
