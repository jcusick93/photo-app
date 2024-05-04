import { StyleSheet } from "react-native";
import { tokens } from "../../styles/tokens";

export const styles = StyleSheet.create({
  iconBaseStyles: {},
  // color styles
  iconColorPrimary: {
    fill: tokens.themeColorForegroundPrimary,
  },
  iconColorNeutralHigh: {
    fill: tokens.themeColorForegroundNeutralHigh,
  },
  iconColorNeutralMedium: {
    fill: tokens.themeColorForegroundNeutralMedium,
  },
  iconColorNeutralLow: {
    fill: tokens.themeColorForegroundNeutralLow,
  },
});
