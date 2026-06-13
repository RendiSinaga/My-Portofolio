"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: "💻",
    title: "Programming Languages",
    skills: ["Kotlin", "PHP", "JavaScript"],
  },
  {
    icon: "🌐",
    title: "Web Development",
    skills: ["Laravel", "Express.js", "REST API", "Tailwind CSS"],
  },
  {
    icon: "📱",
    title: "Mobile Development",
    skills: ["Android Dev", "Jetpack Compose", "MVVM", "Retrofit"],
  },
  {
    icon: "🔌",
    title: "IoT Development",
    skills: ["ESP8266", "ESP32", "MQTT", "TCS3200"],
  },
  {
    icon: "🗄️",
    title: "Database",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    icon: "🛠️",
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Figma", "Postman", ],
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

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-glow skills-glow-left"></div>
      <div className="skills-glow skills-glow-right"></div>

      <div className="skills-container">
        {/* Header */}
        <motion.div
          className="skills-header"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="skills-label">What I Use</p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies and tools I use to build web, mobile, IoT, and software
            solutions.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card"
              variants={fadeUp(0.1 + index * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                borderColor: "rgba(56, 189, 248, 0.35)",
              }}
            >
              <div className="skill-card-glow"></div>

              <div className="skill-icon">{category.icon}</div>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
          width: 100%;
          padding: 120px 0;
          overflow: hidden;
        }

        .skills-container {
          position: relative;
          z-index: 2;
          width: min(100%, 1200px);
          margin-left: auto;
          margin-right: auto;
          padding-left: clamp(24px, 5vw, 80px);
          padding-right: clamp(24px, 5vw, 80px);
        }

        .skills-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.28;
        }

        .skills-glow-left {
          width: 360px;
          height: 360px;
          left: -140px;
          top: 20%;
          background: rgba(14, 165, 233, 0.22);
        }

        .skills-glow-right {
          width: 420px;
          height: 420px;
          right: -160px;
          bottom: 8%;
          background: rgba(99, 102, 241, 0.2);
        }

        .skills-header {
          max-width: 720px;
          margin: 0 auto 64px;
          text-align: center;
        }

        .skills-label {
          color: #38bdf8;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .skills-header h2 {
          color: #ffffff;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          line-height: 1.15;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .skills-header h2 span {
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skills-header p:last-child {
          max-width: 560px;
          margin: 0 auto;
          color: #94a3b8;
          font-size: clamp(0.95rem, 1.5vw, 1.05rem);
          line-height: 1.8;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .skill-card {
          position: relative;
          min-height: 230px;
          padding: 32px;
          border-radius: 22px;
          overflow: hidden;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.055),
            rgba(255, 255, 255, 0.025)
          );
          border: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
          transition: all 0.25s ease;
        }

        .skill-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(56, 189, 248, 0.25),
            transparent 35%,
            rgba(129, 140, 248, 0.18)
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.65;
        }

        .skill-card-glow {
          position: absolute;
          width: 160px;
          height: 160px;
          right: -70px;
          top: -70px;
          border-radius: 999px;
          background: rgba(56, 189, 248, 0.13);
          filter: blur(35px);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .skill-card:hover .skill-card-glow {
          opacity: 1;
        }

        .skill-icon {
          position: relative;
          z-index: 2;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          margin-bottom: 28px;
          font-size: 22px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.18);
          box-shadow:
            inset 0 0 18px rgba(56, 189, 248, 0.08),
            0 0 28px rgba(56, 189, 248, 0.08);
        }

        .skill-card h3 {
          position: relative;
          z-index: 2;
          color: #e2e8f0;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .skill-list {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-list span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 14px;
          border-radius: 999px;
          color: #bae6fd;
          font-size: 13px;
          font-weight: 700;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.16);
          transition: all 0.22s ease;
        }

        .skill-list span:hover {
          color: #ffffff;
          border-color: rgba(56, 189, 248, 0.42);
          background: rgba(56, 189, 248, 0.14);
          box-shadow: 0 0 18px rgba(56, 189, 248, 0.18);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-section {
            padding: 96px 0;
          }

          .skills-header {
            margin-bottom: 44px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .skill-card {
            min-height: auto;
            padding: 28px 22px;
          }

          .skill-icon {
            margin-bottom: 22px;
          }

          .skill-card h3 {
            font-size: 12px;
            margin-bottom: 18px;
          }

          .skill-list span {
            font-size: 13px;
            padding: 8px 13px;
          }
        }
      `}</style>
    </section>
  );
}
