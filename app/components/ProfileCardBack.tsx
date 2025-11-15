import { MapPin } from "lucide-react";
import CardEffects from "./CardEffects";
import SkillsSection from "./SkillsSection";

interface ProfileCardBackProps {
  spotlight: { x: number; y: number };
  rotation: { rotateX: number; rotateY: number };
}

export default function ProfileCardBack({
  spotlight,
  rotation,
}: ProfileCardBackProps) {
  return (
    <div
      className="absolute inset-0 rounded-2xl shadow-2xl p-6 py-5 flex flex-col items-center justify-between overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
        willChange: "transform",
      }}
    >
      <CardEffects spotlight={spotlight} rotation={rotation} />

      {/* Back content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-md font-bold text-white">About Me</h2>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <p className="text-sm text-white/80 leading-relaxed text-pretty">
            Passionate software engineer focused on frontend development. Love
            building scalable systems and beautiful user experiences.
          </p>
        </div>

        <SkillsSection />

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
  );
}
