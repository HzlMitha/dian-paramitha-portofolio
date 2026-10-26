import { useState } from "react"
import { detailProjectsData } from "../data/portfolioData"
import FadeInSection from "./FadeInSection"

interface DetailProjectProps {
  glowSrc?: string
}

export default function DetailProject({ glowSrc }: DetailProjectProps) {
  const [activeTab, setActiveTab] = useState(0)
  const currentProject = detailProjectsData[activeTab]

  return (
    <section id="experience" className="experience-section section-shell" aria-labelledby="experience-title">
      {glowSrc && (
        <img
          src={glowSrc}
          alt=""
          aria-hidden="true"
          className="ambient-glow glow-experience"
          loading="lazy"
          decoding="async"
        />
      )}
      <FadeInSection>
        <div className="experience-title-wrap">
          <h2 id="experience-title">Detail Project</h2>
          <span className="experience-title-line" aria-hidden="true" />
        </div>

        <div className="experience-container">
          {/* Left Tabs List */}
          <div className="experience-tabs" role="tablist" aria-label="Project experience tabs">
            {detailProjectsData.map((project, index) => (
              <button
                key={project.id}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`panel-${project.id}`}
                id={`tab-${project.id}`}
                tabIndex={activeTab === index ? 0 : -1}
                className={`experience-tab-btn ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {project.menuTitle}
              </button>
            ))}
          </div>

          {/* Right Details Panel */}
          <div
            key={currentProject.id}
            className="experience-panel"
            role="tabpanel"
            id={`panel-${currentProject.id}`}
            aria-labelledby={`tab-${currentProject.id}`}
          >
            <h3 className="experience-role-title">
              <span>{currentProject.role}</span>{" "}
              <span className="experience-company-link">@ {currentProject.company}</span>
            </h3>
            <p className="experience-date">{currentProject.period}</p>

            <ul className="experience-bullets">
              {currentProject.responsibilities.map((item, idx) => (
                <li key={idx}>
                  <span className="bullet-arrow" aria-hidden="true">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
