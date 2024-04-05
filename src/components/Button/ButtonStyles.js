import { StyleSheet } from "react-native";
import { tokens } from "../../tokens/tokens";

export const styles = StyleSheet.create({
  buttonBase: {
    minHeight: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: tokens.themeSpace200,
  },
  buttonColorPrimaryVariantFilled: {
    backgroundColor: tokens.themeColorBackgroundPrimary,
    paddingLeft: tokens.themeSpace300,
    paddingRight: tokens.themeSpace300,
    paddingTop: tokens.themeSpace200,
    paddingBottom: tokens.themeSpace200,
    borderRadius: tokens.themeBorderRadiusSmall,
  },
  buttonColorSecondaryVariantFilled: {
    backgroundColor: tokens.themeColorBackgroundSecondary,
    paddingLeft: tokens.themeSpace300,
    paddingRight: tokens.themeSpace300,
    paddingTop: tokens.themeSpace200,
    paddingBottom: tokens.themeSpace200,
    borderRadius: tokens.themeBorderRadiusSmall,
  },
});
