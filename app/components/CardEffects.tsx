interface CardEffectsProps {
  spotlight: { x: number; y: number };
  rotation: { rotateX: number; rotateY: number };
}

export default function CardEffects({ spotlight, rotation }: CardEffectsProps) {
  return (
    <>
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-lg opacity-60" />

      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay pointer-events-none rounded-lg opacity-30" />

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
      />

      {/* Shimmer highlight */}
      <div
        className="absolute inset-0 pointer-events-none rounded-lg"
        style={{
          background: `linear-gradient(${
            135 + (spotlight.x - 50) * 0.8
          }deg, transparent 0%, rgba(255,255,255,0.4) ${
            spotlight.y - 10
          }%, rgba(255,255,255,0.6) ${spotlight.y}%, rgba(255,255,255,0.4) ${
            spotlight.y + 10
          }%, transparent 100%)`,
          opacity: rotation.rotateX || rotation.rotateY ? 0.7 : 0,
          transition: "opacity 0.6s ease-out",
          willChange: "opacity",
          mixBlendMode: "soft-light",
        }}
      />
    </>
  );
}
