import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Hook } from "./Scene1Hook";
import { Scene2CrmVacio } from "./Scene2CrmVacio";
import { Scene3TicketRebote } from "./Scene3TicketRebote";
import { Scene4Cta } from "./Scene4Cta";

export const SCENE_DURATION = 75;

/**
 * Reel 10s — 3 Problemas de Operaciones que Sixteam.pro Resuelve.
 * Guión: /contenido-social/videos/reel-10s-operaciones/script.md
 * Storyboard: /contenido-social/videos/reel-10s-operaciones/storyboard.md
 * Cuts between scenes are hard cuts ("corte directo" in the storyboard) —
 * adjacent, non-overlapping <Sequence>s already produce that with no extra work.
 */
export const Reel10sOperaciones: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={SCENE_DURATION}>
        <Scene1Hook />
      </Sequence>
      <Sequence from={SCENE_DURATION} durationInFrames={SCENE_DURATION}>
        <Scene2CrmVacio />
      </Sequence>
      <Sequence from={SCENE_DURATION * 2} durationInFrames={SCENE_DURATION}>
        <Scene3TicketRebote />
      </Sequence>
      <Sequence from={SCENE_DURATION * 3} durationInFrames={SCENE_DURATION}>
        <Scene4Cta />
      </Sequence>
    </AbsoluteFill>
  );
};
