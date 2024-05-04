import { StyleSheet } from "react-native";
import { tokens } from "../../styles/tokens";

export const styles = StyleSheet.create({
  iconButtonBase: {
    justifyContent: "center",
    alignItems: "center",
  },
  // color styles
  iconButtonColorPrimaryVariantFilled: {
    backgroundColor: tokens.themeColorBackgroundPrimary,
  },

  iconButtonColorPrimaryVariantFab: {
    backgroundColor: tokens.themeColorBackgroundPrimary,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  iconButtonColorSecondaryVariantFilled: {
    backgroundColor: tokens.themeColorBackgroundSecondary,
  },

  iconButtonColorSecondaryVariantFab: {
    backgroundColor: tokens.themeColorBackgroundSecondary,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  iconButtonColorNeutralVariantFilled: {
    backgroundColor: tokens.themeColorBackgroundBaseline,
  },
  iconButtonColorNeutralVariantFab: {
    backgroundColor: tokens.themeColorBackgroundBaseline,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  // size styles
  iconButtonSizeSmall: {
    height: 24,
    width: 24,
  },

  iconButtonSizeMedium: {
    height: 32,
    width: 32,
  },

  iconButtonSizeLarge: {
    height: 40,
    width: 40,
  },

  iconButtonSizeXLarge: {
    height: 44,
    width: 44,
  },

  // shape styles
  iconButtonShapeRounded: {
    borderRadius: tokens.themeBorderRadiusSmall,
  },
  iconButtonShapeCircular: {
    borderRadius: tokens.themeBorderRadiusFull,
  },
});
