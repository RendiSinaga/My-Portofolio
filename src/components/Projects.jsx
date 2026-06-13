"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Clarity",
    category: "Web Application",
    image: "/projects/clarity/dashboard.png",
    description:
      "A data analytics dashboard for monitoring activity progress and visualizing performance insights.",
    role: "Team Lead & Fullstack Developer",
    stack: ["Laravel", "MySQL", "D3.js"],
    highlight: "1st Place PBL Expo 2024",
    link: "/projects/clarity",
  },
  {
    title: "Koladi",
    category: "Web Application",
    image: "/projects/koladi/dashboard.png",
    description:
      "A virtual workspace platform for managing tasks, meetings, attendance, files, and team collaboration.",
    role: "Fullstack Developer",
    stack: ["Laravel", "PostgreSQL", "Tailwind"],
    highlight: "Remote Team Workspace",
    link: "/projects/koladi",
  },
  {
    title: "FabricMatch",
    category: "Mobile & IoT App",
    image: "/projects/fabricmatch/home.png",
    description:
      "An IoT-based mobile app that scans fabric colors and recommends suitable sewing threads.",
    role: "Team Lead & IoT Developer",
    stack: ["ESP8266", "TCS3200", "Kotlin"],
    highlight: "IoT Color Matching",
    link: "/projects/fabricmatch",
  },
  {
    title: "DokterOnTime",
    category: "Web Application",
    image: "/projects/dokterontime/dashboard.png",
    description:
      "A clinic management system for handling appointments, services, patient visits, and dashboard reports.",
    role: "Web Developer",
    stack: ["Laravel", "MySQL", "PHP"],
    highlight: "PKM-KC Funded Project",
    link: "/projects/dokterontime",
  },
  {
    title: "EduFarm",
    category: "Mobile Learning App",
    image: "/projects/edufarm/home.png",
    description:
      "A digital agriculture learning app with training modules, progress tracking, and live mentor sessions.",
    role: "Android Developer",
    stack: ["Kotlin", "Jetpack Compose", "Retrofit"],
    highlight: "Agriculture Learning App",
    link: "/projects/edufarm",
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

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-glow projects-glow-left"></div>
      <div className="projects-glow projects-glow-right"></div>

      <div className="projects-container">
        <motion.div
          className="projects-header"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="projects-label">My Work</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of projects built through academic, competition, and
            collaborative experiences — covering web, mobile, data, and
            IoT-based solutions.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              variants={fadeUp(0.1 + index * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="project-image-wrap">
                <div className="project-fallback">
                  <span>{project.title}</span>
                </div>

                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="project-image-overlay"></div>
              </div>

              <div className="project-content">
                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  <span className="project-highlight">{project.highlight}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-role-text">{project.role}</p>

                <p className="project-description">{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a href={project.link} className="project-button">
                  View Details <span>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
          width: 100%;
          padding: 120px 0;
          overflow: hidden;
        }

        .projects-container {
          position: relative;
          z-index: 2;
          width: min(100%, 1200px);
          margin: 0 auto;
          padding-left: clamp(24px, 5vw, 80px);
          padding-right: clamp(24px, 5vw, 80px);
        }

        .projects-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(65px);
          opacity: 0.18;
        }

        .projects-glow-left {
          width: 380px;
          height: 380px;
          left: -160px;
          top: 18%;
          background: rgba(56, 189, 248, 0.22);
        }

        .projects-glow-right {
          width: 400px;
          height: 400px;
          right: -170px;
          bottom: 8%;
          background: rgba(129, 140, 248, 0.2);
        }

        .projects-header {
          max-width: 760px;
          margin: 0 auto 64px;
          text-align: center;
        }

        .projects-label {
          color: #38bdf8;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .projects-header h2 {
          color: #ffffff;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          line-height: 1.15;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .projects-header h2 span {
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .projects-header p:last-child {
          max-width: 640px;
          margin: 0 auto;
          color: #94a3b8;
          font-size: clamp(0.95rem, 1.5vw, 1.05rem);
          line-height: 1.8;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 500px;
          overflow: hidden;
          border-radius: 24px;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.055),
              rgba(255, 255, 255, 0.025)
            ),
            rgba(15, 23, 42, 0.52);
          border: 1px solid rgba(255, 255, 255, 0.09);
          box-shadow: 0 22px 55px rgba(0, 0, 0, 0.2);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.38);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.28);
        }

        .project-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(56, 189, 248, 0.22),
            transparent 36%,
            rgba(129, 140, 248, 0.16)
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.6;
          z-index: 3;
        }

.project-image-wrap {
  position: relative;
  width: 100%;
  height: 210px;
  overflow: hidden;
  background:
    radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.18), transparent 35%),
    radial-gradient(circle at 80% 70%, rgba(129, 140, 248, 0.14), transparent 40%),
    rgba(15, 23, 42, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.project-image {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.35s ease;
}

.project-card:hover .project-image {
  transform: scale(1.04);
}

.project-image-overlay {
  position: absolute;
  inset: 0;
  z-index: 3;
  background:
    linear-gradient(to bottom, transparent 45%, rgba(5, 8, 22, 0.58)),
    linear-gradient(135deg, rgba(56, 189, 248, 0.08), transparent 45%);
  pointer-events: none;
}

        .project-fallback {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .project-fallback span {
          color: rgba(226, 232, 240, 0.9);
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -0.03em;
          text-shadow: 0 0 24px rgba(56, 189, 248, 0.28);
        }

        .project-content {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 24px;
        }

        .project-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 20px;
        }

        .project-category {
          display: inline-flex;
          align-items: center;
          padding: 7px 12px;
          border-radius: 999px;
          color: #bae6fd;
          font-size: 11px;
          font-weight: 800;
          background: rgba(56, 189, 248, 0.09);
          border: 1px solid rgba(56, 189, 248, 0.18);
          white-space: nowrap;
        }

        .project-highlight {
          color: #67e8f9;
          font-size: 11px;
          font-weight: 800;
          line-height: 1.4;
          text-align: right;
        }

        .project-card h3 {
          color: #ffffff;
          font-size: 1.38rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .project-role-text {
          color: #38bdf8;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .project-description {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 22px;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 26px;
        }

        .project-stack span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          border-radius: 999px;
          color: #cbd5e1;
          font-size: 11px;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.09);
        }

        .project-button {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: fit-content;
          padding: 11px 18px;
          border-radius: 999px;
          color: #020617;
          font-size: 13px;
          font-weight: 900;
          text-decoration: none;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          box-shadow: 0 12px 30px rgba(56, 189, 248, 0.18);
          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease;
        }

        .project-button span {
          transition: transform 0.22s ease;
        }

        .project-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 38px rgba(56, 189, 248, 0.28);
        }

        .project-button:hover span {
          transform: translateX(3px);
        }

        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .projects-section {
            padding: 96px 0;
          }

          .projects-header {
            margin-bottom: 44px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .project-card {
            min-height: auto;
          }

          .project-image-wrap {
            height: 200px;
          }

          .project-content {
            padding: 24px;
          }

          .project-top {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 20px;
          }

          .project-highlight {
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .projects-section {
            padding: 88px 0;
          }

          .project-content {
            padding: 22px;
          }

          .project-card h3 {
            font-size: 1.3rem;
          }

          .project-description {
            font-size: 13.5px;
          }

          .project-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
