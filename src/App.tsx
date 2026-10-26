import { useState, useEffect } from "react"
import {
  skillsData,
  workProjects,
  linkedinEmbeds,
  socialLinks,
} from "./data/portfolioData"
import DetailProject from "./components/DetailProject"
import FadeInSection from "./components/FadeInSection"

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`
const A = `${baseUrl}assets`

export default function App() {
  const [filter, setFilter] = useState("All")
  const [visibleCount, setVisibleCount] = useState(6)
  const filters = ["All", "Mobile App", "Web App", "System Design"]

  // Typewriter effect matching Poorna's site
  const [typedIndex, setTypedIndex] = useState(0)
  const prefix = "hello, "
  const name = "Mitha"
  const suffix = " here."
  const totalLength = prefix.length + name.length + suffix.length

  useEffect(() => {
    if (typedIndex < totalLength) {
      const timer = setTimeout(() => {
        setTypedIndex((prev) => prev + 1)
      }, 70)
      return () => clearTimeout(timer)
    }
  }, [typedIndex, totalLength])

  const part1 = prefix.slice(0, Math.min(typedIndex, prefix.length))
  const part2 =
    typedIndex > prefix.length
      ? name.slice(0, Math.min(typedIndex - prefix.length, name.length))
      : ""
  const part3 =
    typedIndex > prefix.length + name.length
      ? suffix.slice(0, Math.min(typedIndex - (prefix.length + name.length), suffix.length))
      : ""
  const isComplete = typedIndex >= totalLength

  const filteredWork =
    filter === "All"
      ? workProjects
      : workProjects.filter((item) => item.category === filter)
  const visibleWork = filteredWork.slice(0, visibleCount)

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    setVisibleCount(6)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030e21] text-white">
      {/* Fixed locked navigation matching Poorna portfolio layout */}
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <div className="nav-left">
            <a href="#home" className="brand">
              DIAN PARAMITHA<span>°</span>
            </a>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#portfolio">Projects</a>
              <a href="#experience">Detail Project</a>
              <a href="#process">Feed Linkedin</a>
            </div>
          </div>
          <div className="nav-socials" aria-label="Social links">
            <a href={socialLinks.email} title="Send Email" aria-label="Email">
              <img src={`${A}/charm_mail.svg`} alt="Mail" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <img src={`${A}/akar-icons_github-fill.svg`} alt="GitHub" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <img src={`${A}/akar-icons_linkedin-box-fill.svg`} alt="LinkedIn" />
            </a>
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noreferrer"
              title="View Resume / CV"
              aria-label="Resume"
            >
              <img src={`${A}/tabler_file-cv.svg`} alt="Resume" />
            </a>
          </div>
        </nav>
      </header>

      {/* Centered Intro Hero Section matching Poorna reference */}
      <section id="home" className="intro-section section-shell">
        <img
          src={`${A}/64130.svg`}
          alt=""
          aria-hidden="true"
          className="ambient-glow glow-hero"
          loading="lazy"
          decoding="async"
        />
        <div className="intro-content">
          <div className="Typist">
            <h1 className="intro-title">
              <span>{part1}</span>
              {part2 && <span className="intro-name">{part2}</span>}
              <span>{part3}</span>
              <span className="Cursor Cursor--blinking">|</span>
            </h1>
          </div>

          <div className={`fade-in-section ${isComplete ? "is-visible" : ""}`}>
            <h2 className="intro-subtitle">I create digital stuff</h2>
            <p className="intro-desc">
              I am a Business Information Systems student and aspiring Full-Stack
              Programmer based in Indonesia, passionate about driving operational
              efficiency by bridging the gap between intuitive UI/UX design and
              robust software engineering. My expertise spans from developing
              scalable web and mobile applications—such as comprehensive event
              management platforms and collaborative project-tracking apps (KYU).
            </p>
            <a className="intro-cta" href={socialLinks.email}>
              <img src={`${A}/charm_mail.svg`} alt="" aria-hidden="true" />
              <span>Let's talk!</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Personal Profile with Smooth Scroll Reveal */}
      <section id="about" className="about-section section-shell" aria-labelledby="about-title">
        <img
          src={`${A}/103e3.svg`}
          alt=""
          aria-hidden="true"
          className="ambient-glow glow-about"
          loading="lazy"
          decoding="async"
        />
        <FadeInSection className="about-inner-grid">
          <div className="about-image-wrap">
            <img
              src={`${A}/27009.png`}
              alt="Dian Paramitha"
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-content">
            <p className="section-label">// ABOUT ME</p>
            <h2 id="about-title">Dian Paramitha</h2>
            <p className="about-text">
              I am a Business Information Systems student at the State Polytechnic of Malang.
              Currently, I am expanding my knowledge in data analytics and IoT foundations.
              I am actively seeking an internship opportunity in a System Development Operations team
              where I can contribute, learn, and drive operational efficiency.
            </p>
            <div className="about-badges">
              <span className="about-badge">🎓 State Polytechnic of Malang</span>
              <span className="about-badge">💼 Aspiring Full-Stack & DevOps</span>
              <span className="about-badge">📊 Data Analytics & IoT</span>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Skills Section with Smooth Scroll Reveal */}
      <section className="skills" aria-labelledby="skills-title">
        <FadeInSection>
          <div className="section-shell">
            <h2 id="skills-title">Skills & Technologies</h2>
            <div className="skill-row">
              {skillsData.map((item) => (
                <div className="skill" key={item.name} title={item.name}>
                  <img src={`${A}/${item.icon}`} alt={item.name} loading="lazy" decoding="async" width={24} height={24} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Projects Section with Smooth Scroll Reveal */}
      <section id="portfolio" className="portfolio section-shell" aria-labelledby="projects-title">
        <img
          src={`${A}/82e7c.svg`}
          alt=""
          aria-hidden="true"
          className="ambient-glow glow-portfolio"
          loading="lazy"
          decoding="async"
        />
        <FadeInSection>
          <div className="portfolio-head">
            <div>
              <p className="section-label">Selected work</p>
              <h2 id="projects-title">Projects</h2>
            </div>
            <div className="filters" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  key={item}
                  className={filter === item ? "active" : ""}
                  onClick={() => handleFilterChange(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="work-grid">
            {visibleWork.map((project) => (
              <article className="work-card" key={project.image}>
                <div className="work-image">
                  <img src={`${A}/${project.image}`} alt={project.title} loading="lazy" decoding="async" />
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </article>
            ))}
          </div>
          {visibleWork.length < filteredWork.length && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="rounded-full border border-purple-400/40 bg-purple-950/60 px-6 py-2.5 text-sm font-medium text-purple-200 transition-colors hover:border-purple-300 hover:bg-purple-900/80 cursor-pointer shadow-lg"
              >
                Tampilkan Lebih Banyak ({filteredWork.length - visibleWork.length} tersisa)
              </button>
            </div>
          )}
        </FadeInSection>
      </section>

      {/* Detail Project / Experience Tabs (Poorna style) with Smooth Scroll Reveal */}
      <DetailProject glowSrc={`${A}/74d64.svg`} />

      {/* Official LinkedIn Feed Section with Smooth Scroll Reveal */}
      <section id="process" className="linkedin-feed-section section-shell" aria-labelledby="linkedin-feed-title">
        <FadeInSection>
          <div className="linkedin-header">
            <div>
              <p className="section-label">Featured activity & updates</p>
              <h2 id="linkedin-feed-title">LinkedIn Feed</h2>
            </div>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="linkedin-profile-btn"
            >
              <img src={`${A}/akar-icons_linkedin-box-fill.svg`} alt="" aria-hidden="true" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Official LinkedIn Post Embeds */}
          <div className="linkedin-posts-container">
            {linkedinEmbeds.map((embed, index) => (
              <div
                className="linkedin-post-wrapper"
                key={embed.url}
                style={{ minHeight: `${embed.height}px` }}
              >
                <iframe
                  src={embed.url}
                  height={embed.height}
                  width="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  title={embed.title || `Postingan LinkedIn ${index + 1}`}
                  loading="lazy"
                  style={{ height: `${embed.height}px`, width: "100%", maxWidth: `${embed.width}px` }}
                />
              </div>
            ))}
          </div>

          <div className="linkedin-cta-box">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-purple-300 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <span>Lihat aktivitas dan pembaruan selengkapnya di profil LinkedIn</span>
              <span>→</span>
            </a>
          </div>
        </FadeInSection>
      </section>

      {/* Contact Section with Smooth Scroll Reveal */}
      <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
        <FadeInSection className="contact-inner-grid">
          <div>
            <p className="section-label">Have a project in mind?</p>
            <h2 id="contact-title">Ready to contribute to your team&apos;s success.</h2>
            <a className="text-link" href={socialLinks.email}>
              Contact me <span>→</span>
            </a>
          </div>
          <img
            src={`${A}/4c498.png`}
            alt="Laptop showing a digital product at a workspace"
            loading="lazy"
            decoding="async"
          />
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer>
        <div className="section-shell footer-inner">
          <p>© {new Date().getFullYear()} Dian Paramitha</p>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <img src={`${A}/akar-icons_linkedin-box-fill.svg`} alt="LinkedIn" loading="lazy" decoding="async" width={16} height={16} /> Follow me
          </a>
        </div>
      </footer>
    </main>
  )
}
