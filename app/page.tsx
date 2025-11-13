"use client";

import { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail, MapPin, Code } from "lucide-react";

export default function Home() {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Fixed star positions for consistent rendering
  const stars = useMemo(
    () => [
      { left: 10, top: 15, width: 2, height: 2, delay: 0.5, duration: 2.5 },
      { left: 25, top: 20, width: 1.5, height: 1.5, delay: 1.2, duration: 3.1 },
      { left: 40, top: 12, width: 2.5, height: 2.5, delay: 0.8, duration: 2.8 },
      { left: 55, top: 25, width: 1, height: 1, delay: 2.1, duration: 3.5 },
      { left: 70, top: 18, width: 2, height: 2, delay: 1.5, duration: 2.9 },
      { left: 85, top: 22, width: 1.8, height: 1.8, delay: 0.9, duration: 3.2 },
      { left: 15, top: 35, width: 1.5, height: 1.5, delay: 1.8, duration: 2.6 },
      { left: 30, top: 42, width: 2.2, height: 2.2, delay: 0.6, duration: 3.0 },
      { left: 50, top: 38, width: 1, height: 1, delay: 2.3, duration: 3.4 },
      { left: 65, top: 45, width: 2, height: 2, delay: 1.1, duration: 2.7 },
      { left: 80, top: 35, width: 1.7, height: 1.7, delay: 1.9, duration: 3.3 },
      { left: 5, top: 55, width: 2.3, height: 2.3, delay: 0.4, duration: 2.4 },
      { left: 22, top: 60, width: 1.2, height: 1.2, delay: 2.0, duration: 3.6 },
      { left: 38, top: 52, width: 2, height: 2, delay: 1.3, duration: 2.8 },
      { left: 58, top: 58, width: 1.6, height: 1.6, delay: 0.7, duration: 3.1 },
      { left: 75, top: 62, width: 2.1, height: 2.1, delay: 1.6, duration: 2.9 },
      { left: 90, top: 50, width: 1.3, height: 1.3, delay: 2.2, duration: 3.5 },
      { left: 12, top: 72, width: 1.9, height: 1.9, delay: 0.8, duration: 2.6 },
      { left: 28, top: 75, width: 2.4, height: 2.4, delay: 1.4, duration: 3.0 },
      { left: 45, top: 70, width: 1.1, height: 1.1, delay: 2.4, duration: 3.7 },
      { left: 62, top: 78, width: 2, height: 2, delay: 1.0, duration: 2.7 },
      { left: 78, top: 72, width: 1.7, height: 1.7, delay: 1.7, duration: 3.2 },
      { left: 95, top: 68, width: 1.5, height: 1.5, delay: 0.3, duration: 2.5 },
      { left: 18, top: 88, width: 2.2, height: 2.2, delay: 1.8, duration: 2.8 },
      { left: 35, top: 85, width: 1.4, height: 1.4, delay: 2.5, duration: 3.4 },
      { left: 52, top: 90, width: 1.8, height: 1.8, delay: 0.5, duration: 2.9 },
      { left: 68, top: 88, width: 2, height: 2, delay: 1.2, duration: 3.1 },
      { left: 85, top: 85, width: 1.6, height: 1.6, delay: 2.1, duration: 2.6 },
      { left: 8, top: 28, width: 1.9, height: 1.9, delay: 0.9, duration: 3.3 },
      { left: 33, top: 32, width: 2.3, height: 2.3, delay: 1.5, duration: 2.7 },
      { left: 48, top: 30, width: 1.2, height: 1.2, delay: 2.2, duration: 3.6 },
      { left: 63, top: 28, width: 2.1, height: 2.1, delay: 0.6, duration: 2.8 },
      { left: 88, top: 32, width: 1.7, height: 1.7, delay: 1.9, duration: 3.2 },
      { left: 20, top: 48, width: 1.5, height: 1.5, delay: 1.1, duration: 2.9 },
      { left: 42, top: 50, width: 2.2, height: 2.2, delay: 0.7, duration: 3.0 },
      { left: 72, top: 48, width: 1.3, height: 1.3, delay: 2.3, duration: 3.5 },
      { left: 15, top: 65, width: 2, height: 2, delay: 1.4, duration: 2.6 },
      { left: 55, top: 63, width: 1.8, height: 1.8, delay: 0.8, duration: 3.1 },
      { left: 92, top: 60, width: 1.6, height: 1.6, delay: 2.0, duration: 2.7 },
      { left: 7, top: 80, width: 2.1, height: 2.1, delay: 1.3, duration: 3.3 },
      { left: 47, top: 82, width: 1.4, height: 1.4, delay: 1.7, duration: 2.8 },
      { left: 82, top: 78, width: 2.3, height: 2.3, delay: 0.4, duration: 3.4 },
      { left: 26, top: 92, width: 1.9, height: 1.9, delay: 2.1, duration: 2.5 },
      { left: 60, top: 95, width: 1.5, height: 1.5, delay: 1.0, duration: 3.2 },
      { left: 88, top: 92, width: 2.2, height: 2.2, delay: 1.6, duration: 2.9 },
    ],
    []
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = (mouseX / (rect.width / 2)) * 3; // Reduced from 5 to 3
    const rotateX = -(mouseY / (rect.height / 2)) * 3; // Reduced from 5 to 3

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
      setRotation({ rotateX, rotateY });

      // Calculate spotlight position relative to card
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlight({ x, y });
    });
  };

  const handleMouseLeave = () => {
    requestAnimationFrame(() => {
      setRotation({ rotateX: 0, rotateY: 0 });
      setSpotlight({ x: 50, y: 50 });
    });
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center p-4 overflow-hidden"
      style={{
        perspective: "1000px",
        background:
          "linear-gradient(to bottom, #000000 0%, #0a0a0a 30%, #050505 70%, #0a0a0a 100%)",
      }}
    >
      {/* Night sky gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-transparent"></div>

      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.width}px`,
            height: `${star.height}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Fog patches (reduced for performance) */}
      <div
        className="absolute top-10 left-10 w-96 h-96 fog opacity-8"
        style={{
          animation: "fogDrift 20s ease-in-out infinite",
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(80, 80, 80, 0.15) 0%, rgba(40, 40, 40, 0.08) 60%, transparent 100%)",
          willChange: "transform",
        }}
      ></div>
      <div
        className="absolute top-32 right-20 w-80 h-80 fog opacity-7"
        style={{
          animation: "fogDrift 25s ease-in-out infinite",
          animationDelay: "3s",
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(90, 90, 90, 0.12) 0%, rgba(45, 45, 45, 0.06) 60%, transparent 100%)",
          willChange: "transform",
        }}
      ></div>
      <div
        className="absolute bottom-40 left-1/4 w-72 h-72 fog opacity-6"
        style={{
          animation: "fogDrift 30s ease-in-out infinite",
          animationDelay: "6s",
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(70, 70, 70, 0.1) 0%, rgba(35, 35, 35, 0.05) 60%, transparent 100%)",
          willChange: "transform",
        }}
      ></div>

      {/* Card container */}
      <div className="relative z-10" style={{ perspective: "1500px" }}>
        {/* Flip container */}
        <div
          ref={cardRef}
          className="relative w-[280px] h-[400px]"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.rotateX}deg) rotateY(${
              (isFlipped ? 180 : 0) + rotation.rotateY
            }deg)`,
            transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            willChange: "transform",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Front of card */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl p-4 flex flex-col items-center justify-between overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              willChange: "transform",
            }}
            onClick={() => setIsFlipped(true)}
          >
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-lg opacity-60"></div>

            {/* Texture overlay */}
            <div className="absolute inset-0 texture-overlay pointer-events-none rounded-lg opacity-30"></div>

            {/* Spotlight effect - shiny/glossy */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                background: `radial-gradient(circle 300px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 30%, transparent 60%)`,
                opacity: rotation.rotateX || rotation.rotateY ? 1 : 0,
                transition: "opacity 0.6s ease-out",
                willChange: "opacity",
                mixBlendMode: "overlay",
              }}
            ></div>

            {/* Shimmer highlight */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                background: `linear-gradient(${
                  135 + (spotlight.x - 50) * 0.8
                }deg, transparent 0%, rgba(255,255,255,0.4) ${
                  spotlight.y - 10
                }%, rgba(255,255,255,0.6) ${
                  spotlight.y
                }%, rgba(255,255,255,0.4) ${
                  spotlight.y + 10
                }%, transparent 100%)`,
                opacity: rotation.rotateX || rotation.rotateY ? 0.7 : 0,
                transition: "opacity 0.6s ease-out",
                willChange: "opacity",
                mixBlendMode: "soft-light",
              }}
            ></div>

            {/* Image at top */}
            <div className="relative w-full flex justify-center pt-6">
              <div className="relative ">
                <Image
                  src="/me.png"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="rounded-2xl object-contain opacity-90 bg-neutral-800/60 border border-white/30"
                  priority
                />
                {/* Spotlight overlay on image */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)`,
                    opacity: rotation.rotateX || rotation.rotateY ? 0.9 : 0,
                    transition: "opacity 0.6s ease-out",
                    mixBlendMode: "overlay",
                    willChange: "opacity",
                  }}
                ></div>
              </div>
            </div>

            {/* Content at bottom */}
            <div className="relative z-10 w-full flex flex-col items-center gap-3 justify-end pb-6">
              {/* Name */}
              <div className="flex flex-col items-center gap-0">
                <h1 className="text-2xl font-bold text-white">Nur Fikri</h1>
                <p className="text-sm text-white/70">Kiki</p>
              </div>

              {/* Company and Job Title with reduced gap */}
              <div className="flex flex-col items-center gap-0.5">
                <a
                  href="https://cosmoslabs.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-white/90 hover:text-white transition-colors cursor-pointer"
                >
                  Cosmos Labs
                </a>

                {/* Job Title */}
                <p className="text-sm text-white/70">
                  Senior Software Engineer
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-2">
                {/* GitHub */}
                <a
                  href="https://github.com/codingki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://twitter.com/kikiding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="X"
                >
                  <Twitter className="w-6 h-6" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/nur-fikri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-between overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              willChange: "transform",
            }}
            onClick={() => setIsFlipped(false)}
          >
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-lg opacity-60"></div>

            {/* Texture overlay */}
            <div className="absolute inset-0 texture-overlay pointer-events-none rounded-lg opacity-30"></div>

            {/* Spotlight effect - shiny/glossy */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                background: `radial-gradient(circle 300px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 30%, transparent 60%)`,
                opacity: rotation.rotateX || rotation.rotateY ? 1 : 0,
                transition: "opacity 0.6s ease-out",
                willChange: "opacity",
                mixBlendMode: "overlay",
              }}
            ></div>

            {/* Shimmer highlight */}
            <div
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                background: `linear-gradient(${
                  135 + (spotlight.x - 50) * 0.8
                }deg, transparent 0%, rgba(255,255,255,0.4) ${
                  spotlight.y - 10
                }%, rgba(255,255,255,0.6) ${
                  spotlight.y
                }%, rgba(255,255,255,0.4) ${
                  spotlight.y + 10
                }%, transparent 100%)`,
                opacity: rotation.rotateX || rotation.rotateY ? 0.7 : 0,
                transition: "opacity 0.6s ease-out",
                willChange: "opacity",
                mixBlendMode: "soft-light",
              }}
            ></div>

            {/* Back content */}
            <div className="relative z-10 w-full h-full flex flex-col">
              {/* Header with flip back button */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">About Me</h2>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <p className="text-sm text-white/80 leading-relaxed">
                  Passionate software engineer crafting elegant solutions to
                  complex problems. Love building scalable systems and beautiful
                  user experiences.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Tailwind",
                    "Web3",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/80 border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="w-4 h-4" />
                  <span>Remote / Jakarta, Indonesia</span>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-auto">
                <a
                  href="https://resume.io/r/f6cCyb6zF"
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors border border-white/30 cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >

                  View my resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
