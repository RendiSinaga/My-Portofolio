"use client";

import { motion } from "framer-motion";

const links = {
  email: "mailto:rendysinagaa10@gmail.com",
  phone: "+62 896-8588-3739",
  whatsapp: "https://wa.me/6289685883739",
  linkedin: "https://www.linkedin.com/in/rendi-sinaga/",
  github: "https://github.com/rendisinaga",
};

const contacts = [
  {
    icon: "email",
    title: "Email",
    value: "rendysinagaa10@gmail.com",
    link: links.email,
    button: "Send Email",
  },
  {
    icon: "phone",
    title: "Phone",
    value: links.phone,
    link: links.whatsapp,
    button: "Contact me",
  },
  {
    icon: "linkedin",
    title: "LinkedIn",
    value: "Connect with me professionally",
    link: links.linkedin,
    button: "View LinkedIn",
  },
  {
    icon: "github",
    title: "GitHub",
    value: "Explore my projects and code",
    link: links.github,
    button: "View GitHub",
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

function ContactIcon({ name }) {
  const icons = {
    email: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4V6Z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10v16H7V4Z" />
        <path d="M11 17h2" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 9.5V18" />
        <path d="M6.5 6.5v.1" />
        <path d="M11 18v-8.5" />
        <path d="M11 13.2c0-2.2 1.2-3.7 3.2-3.7 1.9 0 3.3 1.3 3.3 3.8V18" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.8a8.2 8.2 0 0 0-2.6 16c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-.9-2.7-.9-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.2 1.9.8 2.3.6.1-.5.3-.8.5-1-1.8-.2-3.6-.9-3.6-4a3.1 3.1 0 0 1 .8-2.2c-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.3.8a7.9 7.9 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.6 4 .3.2.5.7.5 1.4v2.1c0 .2.1.5.5.4A8.2 8.2 0 0 0 12 3.8Z" />
      </svg>
    ),
  };

  return icons[name];
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow contact-glow-left"></div>
      <div className="contact-glow contact-glow-right"></div>

      <div className="contact-container">
        <motion.div
          className="contact-header"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="contact-label">Get In Touch</p>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            I'm open to professional opportunities, collaborations, and software
            development projects.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-intro"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="contact-status">
              <span></span>
              Available for Collaboration
            </span>

            <h3>Have an opportunity or project in mind?</h3>

            <p>
              Feel free to reach out through any channel. I am open to
              discussing professional opportunities, software projects, and
              meaningful collaborations.
            </p>

            <div className="contact-quote">
              “Consistency turns small progress into meaningful impact.”
            </div>
          </motion.div>

          <div className="contact-list">
            {contacts.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.link.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noreferrer"
                className="contact-link"
                variants={fadeUp(0.15 + index * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="contact-line-icon">
                  <ContactIcon name={item.icon} />
                </div>

                <div className="contact-link-body">
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>

                  <span>
                    {item.button} <strong>→</strong>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="contact-footer"
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            Designed & built by <span>Rendi Sinaga</span>
          </p>
        </motion.div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          width: 100%;
          padding: 120px 0 48px;
          overflow: hidden;
        }

        .contact-container {
          position: relative;
          z-index: 2;
          width: min(100%, 1200px);
          margin: 0 auto;
          padding-left: clamp(24px, 5vw, 80px);
          padding-right: clamp(24px, 5vw, 80px);
        }

        .contact-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(65px);
          opacity: 0.18;
        }

        .contact-glow-left {
          width: 360px;
          height: 360px;
          left: -150px;
          top: 20%;
          background: rgba(56, 189, 248, 0.22);
        }

        .contact-glow-right {
          width: 400px;
          height: 400px;
          right: -160px;
          bottom: 8%;
          background: rgba(129, 140, 248, 0.2);
        }

        .contact-header {
          max-width: 720px;
          margin: 0 auto 72px;
          text-align: center;
        }

        .contact-label {
          color: #38bdf8;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .contact-header h2 {
          color: #ffffff;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          line-height: 1.15;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .contact-header h2 span {
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-header p:last-child {
          max-width: 560px;
          margin: 0 auto;
          color: #94a3b8;
          font-size: clamp(0.95rem, 1.5vw, 1.05rem);
          line-height: 1.8;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 72px;
          align-items: center;
        }

        .contact-intro {
          position: relative;
          padding-left: 28px;
        }

        .contact-intro::before {
          content: "";
          position: absolute;
          left: 0;
          top: 4px;
          width: 2px;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(
            180deg,
            #38bdf8,
            rgba(129, 140, 248, 0.5),
            transparent
          );
        }

        .contact-status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          padding: 9px 14px;
          border-radius: 999px;
          color: #bae6fd;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.18);
        }

        .contact-status span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 18px rgba(34, 197, 94, 0.75);
        }

        .contact-intro h3 {
          color: #ffffff;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          line-height: 1.15;
          font-weight: 850;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
        }

        .contact-intro p {
          max-width: 480px;
          color: #94a3b8;
          font-size: 15px;
          line-height: 1.85;
          margin-bottom: 34px;
        }

        .contact-quote {
          max-width: 460px;
          color: #e2e8f0;
          font-size: clamp(1rem, 1.7vw, 1.16rem);
          line-height: 1.8;
          font-weight: 700;
        }

        .contact-list {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .contact-list::before {
          content: "";
          position: absolute;
          left: 25px;
          top: 28px;
          bottom: 28px;
          width: 1px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(56, 189, 248, 0.35),
            rgba(129, 140, 248, 0.28),
            transparent
          );
        }

        .contact-link {
          position: relative;
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 22px;
          align-items: center;
          padding: 22px 0;
          text-decoration: none;
        }

        .contact-line-icon {
          position: relative;
          z-index: 2;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          color: #67e8f9;
          background: rgba(15, 23, 42, 0.88);
          border: 1px solid rgba(56, 189, 248, 0.24);
          box-shadow:
            inset 0 0 18px rgba(56, 189, 248, 0.08),
            0 0 24px rgba(56, 189, 248, 0.08);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .contact-line-icon svg {
          width: 24px;
          height: 24px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .contact-link-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          transition:
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .contact-link h4 {
          color: #ffffff;
          font-size: 1.18rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .contact-link p {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.6;
          word-break: break-word;
        }

        .contact-link-body > span {
          flex-shrink: 0;
          color: #67e8f9;
          font-size: 13px;
          font-weight: 900;
          white-space: nowrap;
        }

        .contact-link-body strong {
          display: inline-block;
          margin-left: 6px;
          transition: transform 0.22s ease;
        }

        .contact-link:hover .contact-line-icon {
          transform: scale(1.06);
          border-color: rgba(56, 189, 248, 0.45);
          background: rgba(56, 189, 248, 0.12);
        }

        .contact-link:hover .contact-link-body {
          border-color: rgba(56, 189, 248, 0.28);
          transform: translateX(6px);
        }

        .contact-link:hover .contact-link-body strong {
          transform: translateX(4px);
        }

        .contact-footer {
          margin-top: 80px;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
        }

        .contact-footer p {
          color: #64748b;
          font-size: 14px;
        }

        .contact-footer span {
          color: #38bdf8;
          font-weight: 800;
        }

        @media (max-width: 980px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 56px;
          }

          .contact-intro {
            max-width: 720px;
            margin: 0 auto;
            text-align: center;
            padding-left: 0;
          }

          .contact-intro::before {
            display: none;
          }

          .contact-intro p,
          .contact-quote {
            margin-left: auto;
            margin-right: auto;
          }

          .contact-list {
            max-width: 720px;
            width: 100%;
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding: 96px 0 40px;
          }

          .contact-header {
            margin-bottom: 52px;
          }

          .contact-content {
            gap: 48px;
          }

          .contact-status {
            font-size: 10px;
          }

          .contact-link {
            grid-template-columns: 46px 1fr;
            gap: 16px;
            padding: 18px 0;
          }

          .contact-list::before {
            left: 22px;
          }

          .contact-line-icon {
            width: 46px;
            height: 46px;
            border-radius: 16px;
          }

          .contact-line-icon svg {
            width: 22px;
            height: 22px;
          }

          .contact-link-body {
            display: block;
            padding: 16px 0;
          }

          .contact-link h4 {
            font-size: 1.08rem;
          }

          .contact-link p {
            margin-bottom: 12px;
            font-size: 13.5px;
          }

          .contact-link-body > span {
            font-size: 12.5px;
          }

          .contact-footer {
            margin-top: 56px;
          }
        }
      `}</style>
    </section>
  );
}
