import { siteConfig, socials, skills, projects } from "../lib/data";

export default function Home() {
  return (
    <>
      <header>
        <div className="container nav">
          <strong>{siteConfig.name}</strong>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <div className="hero">
          <div className="eyebrow">Portfolio</div>
          <h1>
            Hi, I&apos;m {siteConfig.name}.
            <br />
            {siteConfig.role} — {siteConfig.tagline}
          </h1>
          <p>{siteConfig.bio}</p>
          <div className="cta-row">
            <a className="btn" href="#projects">View my work</a>
            <a className="btn-ghost" href="#contact">Get in touch</a>
          </div>
        </div>

        <section id="about">
          <h2>About</h2>
          <p className="section-sub">{siteConfig.location}</p>
          <p>{siteConfig.bio}</p>
          <p>
            {socials.map((s) => (
              <span key={s.label}>
                <a href={s.href}>{s.label}</a> ·{" "}
              </span>
            ))}
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p className="section-sub">TODO: Replace these placeholders with your real projects in lib/data.ts</p>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="pills">
                  {p.stack.map((s) => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>
                <div className="card-links">
                  <a href={p.liveUrl}>Live demo</a>
                  <a href={p.repoUrl}>Source</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <p className="section-sub">TODO: Edit your skills in lib/data.ts</p>
          <div className="skills">
            {skills.map((s) => (
              <span key={s} className="skill">{s}</span>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p className="section-sub">Want to work together? Reach out.</p>
          <p>
            Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <p>
            {socials.map((s) => (
              <span key={s.label}>
                <a href={s.href}>{s.label}</a> ·{" "}
              </span>
            ))}
          </p>
        </section>
      </main>

      <footer>
        <div className="container">© {new Date().getFullYear()} {siteConfig.name} — Built with Next.js</div>
      </footer>
    </>
  );
}
