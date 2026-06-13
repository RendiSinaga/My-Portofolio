"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const stats = [
  {
    value: "5+",
    label: "Projects Built",
  },
  {
    value: "4+",
    label: "Project Areas",
  },
  {
    value: "3.95/4",
    label: "Current GPA",
  },
  {
    value: "2+",
    label: "Achievements",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.p
          className="about-label"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Get to know me
        </motion.p>

        <motion.h2
          className="about-title"
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          About <span>Me</span>
        </motion.h2>

        <motion.div
          className="about-divider"
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span></span>
        </motion.div>

        <motion.div
          className="about-content"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            I am a <strong>Software Engineering Technology student</strong> at{" "}
            <strong>Batam State Polytechnic</strong> with experience in building
            web, mobile, database-driven, and IoT-based systems through
            project-based learning.
          </p>

          <p>
            I focus on developing{" "}
            <strong>structured and practical applications</strong> — from
            understanding requirements, designing system flows, implementing
            features, integrating APIs, to testing and improving the final
            product.
          </p>

          <p>
            I have worked on interactive data analytics systems, virtual office
            platforms, digital learning apps, clinic management concepts, and
            IoT color synchronization systems. My goal is to keep growing as a
            developer who can build{" "}
            <strong>useful, efficient, and impactful digital solutions.</strong>
          </p>
        </motion.div>

        <motion.div
          className="about-stats"
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((item) => (
            <div className="stat-item" key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .about-section {
          width: 100%;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: "";
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 520px;
          height: 520px;
          background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.1),
            transparent 65%
          );
          pointer-events: none;
          z-index: -1;
        }

        .about-container {
          width: min(100%, 1180px);
          margin: 0 auto;
          padding-left: clamp(24px, 5vw, 80px);
          padding-right: clamp(24px, 5vw, 80px);
          text-align: center;
        }

        .about-label {
          color: #38bdf8;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .about-title {
          color: #ffffff;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 22px;
        }

        .about-title span {
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-divider {
          display: flex;
          justify-content: center;
          margin-bottom: 48px;
        }

        .about-divider span {
          width: 72px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            transparent,
            #38bdf8,
            #818cf8,
            transparent
          );
          box-shadow: 0 0 18px rgba(56, 189, 248, 0.45);
        }

        .about-content {
          max-width: 950px;
          margin: 0 auto;
        }

        .about-content p {
          color: #94a3b8;
          font-size: clamp(0.98rem, 1.5vw, 1.16rem);
          line-height: 1.9;
          margin-bottom: 30px;
        }

        .about-content p:last-child {
          margin-bottom: 0;
        }

        .about-content strong {
        color: #ffffff;
        font-weight: 700;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          max-width: 900px;
          margin: 72px auto 0;
        }

        .stat-item {
          position: relative;
        }

        .stat-item:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -14px;
          transform: translateY(-50%);
          width: 1px;
          height: 42px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(148, 163, 184, 0.28),
            transparent
          );
        }

        .stat-item h3 {
          color: #ffffff;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -0.04em;
        }

        .stat-item h3::after {
          content: "";
          display: inline-block;
          width: 6px;
          height: 6px;
          margin-left: 6px;
          border-radius: 999px;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.65);
          vertical-align: top;
        }

        .stat-item p {
          color: #94a3b8;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 96px 0;
          }

          .about-divider {
            margin-bottom: 40px;
          }

          .about-content p {
            line-height: 1.8;
            margin-bottom: 24px;
          }

          .about-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px 24px;
            margin-top: 60px;
          }

          .stat-item:not(:last-child)::after {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .about-content p {
            font-size: 0.96rem;
          }

          .about-stats {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .stat-item h3 {
            font-size: 2.35rem;
          }
        }
      `}</style>
    </section>
  );
}
