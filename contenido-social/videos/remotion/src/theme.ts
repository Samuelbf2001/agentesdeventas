import { loadFont as loadLato } from "@remotion/google-fonts/Lato";
import { loadFont as loadPoppins } from "@remotion/google-fonts/Poppins";

/**
 * Design tokens mirrored 1:1 from /DESIGN.md. Keep in sync manually —
 * DESIGN.md is the source of truth for all Sixteam.pro visual pieces.
 */
export const colors = {
  navy: "#0a2342",
  blue: "#1d70a2",
  teal: "#00bfa5",
  tealDeep: "#007a6a",
  tealInk: "#002b26",
  gray: "#e0e0e0",
  white: "#ffffff",
  inkBlack: "#0d0d12",
  inkBlackAlt: "#11141c",
  cardLight: "#eef3f8",
  mutedSlate: "#33414c",
  mutedSlateSoft: "#51616f",
} as const;

export const gradients = {
  hero: `linear-gradient(165deg, ${colors.navy} 0%, ${colors.blue} 50%, ${colors.teal} 100%)`,
  navyToBlue: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.blue} 100%)`,
  blueToTeal: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.teal} 100%)`,
} as const;

const poppins = loadPoppins("normal", {
  weights: ["700", "800", "900"],
  subsets: ["latin"],
});
const lato = loadLato("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

export const fontFamily = {
  poppins: poppins.fontFamily,
  lato: lato.fontFamily,
} as const;

/** 60px safe margin on every side, matching the storyboard's safe-zone notes. */
export const safeZone = {
  top: 150,
  bottom: 170,
  sides: 60,
} as const;
