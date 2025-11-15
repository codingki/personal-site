import { Github, Twitter, Linkedin } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-2">
      <a
        href="https://github.com/codingki"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors cursor-pointer"
        aria-label="GitHub"
      >
        <Github className="w-6 h-6" />
      </a>

      <a
        href="https://twitter.com/kikiding"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors cursor-pointer"
        aria-label="X"
      >
        <Twitter className="w-6 h-6" />
      </a>

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
  );
}
