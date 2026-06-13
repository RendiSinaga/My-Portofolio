"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full justify-center"
      style={{
        alignItems: "flex-start",
        paddingTop: "clamp(155px, 18vh, 190px)",
        paddingBottom: "80px",
      }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 65% 50%, rgba(14,165,233,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container-main relative z-10 w-full">
        <div className="flex flex-col-reverse items-center justify-between gap-14 lg:flex-row lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <motion.p
              className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Software Engineering Student
            </motion.p>

            <motion.div
              style={{ marginBottom: "32px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(2.25rem, 9vw, 3.8rem)" }}
              >
                Hi, I'm
              </h1>

              <h1
                className="font-extrabold leading-tight"
                style={{
                  fontSize: "clamp(2.65rem, 11vw, 4.4rem)",
                  background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Rendi Sinaga
              </h1>
            </motion.div>

            <motion.p
              className="text-slate-400"
              style={{
                fontSize: "clamp(0.95rem, 3.8vw, 1.08rem)",
                maxWidth: "520px",
                lineHeight: 1.9,
                marginBottom: "46px",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              I create practical digital solutions through web, mobile, and IoT
              development, focusing on clean user experiences, reliable
              features, and real-world use.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105"
                style={{
                  fontSize: "0.95rem",
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                  boxShadow: "0 0 30px rgba(14,165,233,0.3)",
                }}
              >
                View Projects
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105"
                style={{
                  fontSize: "0.95rem",
                  padding: "14px 32px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                }}
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* RIGHT PHOTO */}
          <motion.div
            className="flex shrink-0 items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "clamp(250px, 62vw, 410px)",
                height: "clamp(250px, 62vw, 410px)",
              }}
            >
              {/* Orbit rings */}
              {[
                {
                  size: "108%",
                  color: "rgba(56,189,248,0.18)",
                  duration: 24,
                },
                {
                  size: "124%",
                  color: "rgba(99,102,241,0.12)",
                  duration: 32,
                  dashed: true,
                  reverse: true,
                },
              ].map((ring, index) => (
                <motion.div
                  key={index}
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    width: ring.size,
                    height: ring.size,
                    top: "50%",
                    left: "50%",
                    translateX: "-50%",
                    translateY: "-50%",
                    border: ring.dashed
                      ? `1px dashed ${ring.color}`
                      : `1px solid ${ring.color}`,
                  }}
                  animate={{ rotate: ring.reverse ? -360 : 360 }}
                  transition={{
                    duration: ring.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Glow */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "75%",
                  height: "75%",
                  background:
                    "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)",
                  filter: "blur(28px)",
                }}
              />

              {/* Photo */}
              <div
                className="relative z-10 overflow-hidden rounded-full"
                style={{
                  width: "clamp(175px, 45vw, 300px)",
                  height: "clamp(175px, 45vw, 300px)",
                  border: "2px solid rgba(56,189,248,0.4)",
                  boxShadow: "0 0 48px rgba(14,165,233,0.25)",
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Rendi Sinaga"
                  fill
                  priority
                  sizes="(max-width: 768px) 175px, 300px"
                  className="object-cover object-top"
                />
              </div>

              {/* Badge */}
              <motion.div
                className="absolute z-20 flex items-center gap-2 rounded-full font-semibold text-cyan-200"
                style={{
                  bottom: "-8px",
                  left: "50%",
                  translateX: "-50%",
                  padding: "8px 18px",
                  fontSize: "0.72rem",
                  background: "rgba(6,182,212,0.12)",
                  border: "1px solid rgba(6,182,212,0.3)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  whiteSpace: "nowrap",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                💻 Software Developer
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          #hero {
            align-items: center !important;
            padding-top: 120px !important;
            padding-bottom: 80px !important;
          }
        }

        @media (max-width: 480px) {
          #hero {
            padding-top: 170px !important;
          }
        }
      `}</style>
    </section>
  );
}
