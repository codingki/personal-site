import { Code } from "lucide-react";

const SKILLS = [
  "React",
  "React Native",
  "Electron",
  "Next.js",
  "Tanstack",
  "TypeScript",
  "Ethers",
  "Viem",
  "CosmJS",
];

export default function SkillsSection() {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-white/90 mb-4 flex items-center gap-2">
        <Code className="w-4 h-4" />
        Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="px-1.5 py-0.5 text-xs rounded bg-white/10 text-white/80 border border-white/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
