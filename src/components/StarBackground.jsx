"use client";

import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;
    let frame = 0;
    let stars = [];

    function createStars() {
      const isMobile = window.innerWidth < 768;
      const starCount = isMobile ? 70 : 120;

      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.6 + 0.3,
        speed: Math.random() * 0.02 + 0.005,
        color:
          Math.random() > 0.85
            ? "#38BDF8"
            : Math.random() > 0.7
              ? "#A5B4FC"
              : "#FFFFFF",
      }));
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        const twinkle =
          star.alpha * (0.6 + 0.4 * Math.sin(frame * star.speed + index));

        ctx.globalAlpha = twinkle;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      frame++;
      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      <div className="absolute -left-32 -top-32 h-105 w-105 rounded-full bg-cyan-500/10 blur-[90px]" />
      <div className="absolute -bottom-40 -right-40 h-130 w-130 rounded-full bg-indigo-500/10 blur-[90px]" />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
