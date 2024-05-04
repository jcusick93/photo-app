import { StyleSheet } from "react-native";
import { tokens } from "../../styles/tokens";

export const styles = StyleSheet.create({
  text: {},
  // color styles
  textColorPrimary: {
    color: tokens.themeColorForegroundPrimary,
  },
  textColorNeutralHigh: {
    color: tokens.themeColorForegroundNeutralHigh,
  },
  textColorNeutralMedium: {
    color: tokens.themeColorForegroundNeutralMedium,
  },
  textColorNeutralLow: {
    color: tokens.themeColorForegroundNeutralLow,
  },
  textColorOnPrimary: {
    color: tokens.themeColorForegroundOnPrimary,
  },
  // size styles
  textSizeXSmall: {
    fontSize: 12,
    lineHeight: 1.2 * 12,
  },
  textSizeSmall: {
    fontSize: 14,
    lineHeight: 1.2 * 14,
  },
  textSizeMedium: {
    fontSize: 16,
    lineHeight: 1.2 * 16,
  },
  textSizeLarge: {
    fontSize: 20,
    lineHeight: 1.2 * 20,
  },

  // weight styles
  textWeight400: {
    fontWeight: 400,
  },
  textWeight500: {
    fontWeight: 500,
  },
  textWeight700: {
    fontWeight: 700,
  },
});
