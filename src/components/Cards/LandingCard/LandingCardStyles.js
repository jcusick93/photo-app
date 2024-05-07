import { StyleSheet } from "react-native";
import { tokens, globalStyles } from "../../../styles";

export const styles = StyleSheet.create({
  landingCardBase: {},
  landingCardFooter: {
    paddingLeft: globalStyles.appMarginVertical,
    paddingRight: globalStyles.appMarginVertical,
    flexDirection: "row",
    alignItems: "center",
    gap: globalStyles.space300,
  },
  footerTextStack: {},
});
