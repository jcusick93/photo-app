import { StyleSheet } from "react-native";
import { tokens, globalStyles } from "../../../styles";

export const styles = StyleSheet.create({
  landingCardBase: {},
  landingCardFooter: {
    paddingLeft: globalStyles.appMarginHorizontal,
    paddingRight: globalStyles.appMarginHorizontal,
    flexDirection: "row",
    alignItems: "center",
    gap: globalStyles.space300,
  },
  footerTextStack: {},
});
