import { Appearance } from "react-native";

type Colors = {
  // background
  themeColorBackgroundBaseline: string;
  themeColorBackgroundBaselineInverse: string;
  themeColorBackgroundPrimary: string;
  themeColorBackgroundSecondary: string;
  themeColorBackgroundOverlay: string;

  // foreground
  themeColorForegroundPrimary: string;
  themeColorForegroundOnPrimary: string;
  themeColorForegroundNeutralHigh: string;
  themeColorForegroundNeutralMedium: string;
  themeColorForegroundNeutralLow: string;
  themeColorForegroundNeutralLowest: string;

  // outline
  themeColorOutlineNeutralHigh: string;
  themeColorOutlineNeutralLow: string;
};

export const lightModeColors: Colors = {
  // background tokens
  themeColorBackgroundBaseline: "#F4F5FF",
  themeColorBackgroundBaselineInverse: "#070915",
  themeColorBackgroundPrimary: "#9D6D01",
  themeColorBackgroundSecondary: "#CBCBCB",
  themeColorBackgroundOverlay: "#FFFFFF",

  // foreground tokens
  themeColorForegroundPrimary: "#9D6D01",
  themeColorForegroundOnPrimary: "#FFFFFF",
  themeColorForegroundNeutralHigh: "#222222",
  themeColorForegroundNeutralMedium: "rgba(34,34,34,.7)",
  themeColorForegroundNeutralLow: "rgba(34,34,34,.5)",
  themeColorForegroundNeutralLowest: "rgba(34,34,34,.1)",

  // outline tokens
  themeColorOutlineNeutralHigh: "#222222",
  themeColorOutlineNeutralLow: "rgba(34,34,34,.1)",
};

export const darkModeColors: Colors = {
  // background tokens
  themeColorBackgroundBaseline: "#080808",
  themeColorBackgroundBaselineInverse: "#070915",
  themeColorBackgroundPrimary: "#433712",
  themeColorBackgroundSecondary: "#242424",
  themeColorBackgroundOverlay: "#141414",

  // foreground tokens
  themeColorForegroundPrimary: "#FFE088",
  themeColorForegroundOnPrimary: "#FFFFFF",
  themeColorForegroundNeutralHigh: "rgba(255,255,255,1)",
  themeColorForegroundNeutralMedium: "rgba(255,255,255,.7)",
  themeColorForegroundNeutralLow: "rgba(255,255,255,.5)",
  themeColorForegroundNeutralLowest: "rgba(255,255,255,.1)",

  // outline tokens
  themeColorOutlineNeutralHigh: "rgba(255,255,255,1)",
  themeColorOutlineNeutralLow: "rgba(255,255,255,.1)",
};

const isDark = Appearance.getColorScheme() === "dark";

// will always be the color theme from when file was first initialized
export const tokens = isDark ? darkModeColors : lightModeColors;
