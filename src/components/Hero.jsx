// components/Hero.jsx
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="flex min-h-screen w-full flex-col-reverse items-center justify-center gap-16 pt-32 md:flex-row md:justify-between md:pt-28">
        {/* Text Content */}
        <div className="w-full max-w-[560px] text-center md:text-left">
          <p
            style={{ letterSpacing: "0.25em" }}
            className="mb-5 text-[11px] font-semibold uppercase text-[#38BDF8] sm:text-xs"
          >
            ✦ Welcome To My Universe
          </p>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m
            <span className="block bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC] bg-clip-text text-transparent">
              Rendi Sinaga
            </span>
          </h1>

          <h2 className="mb-5 text-lg font-semibold text-slate-300 sm:text-xl">
            Software Engineering Student
          </h2>

          <p className="mx-auto mb-8 max-w-lg text-sm leading-7 text-slate-400 sm:text-base md:mx-0">
            Passionate about building modern web applications, mobile apps, and
            futuristic digital experiences with clean design and scalable
            technology.
          </p>

          {/* Buttons */}
          <div className="mb-7 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-[#38BDF8] px-6 py-3 text-sm font-bold text-[#050816] shadow-lg shadow-sky-500/20 transition-all hover:-translate-y-1 hover:bg-[#7DD3FC] hover:shadow-sky-500/30"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:-translate-y-1 hover:border-[#38BDF8]/50 hover:text-[#38BDF8]"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 text-xs font-mono md:justify-start">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition hover:text-white"
            >
              GitHub ↗
            </a>

            <span className="h-3 w-px bg-slate-700" />

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex w-full max-w-90 shrink-0 items-center justify-center">
          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-[#38BDF8]/10 blur-3xl" />

          {/* Animated Rings */}
          <div className="absolute h-[280px] w-[280px] rounded-full border border-[#38BDF8]/25 animate-spin-slow sm:h-[320px] sm:w-[320px]" />
          <div className="absolute h-[315px] w-[315px] rounded-full border border-dashed border-violet-400/20 animate-spin-reverse sm:h-[360px] sm:w-[360px]" />

          {/* Photo */}
          <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full border-2 border-[#38BDF8]/30 bg-[#38BDF8]/5 shadow-[0_0_70px_rgba(56,189,248,0.18)] sm:h-[290px] sm:w-[290px]">
            <Image
              src="/foto.jpg"
              alt="Rendi Sinaga"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#38BDF8]/20 bg-[#050816]/90 px-5 py-2 text-xs font-semibold text-[#38BDF8] shadow-lg shadow-black/30 backdrop-blur-md">
            💻 Software Engineer
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 18s linear infinite;
        }

        .animate-spin-reverse {
          animation: spinReverse 26s linear infinite;
        }
      `}</style>
    </section>
  );
}
