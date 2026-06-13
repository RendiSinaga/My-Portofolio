"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    type: "Award",
    title: "1st Place – PBL Expo 2024",
    caption: "PBL Expo 2024 – 1st Place",
    year: "2024",
    badge: "Winner",
    image: "/awards/pbl-expo-2024.png",
  },
  {
    type: "Awardee",
    title: "PKM-KC Funded Project Awardee",
    caption: "PKM 2024 – National Funding – Kemdikbud",
    year: "2024",
    badge: "Funded",
    image: "/awards/pkm-kc-funded.jpg",
  },
  {
    type: "Certificate",
    title: "MSIB Batch 7 Certified Participant",
    caption: "MSIB Batch 7 – PT Kinema Systrans Multimedia",
    year: "2024",
    badge: "MSIB",
    image: "/awards/msib-batch-7.jpg",
  },
  {
    type: "Organization",
    title: "BLUG Programming Division Member",
    caption: "Batam Linux User Group – Programming Division",
    year: "2025",
    badge: "BLUG",
    image: "/awards/blug-programming.jpg",
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

export default function Awards() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedAward =
    selectedIndex !== null ? achievements[selectedIndex] : null;

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? achievements.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === achievements.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
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
    <section id="awards" className="awards-section">
      <div className="awards-glow awards-glow-left"></div>
      <div className="awards-glow awards-glow-right"></div>

      <div className="awards-container">
        <motion.div
          className="awards-header"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="awards-label">Recognition</p>

          <h2>
            Achievements & <span>Certifications</span>
          </h2>
        </motion.div>

        <div className="awards-grid">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              className="award-card"
              variants={fadeUp(0.1 + index * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <button
                type="button"
                className="award-preview"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${item.title} certificate`}
              >
                <img
                  src={item.image}
                  alt={`${item.title} certificate preview`}
                  loading="lazy"
                  decoding="async"
                />

                <div className="award-preview-overlay"></div>
                <div className="award-view-hint">View Certificate</div>
              </button>

              <div className="award-content">
                <div className="award-top">
                  <span className="award-type">{item.type}</span>
                  <span className="award-badge">{item.badge}</span>
                </div>

                <h3>{item.title}</h3>

                <p className="award-year">{item.year}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedAward && (
        <div
          className="award-lightbox"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeModal}
            aria-label="Close certificate preview"
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox-nav lightbox-nav-left"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous certificate"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedAward.image}
              alt={`${selectedAward.title} certificate full preview`}
              className="lightbox-image"
            />

            <p className="lightbox-caption">{selectedAward.caption}</p>
          </div>

          <button
            type="button"
            className="lightbox-nav lightbox-nav-right"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next certificate"
          >
            ›
          </button>
        </div>
      )}

      <style>{`
        .awards-section {
          position: relative;
          width: 100%;
          padding: 120px 0;
          overflow: hidden;
        }

        .awards-container {
          position: relative;
          z-index: 2;
          width: min(100%, 1200px);
          margin: 0 auto;
          padding-left: clamp(24px, 5vw, 80px);
          padding-right: clamp(24px, 5vw, 80px);
        }

        .awards-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(65px);
          opacity: 0.18;
        }

        .awards-glow-left {
          width: 360px;
          height: 360px;
          left: -150px;
          top: 20%;
          background: rgba(56, 189, 248, 0.22);
        }

        .awards-glow-right {
          width: 400px;
          height: 400px;
          right: -160px;
          bottom: 10%;
          background: rgba(129, 140, 248, 0.2);
        }

        .awards-header {
          max-width: 760px;
          margin: 0 auto 64px;
          text-align: center;
        }

        .awards-label {
          color: #38bdf8;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .awards-header h2 {
          color: #ffffff;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          line-height: 1.15;
          font-weight: 800;
          margin-bottom: 0;
        }

        .awards-header h2 span {
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .award-card {
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-height: 340px;
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

        .award-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.38);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.28);
        }

        .award-card::before {
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

        .award-preview {
          position: relative;
          width: 100%;
          height: 180px;
          padding: 0;
          overflow: hidden;
          border: 0;
          outline: 0;
          display: block;
          cursor: pointer;
          background:
            radial-gradient(
              circle at 30% 20%,
              rgba(56, 189, 248, 0.18),
              transparent 36%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(129, 140, 248, 0.14),
              transparent 40%
            ),
            rgba(15, 23, 42, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .award-preview img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.35s ease;
        }

        .award-card:hover .award-preview img {
          transform: scale(1.04);
        }

        .award-preview-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background:
            linear-gradient(
              to bottom,
              transparent 48%,
              rgba(5, 8, 22, 0.58)
            ),
            linear-gradient(
              135deg,
              rgba(56, 189, 248, 0.08),
              transparent 45%
            );
          pointer-events: none;
        }

        .award-view-hint {
          position: absolute;
          left: 50%;
          bottom: 16px;
          z-index: 4;
          transform: translateX(-50%);
          padding: 8px 12px;
          border-radius: 999px;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          background: rgba(15, 23, 42, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.14);
          opacity: 0;
          transition:
            opacity 0.22s ease,
            transform 0.22s ease;
          pointer-events: none;
          white-space: nowrap;
        }

        .award-preview:hover .award-view-hint {
          opacity: 1;
          transform: translateX(-50%) translateY(-2px);
        }

        .award-content {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 24px;
        }

        .award-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }

        .award-type {
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

        .award-badge {
          color: #67e8f9;
          font-size: 11px;
          font-weight: 800;
          line-height: 1.4;
          text-align: right;
        }

        .award-card h3 {
          color: #ffffff;
          font-size: 1.12rem;
          font-weight: 800;
          line-height: 1.35;
          margin-bottom: 14px;
        }

        .award-year {
          margin-top: auto;
          color: #94a3b8;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .award-lightbox {
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

        .lightbox-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: min(100%, 980px);
          max-height: 88vh;
        }

        .lightbox-image {
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

        .lightbox-caption {
          color: #cbd5e1;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-align: center;
          margin-top: 22px;
        }

        .lightbox-close {
          position: fixed;
          top: 24px;
          right: 28px;
          z-index: 1001;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #ffffff;
          font-size: 34px;
          line-height: 1;
          cursor: pointer;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
          transition:
            background 0.22s ease,
            transform 0.22s ease;
        }

        .lightbox-close:hover {
          transform: scale(1.04);
          background: rgba(30, 41, 59, 0.92);
        }

        .lightbox-nav {
          position: fixed;
          top: 50%;
          z-index: 1001;
          transform: translateY(-50%);
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #ffffff;
          font-size: 42px;
          line-height: 1;
          cursor: pointer;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.32);
          transition:
            background 0.22s ease,
            transform 0.22s ease;
        }

        .lightbox-nav:hover {
          background: rgba(30, 41, 59, 0.92);
        }

        .lightbox-nav-left {
          left: 32px;
        }

        .lightbox-nav-right {
          right: 32px;
        }

        @media (max-width: 1180px) {
          .awards-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .award-card {
            min-height: 330px;
          }

          .award-preview {
            height: 210px;
          }
        }

        @media (max-width: 640px) {
          .awards-section {
            padding: 96px 0;
          }

          .awards-header {
            margin-bottom: 44px;
          }

          .awards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .award-card {
            min-height: auto;
          }

          .award-preview {
            height: 190px;
          }

          .award-content {
            padding: 22px;
          }

          .award-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .award-badge {
            text-align: left;
          }

          .award-view-hint {
            opacity: 1;
          }

          .award-lightbox {
            padding: 72px 18px 34px;
          }

          .lightbox-image {
            max-height: 68vh;
            border-radius: 12px;
          }

          .lightbox-caption {
            font-size: 12px;
            line-height: 1.6;
            margin-top: 16px;
          }

          .lightbox-close {
            top: 18px;
            right: 18px;
            width: 42px;
            height: 42px;
            font-size: 28px;
          }

          .lightbox-nav {
            width: 44px;
            height: 44px;
            font-size: 34px;
          }

          .lightbox-nav-left {
            left: 14px;
          }

          .lightbox-nav-right {
            right: 14px;
          }
        }

        @media (max-width: 480px) {
          .awards-section {
            padding: 88px 0;
          }

          .award-preview {
            height: 170px;
          }

          .award-card h3 {
            font-size: 1.06rem;
          }
        }
      `}</style>
    </section>
  );
}
