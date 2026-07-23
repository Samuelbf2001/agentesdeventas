import type { CSSProperties } from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../theme";

/**
 * Subtle decorative dot-grid overlay used behind hook/CTA text — the only
 * texture the design system allows on top of a flat background (see
 * DESIGN.md "The Flat-Interior Rule").
 */
export const DotGrid: React.FC<{ opacity?: number }> = ({ opacity = 0.08 }) => {
  const style: CSSProperties = {
    backgroundImage: `radial-gradient(circle, ${colors.teal} 1.5px, transparent 1.5px)`,
    backgroundSize: "36px 36px",
    opacity,
  };

  return <AbsoluteFill style={style} />;
};
