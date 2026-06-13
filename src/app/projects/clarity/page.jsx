"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const project = {
  title: "Clarity",
  subtitle: "Interactive Data Analytics System",
  category: "Web Application",
  year: "2024",
  role: "Team Lead & Fullstack Developer",
  recognition: "1st Place – PBL Expo 2024",
  client: "UPHF International Office",
  image: "/projects/clarity/clarity-logo.png",
  demoLink: "https://youtu.be/z_HbitSwZqs?si=gt7_aeKpr46Q0bYs",
  overview:
    "Clarity is a web-based interactive data analytics system developed to help monitor activity progress, manage structured data, and present insights through visual dashboards.",
  problem:
    "The International Office needed a more structured way to manage activity data, monitor employee progress, and understand information through clear visual reports instead of relying only on manual records.",
  solution:
    "Clarity provides data management features, activity progress tracking, and interactive visualizations that make activity data easier to monitor, explore, and understand.",
};

const contributions = [
  "Led the team throughout the project development process.",
  "Developed core web features for managing employee, sector, subsector, activity, and percentage data.",
  "Built interactive data visualization pages using D3.js.",
  "Designed database relationships and handled backend logic using Laravel and MySQL.",
  "Coordinated feature planning, implementation, testing, and project presentation.",
];

const features = [
  "Admin and employee dashboard",
  "Employee data management",
  "Sector, subsector, and activity management",
  "Activity percentage tracking",
  "Interactive bubble chart visualization",
  "Dashboard summary for monitoring activity data",
];

const techStack = [
  "Laravel",
  "MySQL",
  "D3.js",
  "Yajra DataTables",
  "Bootstrap",
  "SB Admin 2",
];

const gallery = [
  {
    title: "Dashboard Overview",
    type: "Screenshot",
    image: "/projects/clarity/dashboard.png",
  },
  {
    title: "Employee Data Visualization",
    type: "Screenshot",
    image: "/projects/clarity/employee-visualization.png",
  },
  {
    title: "Overall Activity Visualization",
    type: "Screenshot",
    image: "/projects/clarity/overall-activity.png",
  },
  {
    title: "Add Activity Modal",
    type: "Screenshot",
    image: "/projects/clarity/add-activity.png",
  },
  {
    title: "PBL Expo Poster",
    type: "Poster",
    image: "/projects/clarity/poster-clarity.png",
    isPoster: true,
  },
];

const fadeUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

