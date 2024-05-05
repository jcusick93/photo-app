import { StyleSheet, Dimensions } from "react-native";
import { tokens, globalStyles } from "../../styles";

export const styles = StyleSheet.create({
  carouselBase: {
    paddingLeft: globalStyles.appMarginHorizontal,
    paddingRight: globalStyles.appMarginHorizontal,
  },
  carouselImageContainer: {
    height: 360,
    borderRadius: globalStyles.borderRadiusMedium,
    overflow: "hidden",
  },
  carouselImage: {
    height: 360,
    borderRadius: globalStyles.borderRadiusMedium,
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
    borderRadius: globalStyles.borderRadiusFull,
    backgroundColor: tokens.themeColorForegroundNeutralHigh,
  },
});
