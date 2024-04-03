import { StyleSheet } from "react-native";
import { tokens } from "../../../tokens/tokens";

export const styles = StyleSheet.create({
  landingCardBase: {},
  landingCardFooter: {
    paddingLeft: tokens.themeAppMargin,
    paddingRight: tokens.themeAppMargin,
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.themeSpace300,
  },
  footerTextStack: {},
});
