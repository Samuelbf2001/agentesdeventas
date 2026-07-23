import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { DotGrid } from "../../components/DotGrid";
import { colors, fontFamily } from "../../theme";

/**
 * ESCENA 1 — Hook: Sin Respuesta (storyboard frames 0–75).
 * Emoción target: urgencia + identificación inmediata.
 */
export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();

  const lineProgress = interpolate(frame, [5, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });

  const subProgress = interpolate(frame, [25, 43], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.navy,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 60px",
      }}
    >
      <DotGrid />
      <div style={{ textAlign: "center", position: "relative" }}>
        <div
          style={{
            fontFamily: fontFamily.poppins,
            fontWeight: 800,
            fontSize: 114,
            lineHeight: 1.2,
            color: colors.white,
            opacity: lineProgress,
            transform: `translateY(${(1 - lineProgress) * 20}px)`,
          }}
        >
          Tu cliente escribió con un problema.
        </div>
        <div
          style={{
            fontFamily: fontFamily.poppins,
            fontWeight: 900,
            fontSize: 140,
            color: colors.teal,
            marginTop: 48,
            opacity: subProgress,
            transform: `scale(${0.9 + subProgress * 0.1})`,
          }}
        >
          Nadie le respondió.
        </div>
      </div>
    </AbsoluteFill>
  );
};
