export default function FogOverlay() {
  return (
    <>
      <div
        className="absolute top-10 left-10 w-96 h-96 fog opacity-8"
        style={{
          animation: "fogDrift 20s ease-in-out infinite",
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(80, 80, 80, 0.15) 0%, rgba(40, 40, 40, 0.08) 60%, transparent 100%)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute top-32 right-20 w-80 h-80 fog opacity-7"
        style={{
          animation: "fogDrift 25s ease-in-out infinite",
          animationDelay: "3s",
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(90, 90, 90, 0.12) 0%, rgba(45, 45, 45, 0.06) 60%, transparent 100%)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-72 h-72 fog opacity-6"
        style={{
          animation: "fogDrift 30s ease-in-out infinite",
          animationDelay: "6s",
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(70, 70, 70, 0.1) 0%, rgba(35, 35, 35, 0.05) 60%, transparent 100%)",
          willChange: "transform",
        }}
      />
    </>
  );
}
