import { StyleSheet, Dimensions } from "react-native";
import { tokens } from "../../tokens/tokens";

export const styles = StyleSheet.create({
  carouselBase: {
    paddingLeft: tokens.themeAppMargin,
    paddingRight: tokens.themeAppMargin,
  },
  dotContainer: {
    minHeight: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 8,
    gap: 8,
  },
  dot: {
    width: 2,
    borderRadius: tokens.themeBorderRadiusFull,
    backgroundColor: tokens.themeColorForegroundNeutralHigh,
  },
});
