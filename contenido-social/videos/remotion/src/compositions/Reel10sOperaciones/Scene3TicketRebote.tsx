import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors, fontFamily, gradients } from "../../theme";

const LOCAL_DURATION = 75;
const LABELS = ["Ventas", "Operaciones", "Posventa"];
const AVATAR_XS = [150, 450, 750];
const HOP_DURATION = 20;
const LOOP_DURATION = HOP_DURATION * 3;
const MESSAGE_START = 40;

/**
 * ESCENA 3 — Problema 2: Ticket Rebotando (storyboard frames 150–225).
 * Emoción target: caos / pérdida de control.
 */
export const Scene3TicketRebote: React.FC = () => {
  const frame = useCurrentFrame();

  const headlineOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [0, 18], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sceneFadeOut = interpolate(
    frame,
    [LOCAL_DURATION - 8, LOCAL_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const messageOpacity = interpolate(frame, [MESSAGE_START, MESSAGE_START + 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const loopFrame = Math.max(0, frame - MESSAGE_START) % LOOP_DURATION;
  const hopIndex = Math.floor(loopFrame / HOP_DURATION);
  const hopProgress = (loopFrame % HOP_DURATION) / HOP_DURATION;
  const fromX = AVATAR_XS[hopIndex];
  const toX = AVATAR_XS[(hopIndex + 1) % AVATAR_XS.length];
  const messageX = interpolate(hopProgress, [0, 1], [fromX, toX]);
  const messageArc = -Math.sin(hopProgress * Math.PI) * 60;

  return (
    <AbsoluteFill style={{ background: gradients.blueToTeal, opacity: sceneFadeOut, alignItems: "center", paddingTop: 220 }}>
      <div
        style={{
          fontFamily: fontFamily.poppins,
          fontWeight: 700,
          fontSize: 82,
          lineHeight: 1.25,
          color: colors.white,
          textAlign: "center",
          padding: "0 90px",
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px)`,
        }}
      >
        El ticket lleva 3 días rebotando entre áreas.
      </div>

      <div style={{ position: "relative", width: 900, height: 260, marginTop: 140 }}>
        <div
          style={{
            position: "absolute",
            top: 70,
            left: AVATAR_XS[0],
            width: AVATAR_XS[2] - AVATAR_XS[0],
            borderTop: `3px dashed ${colors.teal}`,
            opacity: 0.5,
          }}
        />

        {AVATAR_XS.map((x, i) => {
          const delay = 8 + i * 7;
          const scale = interpolate(frame, [delay, delay + 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div key={LABELS[i]} style={{ position: "absolute", left: x - 70, top: 0, textAlign: "center" }}>
              <div
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 64,
                  transform: `scale(${scale})`,
                }}
              >
                👤
              </div>
              <div
                style={{
                  marginTop: 20,
                  fontFamily: fontFamily.lato,
                  fontWeight: 400,
                  fontSize: 38,
                  color: colors.white,
                  opacity: 0.8 * scale,
                }}
              >
                {LABELS[i]}
              </div>
            </div>
          );
        })}

        <div
          style={{
            position: "absolute",
            left: messageX - 32,
            top: 70 - 32 + messageArc,
            width: 64,
            height: 64,
            borderRadius: 16,
            background: colors.teal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
            opacity: messageOpacity,
            boxShadow: "0 8px 24px rgba(0,191,165,0.5)",
          }}
        >
          ✉️
        </div>
      </div>
    </AbsoluteFill>
  );
};
