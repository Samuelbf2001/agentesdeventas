import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { DotGrid } from "../../components/DotGrid";
import { colors, fontFamily, gradients } from "../../theme";

/**
 * ESCENA 4 — Solución + CTA (storyboard frames 225–300).
 * Emoción target: alivio + confianza + acción. Holds on the final frame — no exit.
 */
export const Scene4Cta: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { stiffness: 180 }, durationInFrames: 20 });

  const headlineOpacity = interpolate(frame, [15, 33], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [15, 33], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtextOpacity = interpolate(frame, [28, 43], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const badgeEntrance = interpolate(frame, [38, 53], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pulsePhase = Math.max(0, frame - 53);
  const pulse = Math.sin(pulsePhase / 9) * 0.5 + 0.5;
  const badgeScale = 0.8 + badgeEntrance * 0.2 + (frame > 53 ? pulse * 0.03 : 0);
  const glowAlpha = 0.35 + pulse * 0.35;
  const glowSize = 20 + pulse * 20;

  return (
    <AbsoluteFill
      style={{
        background: gradients.hero,
        alignItems: "center",
        justifyContent: "center",
        padding: "0 90px",
      }}
    >
      <DotGrid opacity={0.06} />

      <Img
        src={staticFile("sixteam-logo.png")}
        style={{
          width: 324,
          height: 108,
          objectFit: "contain",
          opacity: logoScale,
          transform: `scale(${0.5 + logoScale * 0.5})`,
        }}
      />

      <div
        style={{
          fontFamily: fontFamily.poppins,
          fontWeight: 900,
          fontSize: 120,
          lineHeight: 1.15,
          color: colors.white,
          textAlign: "center",
          marginTop: 56,
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px)`,
        }}
      >
        Tu operación bajo control.
      </div>

      <div
        style={{
          fontFamily: fontFamily.lato,
          fontWeight: 400,
          fontSize: 48,
          color: colors.gray,
          textAlign: "center",
          marginTop: 28,
          opacity: subtextOpacity,
        }}
      >
        Tickets · Historial · SLAs automáticos
      </div>

      <div
        style={{
          fontFamily: fontFamily.poppins,
          fontWeight: 700,
          fontSize: 54,
          color: colors.tealInk,
          background: colors.teal,
          borderRadius: 999,
          padding: "27px 76px",
          marginTop: 64,
          opacity: badgeEntrance,
          transform: `scale(${badgeScale})`,
          boxShadow: `0 0 ${glowSize}px rgba(0,191,165,${glowAlpha})`,
        }}
      >
        sixteam.pro
      </div>
    </AbsoluteFill>
  );
};