export default function ClarityDetail() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage = selectedIndex !== null ? gallery[selectedIndex] : null;

  const closeOverview = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === gallery.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeOverview();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <main className="project-detail-page">
      <div className="detail-glow detail-glow-left"></div>
      <div className="detail-glow detail-glow-right"></div>

      <section className="detail-hero">
        <div className="detail-container">
          <motion.a
            href="/#projects"
            className="back-link"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          >
            ← Back to Projects
          </motion.a>

          <div className="hero-grid">
            <motion.div
              className="hero-content"
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
            >
              <p className="detail-label">{project.category}</p>

              <h1>{project.title}</h1>

              <h2>{project.subtitle}</h2>

              <p className="hero-description">{project.overview}</p>

              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="demo-card"
              >
                <div className="demo-icon">
                  <span>▶</span>
                </div>

                <div className="demo-content">
                  <span>Demo Video</span>
                  <p>Watch Clarity in action</p>
                </div>

                <div className="demo-arrow">↗</div>
              </a>

              <div className="hero-meta">
                <div>
                  <span>Role</span>
                  <p>{project.role}</p>
                </div>

                <div>
                  <span>Year</span>
                  <p>{project.year}</p>
                </div>

                <div>
                  <span>Recognition</span>
                  <p>{project.recognition}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-preview"
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
            >
              <img
                src={project.image}
                alt="Clarity logo preview"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-container">
          <div className="section-grid">
            <motion.div
              className="section-block"
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="section-number">01</span>
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </motion.div>

            <motion.div
              className="section-block"
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="section-number">02</span>
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-container">
          <motion.div
            className="detail-heading"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="detail-label">My Contribution</p>
            <h2>What I Worked On</h2>
          </motion.div>

          <div className="contribution-list">
            {contributions.map((item, index) => (
              <motion.div
                key={item}
                className="contribution-item"
                variants={fadeUp(0.08 + index * 0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-container">
          <div className="two-column">
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="detail-label">Key Features</p>
              <h2>Core Features</h2>

              <div className="feature-list">
                {features.map((feature) => (
                  <div className="feature-item" key={feature}>
                    <span></span>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="detail-label">Tech Stack</p>
              <h2>Technologies Used</h2>

              <div className="stack-list">
                {techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-container">
          <motion.div
            className="detail-heading"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="detail-label">Preview</p>
            <h2>Project Gallery</h2>
          </motion.div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <motion.button
                type="button"
                key={item.title}
                className={`gallery-item ${item.isPoster ? "is-poster" : ""}`}
                variants={fadeUp(0.1 + index * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${item.title}`}
              >
                <div className="gallery-image-wrap">
                  <img
                    src={item.image}
                    alt={`${item.title} preview`}
                    loading="lazy"
                    decoding="async"
                  />

                  <span className="gallery-view-hint">View</span>
                </div>

                <div className="gallery-caption">
                  <span>{item.type}</span>
                  <p>{item.title}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-cta">
        <div className="detail-container">
          <motion.div
            className="cta-box"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="detail-label">Result</p>

            <h2>{project.recognition}</h2>

            <p>
              This project became one of my strongest project-based learning
              experiences, combining leadership, fullstack development, database
              management, and data visualization.
            </p>

            <a href="/#projects">View Other Projects →</a>
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={closeOverview}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeOverview}
            aria-label="Close image overview"
          >
            ×
          </button>

          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-left"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className={`gallery-lightbox-content ${
              selectedImage.isPoster ? "is-poster" : ""
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={`${selectedImage.title} full preview`}
            />

            <p>{selectedImage.title}</p>
          </div>

          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-right"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

      <style>{`
        .project-detail-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .detail-container {
          position: relative;
          z-index: 2;
          width: min(100%, 1200px);
          margin: 0 auto;
          padding-left: clamp(24px, 5vw, 80px);
          padding-right: clamp(24px, 5vw, 80px);
        }

        .detail-glow {
          position: fixed;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(64px);
          opacity: 0.14;
          z-index: 0;
        }

        .detail-glow-left {
          width: 380px;
          height: 380px;
          left: -170px;
          top: 16%;
          background: rgba(56, 189, 248, 0.22);
        }

        .detail-glow-right {
          width: 420px;
          height: 420px;
          right: -190px;
          bottom: 10%;
          background: rgba(129, 140, 248, 0.2);
        }

        .detail-hero {
          padding: 92px 0 64px;
        }

        .back-link {
          display: inline-flex;
          margin-bottom: 34px;
          color: #67e8f9;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
        }

        .back-link:hover {
          color: #ffffff;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 0.95fr;
          gap: 64px;
          align-items: center;
        }

        .detail-label {
          color: #38bdf8;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero-content h1 {
          color: #ffffff;
          font-size: clamp(3rem, 6vw, 4.8rem);
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.07em;
          margin-bottom: 18px;
        }

        .hero-content h2 {
          max-width: 560px;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: clamp(1.35rem, 2.7vw, 1.9rem);
          line-height: 1.28;
          font-weight: 850;
          margin-bottom: 24px;
        }

        .hero-description {
          max-width: 580px;
          color: #94a3b8;
          font-size: clamp(0.98rem, 1.4vw, 1.05rem);
          line-height: 1.78;
          margin-bottom: 28px;
        }

        .demo-card {
          width: min(100%, 430px);
          display: grid;
          grid-template-columns: 52px 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 16px 18px;
          margin-bottom: 30px;
          border-radius: 20px;
          text-decoration: none;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.06),
              rgba(255, 255, 255, 0.025)
            ),
            rgba(15, 23, 42, 0.58);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .demo-card:hover {
          transform: translateY(-4px);
          border-color: rgba(56, 189, 248, 0.38);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .demo-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: #020617;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          box-shadow: 0 14px 32px rgba(56, 189, 248, 0.22);
        }

        .demo-icon span {
          font-size: 15px;
          margin-left: 2px;
        }

        .demo-content span {
          display: block;
          color: #38bdf8;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .demo-content p {
          color: #ffffff;
          font-size: 15px;
          font-weight: 800;
          margin: 0;
        }

        .demo-arrow {
          color: #67e8f9;
          font-size: 18px;
          font-weight: 900;
          transition: transform 0.22s ease;
        }

        .demo-card:hover .demo-arrow {
          transform: translate(3px, -3px);
        }

        .hero-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .hero-meta div {
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-meta span {
          display: block;
          color: #38bdf8;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .hero-meta p {
          color: #e2e8f0;
          font-size: 13px;
          line-height: 1.55;
          font-weight: 700;
        }

        .hero-preview {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 360px;
          padding: 28px;
          border-radius: 28px;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
        }

        .hero-preview img {
          width: min(100%, 380px);
          height: auto;
          object-fit: contain;
          display: block;
          border-radius: 24px;
        }

        .detail-section {
          padding: 68px 0;
        }

        .section-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .section-block {
          padding: 32px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .section-number {
          display: block;
          color: #38bdf8;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          margin-bottom: 18px;
        }

        .section-block h3,
        .detail-heading h2,
        .two-column h2,
        .cta-box h2 {
          color: #ffffff;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          line-height: 1.2;
          font-weight: 850;
          letter-spacing: -0.04em;
          margin-bottom: 18px;
        }

        .section-block p {
          color: #94a3b8;
          font-size: 15px;
          line-height: 1.85;
        }

        .detail-heading {
          max-width: 720px;
          margin-bottom: 42px;
        }

        .contribution-list {
          display: grid;
        }

        .contribution-item {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .contribution-item span {
          color: #38bdf8;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.16em;
        }

        .contribution-item p {
          color: #e2e8f0;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 600;
        }

        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }

        .feature-list {
          display: grid;
          gap: 18px;
          margin-top: 30px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .feature-item span {
          width: 8px;
          height: 8px;
          margin-top: 9px;
          border-radius: 999px;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.55);
          flex-shrink: 0;
        }

        .feature-item p {
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 600;
        }

        .stack-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .stack-list span {
          padding: 10px 14px;
          border-radius: 999px;
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 800;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          padding: 0;
          text-align: left;
          cursor: pointer;
          border-radius: 22px;
          background: rgba(15, 23, 42, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.09);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          border-color: rgba(56, 189, 248, 0.35);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .gallery-image-wrap {
          position: relative;
          width: 100%;
          height: 270px;
          overflow: hidden;
          background: rgba(15, 23, 42, 0.8);
        }

        .gallery-item.is-poster .gallery-image-wrap {
          height: 420px;
        }

        .gallery-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.35s ease;
        }

        .gallery-item.is-poster .gallery-image-wrap img {
          object-fit: contain;
          background: #ffffff;
        }

        .gallery-item:hover .gallery-image-wrap img {
          transform: scale(1.04);
        }

        .gallery-view-hint {
          position: absolute;
          left: 50%;
          bottom: 16px;
          z-index: 2;
          transform: translateX(-50%);
          padding: 8px 12px;
          border-radius: 999px;
          color: #ffffff;
          font-size: 11px;
          font-weight: 900;
          background: rgba(15, 23, 42, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.14);
          opacity: 0;
          transition:
            opacity 0.22s ease,
            transform 0.22s ease;
          pointer-events: none;
        }

        .gallery-item:hover .gallery-view-hint {
          opacity: 1;
          transform: translateX(-50%) translateY(-2px);
        }

        .gallery-caption {
          padding: 16px 18px;
        }

        .gallery-caption span {
          display: block;
          color: #38bdf8;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .gallery-caption p {
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 800;
        }

        .detail-cta {
          padding: 68px 0 110px;
        }

        .cta-box {
          max-width: 820px;
          padding: 38px;
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.055),
              rgba(255, 255, 255, 0.025)
            ),
            rgba(15, 23, 42, 0.52);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
        }

        .cta-box p {
          color: #94a3b8;
          font-size: 15px;
          line-height: 1.85;
          margin-bottom: 28px;
        }

        .cta-box a {
          display: inline-flex;
          color: #020617;
          font-size: 13px;
          font-weight: 900;
          text-decoration: none;
          padding: 12px 18px;
          border-radius: 999px;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
        }

        .gallery-lightbox {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 96px;
          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(56, 189, 248, 0.1),
              transparent 34%
            ),
            rgba(2, 6, 23, 0.94);
        }

        .gallery-lightbox-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: min(100%, 1120px);
          max-height: 88vh;
        }

        .gallery-lightbox-content img {
          display: block;
          max-width: 100%;
          max-height: 78vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.48);
        }

        .gallery-lightbox-content.is-poster img {
          max-height: 82vh;
        }

        .gallery-lightbox-content p {
          color: #cbd5e1;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-align: center;
          margin-top: 22px;
        }

        .gallery-lightbox-close {
          position: fixed;
          top: 24px;
          right: 28px;
          z-index: 1001;
          width: 52px;
          height: 52px;
          border-radius: 999px;
          color: #ffffff;
          font-size: 34px;
          line-height: 1;
          cursor: pointer;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
        }

        .gallery-lightbox-nav {
          position: fixed;
          top: 50%;
          z-index: 1001;
          transform: translateY(-50%);
          width: 58px;
          height: 58px;
          border-radius: 999px;
          color: #ffffff;
          font-size: 42px;
          line-height: 1;
          cursor: pointer;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.32);
        }

        .gallery-lightbox-left {
          left: 32px;
        }

        .gallery-lightbox-right {
          right: 32px;
        }

        .gallery-lightbox-close:hover,
        .gallery-lightbox-nav:hover {
          background: rgba(30, 41, 59, 0.92);
        }

        @media (max-width: 980px) {
          .detail-hero {
            padding: 86px 0 58px;
          }

          .hero-grid,
          .section-grid,
          .two-column {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .hero-preview {
            min-height: 320px;
            padding: 26px;
          }

          .hero-preview img {
            width: min(100%, 320px);
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .gallery-image-wrap {
            height: 240px;
          }

          .gallery-item.is-poster .gallery-image-wrap {
            height: 520px;
          }
        }

        @media (max-width: 640px) {
          .detail-hero {
            padding: 78px 0 48px;
          }

          .back-link {
            margin-bottom: 28px;
          }

          .detail-section {
            padding: 54px 0;
          }

          .hero-content h1 {
            font-size: 3rem;
          }

          .demo-card {
            grid-template-columns: 48px 1fr auto;
            padding: 15px;
          }

          .demo-icon {
            width: 48px;
            height: 48px;
          }

          .demo-content p {
            font-size: 14px;
          }

          .hero-meta {
            grid-template-columns: 1fr;
          }

          .contribution-item {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .hero-preview {
            min-height: 280px;
            padding: 22px;
            border-radius: 22px;
          }

          .hero-preview img {
            width: min(100%, 260px);
            border-radius: 20px;
          }

          .gallery-image-wrap {
            height: 210px;
          }

          .gallery-item.is-poster .gallery-image-wrap {
            height: 420px;
          }

          .gallery-view-hint {
            opacity: 1;
          }

          .cta-box {
            padding: 28px 22px;
          }

          .detail-cta {
            padding: 54px 0 96px;
          }

          .gallery-lightbox {
            padding: 72px 18px 34px;
          }

          .gallery-lightbox-content img {
            max-height: 68vh;
            border-radius: 12px;
          }

          .gallery-lightbox-content.is-poster img {
            max-height: 72vh;
          }

          .gallery-lightbox-content p {
            font-size: 12px;
            line-height: 1.6;
            margin-top: 16px;
          }

          .gallery-lightbox-close {
            top: 18px;
            right: 18px;
            width: 42px;
            height: 42px;
            font-size: 28px;
          }

          .gallery-lightbox-nav {
            width: 44px;
            height: 44px;
            font-size: 34px;
          }

          .gallery-lightbox-left {
            left: 14px;
          }

          .gallery-lightbox-right {
            right: 14px;
          }
        }
      `}</style>
    </main>
  );
}
