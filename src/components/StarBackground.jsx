// components/StarBackground.jsx
"use client";
import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;
    let nextShoot = 60;
    const shoots = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.3,
      speed: Math.random() * 0.008 + 0.002,
      offset: Math.random() * Math.PI * 2,
      color:
        Math.random() > 0.85
          ? "#38BDF8"
          : Math.random() > 0.7
            ? "#C4B5FD"
            : "#ffffff",
    }));

    function spawnShoot() {
      const angle = ((Math.random() * 30 + 20) * Math.PI) / 180;
      shoots.push({
        x: Math.random() * canvas.width * 0.8,
        y: Math.random() * canvas.height * 0.4,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 6,
        alpha: 1,
        angle,
        decay: Math.random() * 0.02 + 0.015,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        const alpha =
          s.baseAlpha * (0.5 + 0.5 * Math.sin(t * s.speed + s.offset));
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i];
        const tailX = s.x - Math.cos(s.angle) * s.len;
        const tailY = s.y - Math.sin(s.angle) * s.len;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, "rgba(56,189,248,0)");
        grad.addColorStop(1, `rgba(255,255,255,${s.alpha})`);

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
        ctx.restore();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= s.decay;
        if (s.alpha <= 0) shoots.splice(i, 1);
      }

      t++;
      if (t >= nextShoot) {
        spawnShoot();
        nextShoot = t + Math.floor(Math.random() * 120 + 60);
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#050816]">
      {/* Nebula glows */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-pink-500/5 blur-[80px]" />

      {/* Canvas untuk stars & shooting stars */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
