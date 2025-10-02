import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef, type MouseEvent } from "react";

interface GlowingEffectProps {
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
  borderWidth?: number;
  children?: React.ReactNode;
  className?: string;
}

export function GlowingEffect({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  borderWidth = 3,
  children,
  className = "",
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );

      const maxDistance = Math.sqrt(
        Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2)
      );

      const proximityFactor = Math.max(
        0,
        1 - distance / (maxDistance * proximity / 100)
      );

      if (proximityFactor > inactiveZone) {
        mouseX.set(x);
        mouseY.set(y);
        opacity.set(proximityFactor);
      } else {
        opacity.set(0);
      }
    };

    const handleMouseLeave = () => {
      opacity.set(0);
    };

    document.addEventListener("mousemove", handleMouseMove);
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [disabled, mouseX, mouseY, opacity, proximity, inactiveZone]);

  const background = useMotionTemplate`
    radial-gradient(
      ${spread}px circle at ${mouseX}px ${mouseY}px,
      rgba(34, 197, 94, ${glow ? 0.8 : 0.6}),
      transparent 80%
    )
  `;

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
        style={{
          background,
          opacity,
          padding: `${borderWidth}px`,
          WebkitMask: `
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0)
          `,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {children}
    </div>
  );
}
