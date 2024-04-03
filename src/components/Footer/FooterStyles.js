import { StyleSheet } from "react-native";
import { tokens } from "../../tokens/tokens";

export const styles = StyleSheet.create({
  footerBase: {
    borderTopWidth: 1,
    borderTopColor: tokens.themeColorOutlineNeutralLow,
    flexDirection: "row",
    paddingLeft: tokens.themeAppMargin,
    paddingRight: tokens.themeAppMargin,
    paddingTop: tokens.themeSpace400,
    paddingBottom: tokens.themeSpace400,
  },
});
