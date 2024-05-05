import { StyleSheet } from "react-native";
import { tokens } from "../../styles/tokens";
import { globalStyles } from "../../styles";

export const styles = StyleSheet.create({
  footerBase: {
    borderTopWidth: 1,
    borderTopColor: tokens.themeColorOutlineNeutralLow,
    flexDirection: "row",
    paddingLeft: globalStyles.appMarginHorizontal,
    paddingRight: globalStyles.appMarginHorizontal,
    paddingTop: globalStyles.space400,
    paddingBottom: globalStyles.space400,
  },
});
