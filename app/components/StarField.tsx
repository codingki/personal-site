import { useMemo } from "react";

export default function StarField() {
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

  return (
    <>
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
    </>
  );
}
