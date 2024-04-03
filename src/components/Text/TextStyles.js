import { StyleSheet } from "react-native";
import { tokens } from "../../tokens/tokens";

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
  // size styles
  textSizeXSmall: {
    fontSize: 12,
    lineHeight: 16,
  },
  textSizeSmall: {
    fontSize: 14,
    lineHeight: 18,
  },
  textSizeMedium: {
    fontSize: 16,
    lineHeight: 20,
  },
  textSizeLarge: {
    fontSize: 20,
    lineHeight: 24,
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
