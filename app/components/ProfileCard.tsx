"use client";

import { useState, useRef, useEffect } from "react";
import ProfileCardFront from "./ProfileCardFront";
import ProfileCardBack from "./ProfileCardBack";

interface ProfileCardProps {
  isFlipped: boolean;
}

export default function ProfileCard({ isFlipped }: ProfileCardProps) {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger the flip animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = (mouseX / (rect.width / 2)) * 3;
    const rotateX = -(mouseY / (rect.height / 2)) * 3;

    requestAnimationFrame(() => {
      setRotation({ rotateX, rotateY });

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

  const baseRotation = isLoaded ? 0 : 90;
  const finalRotation = (isFlipped ? 180 : baseRotation) + rotation.rotateY;

  return (
    <div className="relative z-10" style={{ perspective: "1500px" }}>
      <div
        ref={cardRef}
        className="relative w-[280px] h-[420px]"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.rotateX}deg) rotateY(${finalRotation}deg)`,
          transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          willChange: "transform",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <ProfileCardFront spotlight={spotlight} rotation={rotation} />
        <ProfileCardBack spotlight={spotlight} rotation={rotation} />
      </div>
    </div>
  );
}
