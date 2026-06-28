import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Reveal } from "@/components/site/Motion";
import { BrowserMockup, PhoneMockup } from "@/components/site/Mockups";
import { GITHUB_URL, projectBySlug, projects } from "@/data/site";

// Biometric
import biometricHome from "../assets/biometric/home.png";
import biometricRegister from "../assets/biometric/register-face.png";
import biometricAuthenticate from "../assets/biometric/authenticate-face.png";
import biometricResult from "../assets/biometric/register-face-success.png";

// Healthcare RAG
import ragHome from "../assets/healthcare/homepage.png";
import ragChat from "../assets/healthcare/chat-demo.png";
import ragDebug from "../assets/healthcare/retrieval-debug.png";

// Causal Inference
import causalDashboard from "../assets/causal/dashboard.png";
import treatmentDist from "../assets/causal/treatmen-group-distribution.png";
import outcomeHist from "../assets/causal/outcome-distribution-hist.png";

// Sign Language
import signHome from "../assets/sign-language/american_sign_language.png";
import signPrediction from "../assets/sign-language/amer_sign2.png";
import signTraining from "../assets/sign-language/training-and-validation-accuracy-and-loss.png";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Rohini M` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: `${loaderData.project.title} — Rohini M` },
          { property: "og:description", content: loaderData.project.summary },
        ]
      : [{ title: "Project — Rohini M" }],
  }),
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">Project not found.</p>
        <Link to="/" className="mt-4 inline-block underline">
          Back home
        </Link>
      </div>
    </div>
  ),
});

function ProjectPage() {
  const data = Route.useLoaderData() as { project: NonNullable<ReturnType<typeof projectBySlug>> };
  const p = data.project;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  if (p.status === "Coming Soon") {
    return (
      <div className="relative">
        <CursorGlow />
        <Nav />
        <main className="min-h-[100svh] pt-40 pb-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="aurora" aria-hidden />
            <p className="font-mono text-xs text-muted-foreground">
              {p.index} · {p.category}
            </p>
            <h1 className="mt-6 font-display text-6xl md:text-8xl tracking-tight">
              <span className="text-gradient">{p.title}</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">{p.summary}</p>
            <div className="mt-12 inline-flex rounded-full glass gradient-border px-6 py-3 text-sm">
              <span className="size-2 rounded-full bg-amber-400 animate-pulse mr-3 self-center" />
              Coming Soon — Case study in progress
            </div>
            <div className="mt-14">
              <Link
                to="/"
                hash="projects"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                ← Back to projects
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative">
      <CursorGlow />
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative isolate pt-36 pb-20 overflow-hidden">
          <div className="aurora" aria-hidden />
          <div
            className={`absolute -inset-x-20 top-20 -z-10 h-[600px] bg-gradient-to-br ${p.accent} opacity-50 blur-3xl rounded-[120px]`}
            aria-hidden
          />
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <Link
                to="/"
                hash="projects"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                ← All projects
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 font-mono text-xs text-muted-foreground">
                {p.index} · {p.category} · {p.status}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
                <span className="text-gradient">{p.title}</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{p.tagline}</p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-8 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            {p.github && (
              <Reveal delay={300}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-medium bg-white text-black hover:bg-white/90 transition-all hover:-translate-y-0.5"
                >
                  View on GitHub →
                </a>
              </Reveal>
            )}

            {/* Hero visual */}
            <Reveal delay={350} className="mt-16">
              {p.surface === "mobile" ? (
                <div className="relative h-[520px]">
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <PhoneMockup label="App" />
                  </div>
                  <div className="hidden md:block absolute left-[18%] top-12 rotate-[-8deg] opacity-80">
                    <PhoneMockup label="Register" />
                  </div>
                  <div className="hidden md:block absolute right-[18%] top-12 rotate-[8deg] opacity-80">
                    <PhoneMockup label="Result" />
                  </div>
                </div>
              ) : (
                <BrowserMockup title={`rohini.dev/${p.slug}`}>
                  <img
                    src={p.screenshots?.[0]}
                    alt={`${p.title} Main Screenshot`}
                    className="w-full h-full object-contain"
                  />
                </BrowserMockup>
              )}
            </Reveal>
          </div>
        </section>

        {/* OVERVIEW + PROBLEM */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
            <Reveal>
              <Block kicker="Overview">{p.overview}</Block>
            </Reveal>
            <Reveal delay={120}>
              <Block kicker="Problem statement">{p.problem}</Block>
            </Reveal>
            {p.research && (
              <Reveal delay={200} className="md:col-span-2">
                <Block kicker="Research">{p.research}</Block>
              </Reveal>
            )}
          </div>
        </section>

        {/* ARCHITECTURE */}
        {p.architecture && (
          <section className="relative py-24">
            <div className="mx-auto max-w-5xl px-6">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Architecture
                </p>
                <h2 className="mt-3 font-display text-3xl md:text-5xl">How the system thinks.</h2>
              </Reveal>
              <div className="mt-12 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-400/40 to-transparent" />
                <ol className="space-y-6">
                  {p.architecture.map((n, i) => (
                    <Reveal
                      as="li"
                      key={n.node}
                      delay={i * 70}
                      className={`relative grid grid-cols-2 gap-8 items-center`}
                    >
                      <div className={i % 2 === 0 ? "text-right pr-8" : "col-start-2 pl-8"}>
                        <div className="inline-block rounded-[20px] glass gradient-border px-5 py-4">
                          <div className="font-display text-lg">{n.node}</div>
                          {n.detail && (
                            <div className="mt-1 text-xs text-muted-foreground max-w-xs">
                              {n.detail}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 size-3 rounded-full bg-background border border-white/20">
                        <div className="absolute inset-0.5 rounded-full animated-gradient" />
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* WORKFLOW + IMPLEMENTATION */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8">
            {p.workflow && (
              <Reveal className="rounded-[24px] glass gradient-border p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Workflow</p>
                <ol className="mt-6 space-y-4">
                  {p.workflow.map((w, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-mono text-xs text-muted-foreground mt-1">0{i + 1}</span>
                      <span className="text-sm">{w}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            )}
            {p.implementation && (
              <Reveal delay={120} className="rounded-[24px] glass gradient-border p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Implementation
                </p>
                <ul className="mt-6 space-y-3">
                  {p.implementation.map((w, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="mt-2 size-1.5 rounded-full bg-violet-400 shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </section>

        {/* CHALLENGES */}
        {p.challenges && (
          <section className="relative py-24">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Challenges
                </p>
                <h2 className="mt-3 font-display text-3xl md:text-5xl">The hard parts.</h2>
              </Reveal>
              <div className="mt-10 grid md:grid-cols-3 gap-4">
                {p.challenges.map((c, i) => (
                  <Reveal
                    key={c.title}
                    delay={i * 80}
                    className="rounded-[24px] glass gradient-border p-6"
                  >
                    <div className="font-display text-xl">{c.title}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SCREENSHOTS placeholders */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Screenshots
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl">Designed for real screens.</h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl">
                Drop real screenshots into these frames — the layout adapts.
              </p>
            </Reveal>
            <div className="mt-12">
              {p.surface === "mobile" ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {p.screenshots?.map((image, index) => (
                    <PhoneMockup key={index} label="" image={image} />
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {p.screenshots?.slice(1).map((image, index) => (
                    <Reveal key={index} delay={index * 100}>
                      <BrowserMockup title={`${p.title}`}>
                        <img
                          src={image}
                          alt={`${p.title} ${index + 2}`}
                          className="w-full h-full object-contain bg-[#0b0b14]"
                        />
                      </BrowserMockup>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RESULTS + LESSONS + FUTURE */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-4">
            {[
              { kicker: "Results", items: p.results },
              { kicker: "Lessons learned", items: p.lessons },
              { kicker: "Future improvements", items: p.future },
            ].map((b, idx) =>
              b.items ? (
                <Reveal
                  key={b.kicker}
                  delay={idx * 80}
                  className="rounded-[24px] glass gradient-border p-8"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {b.kicker}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm">
                    {b.items.map((it, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 size-1.5 rounded-full bg-violet-400 shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : null,
            )}
          </div>
        </section>

        {p.metrics && (
          <section className="relative py-12">
            <div className="mx-auto max-w-6xl px-6">
              <div className="rounded-[28px] glass gradient-border p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-3xl text-gradient">{m.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA + NEXT */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-[28px] glass-strong gradient-border p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Source</p>
              <h3 className="mt-3 font-display text-2xl">See the code</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Public repository, ready to read.
              </p>
              <a
                href={p.github ?? GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-medium bg-white text-black hover:bg-white/90 transition-all hover:-translate-y-0.5"
              >
                Open GitHub →
              </a>
            </div>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group rounded-[28px] glass gradient-border p-10 transition-all hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Next case study
              </p>
              <h3 className="mt-3 font-display text-2xl group-hover:text-gradient">{next.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{next.tagline}</p>
              <div className="mt-6 text-sm">Read next →</div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Block({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  if (!children) return null;
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{kicker}</p>
      <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/90">{children}</p>
    </div>
  );
}
