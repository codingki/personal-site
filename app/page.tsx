"use client";

import { useState } from "react";
import StarField from "./components/StarField";
import FogOverlay from "./components/FogOverlay";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative flex min-h-screen items-center justify-center p-4 overflow-hidden cursor-pointer"
      style={{
        perspective: "1000px",
        background:
          "linear-gradient(to bottom, #000000 0%, #0a0a0a 30%, #050505 70%, #0a0a0a 100%)",
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Night sky gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-transparent" />

      <StarField />
      <FogOverlay />
      <ProfileCard isFlipped={isFlipped} />
    </div>
  );
}
