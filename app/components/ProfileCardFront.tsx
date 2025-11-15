import Image from "next/image";
import CardEffects from "./CardEffects";
import SocialLinks from "./SocialLinks";

interface ProfileCardFrontProps {
  spotlight: { x: number; y: number };
  rotation: { rotateX: number; rotateY: number };
}

export default function ProfileCardFront({
  spotlight,
  rotation,
}: ProfileCardFrontProps) {
  return (
    <div
      className="absolute inset-0 rounded-2xl shadow-2xl p-4 flex flex-col items-center justify-between overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
      }}
    >
      <CardEffects spotlight={spotlight} rotation={rotation} />

      {/* Image at top */}
      <div className="relative w-full flex justify-center pt-6">
        <div className="relative">
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
          />
        </div>
      </div>

      {/* Content at bottom */}
      <div className="relative z-10 w-full flex flex-col items-center gap-3 justify-end pb-6">
        {/* Name */}
        <div className="flex flex-col items-center gap-0">
          <h1 className="text-2xl font-bold text-white">Nur Fikri</h1>
          <p className="text-sm text-white/70">Kiki</p>
        </div>

        {/* Company and Job Title */}
        <div className="flex flex-col items-center gap-0.5">
          <a
            href="https://cosmoslabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            Cosmos Labs
          </a>

          <p className="text-sm text-white/70">Senior Software Engineer</p>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
}
