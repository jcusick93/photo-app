import { StyleSheet } from "react-native";
import { globalStyles, tokens } from "../../../styles";

export const styles = StyleSheet.create({
  chatCardBase: {
    paddingTop: globalStyles.space300,
    paddingLeft: globalStyles.appMarginVertical,
    paddingRight: globalStyles.appMarginVertical,
    paddingBottom: globalStyles.space300,
    width: "100%",
    overflow: "hidden",
    flexDirection: "row",
    gap: globalStyles.space300,
    alignItems: "center",
  },
  chatCardTextIconStack: {
    flexDirection: "row",
    gap: globalStyles.space200,
    alignItems: "center",
  },
  chatCardDot: {
    height: 8,
    width: 8,
    backgroundColor: tokens.themeColorForegroundNeutralHigh,
    borderRadius: globalStyles.borderRadiusFull,
  },
});
