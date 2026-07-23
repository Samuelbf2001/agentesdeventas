import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { colors, fontFamily, gradients } from "../../theme";

const LOCAL_DURATION = 75;

const FIELDS = ["Nombre", "Historial", "Queja", "Ticket"];

/**
 * ESCENA 2 — Problema 1: CRM Vacío (storyboard frames 75–150).
 * Emoción target: frustración reconocible / vergüenza operativa.
 */
export const Scene2CrmVacio: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [0, 18], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const card = spring({
    frame: frame - 10,
    fps,
    config: { stiffness: 120 },
    durationInFrames: 20,
  });

  const sceneFadeOut = interpolate(
    frame,
    [LOCAL_DURATION - 8, LOCAL_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        background: gradients.navyToBlue,
        opacity: sceneFadeOut,
        alignItems: "center",
        paddingTop: 220,
      }}
    >
      <div
        style={{
          fontFamily: fontFamily.poppins,
          fontWeight: 700,
          fontSize: 88,
          lineHeight: 1.25,
          color: colors.white,
          textAlign: "center",
          padding: "0 90px",
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px)`,
        }}
      >
        Tu asesor no sabe que ya se quejó antes.
      </div>

      <div
        style={{
          marginTop: 90,
          width: 900,
          borderRadius: 28,
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.15)",
          padding: 56,
          position: "relative",
          opacity: card,
          transform: `translateY(${(1 - card) * 25}px)`,
        }}
      >
        <div style={{ position: "absolute", top: 40, right: 48, color: colors.teal, fontSize: 54 }}>
          ⚠
        </div>
        {FIELDS.map((label, i) => {
          const fieldDelay = 18 + i * 3;
          const fieldOpacity = interpolate(
            frame,
            [fieldDelay, fieldDelay + 10],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          return (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "26px 0",
                borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                opacity: fieldOpacity,
              }}
            >
              <span
                style={{
                  fontFamily: fontFamily.lato,
                  fontWeight: 700,
                  fontSize: 32,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: colors.teal,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: fontFamily.lato,
                  fontSize: 44,
                  color: colors.gray,
                  opacity: 0.5,
                }}
              >
                — — —
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
