import { StyleSheet, Dimensions } from "react-native";
import { tokens } from "../../tokens/tokens";

export const styles = StyleSheet.create({
  carouselBase: {
    paddingLeft: tokens.themeAppMargin,
    paddingRight: tokens.themeAppMargin,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 8,
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: tokens.themeBorderRadiusFull,
    backgroundColor: tokens.themeColorForegroundNeutralHigh,
  },
});
