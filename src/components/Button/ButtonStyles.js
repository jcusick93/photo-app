import { StyleSheet } from "react-native";
import { tokens, globalStyles } from "../../styles";

export const styles = StyleSheet.create({
  buttonBase: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: globalStyles.space200,
  },

  buttonColorPrimaryVariantFilled: {
    minHeight: 44,
    backgroundColor: tokens.themeColorBackgroundPrimary,
    paddingLeft: globalStyles.space300,
    paddingRight: globalStyles.space300,
    paddingTop: globalStyles.space200,
    paddingBottom: globalStyles.space200,
    borderRadius: globalStyles.borderRadiusSmall,
  },
  buttonColorSecondaryVariantFilled: {
    minHeight: 44,
    backgroundColor: tokens.themeColorBackgroundSecondary,
    paddingLeft: globalStyles.space300,
    paddingRight: globalStyles.space300,
    paddingTop: globalStyles.space200,
    paddingBottom: globalStyles.space200,
    borderRadius: globalStyles.borderRadiusSmall,
  },
});
