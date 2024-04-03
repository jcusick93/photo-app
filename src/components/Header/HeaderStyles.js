import { StyleSheet } from "react-native";
import { tokens } from "../../tokens/tokens";

export const styles = StyleSheet.create({
  headerBase: {
    gap: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: tokens.themeAppMargin,
    paddingRight: tokens.themeAppMargin,
    paddingTop: tokens.themeSpace300,
    gap: tokens.themeSpace300,
    paddingBottom: tokens.themeSpace400,
  },
  headerBeforeSlot: {},
  headerAfterSlot: {},
  headerTitleAvatarStack: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});
