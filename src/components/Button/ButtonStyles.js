import { StyleSheet } from "react-native";
import { tokens, globalStyles } from "../../styles";

export const styles = StyleSheet.create({
  // base styles to always apply
  buttonBase: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: globalStyles.space200,
  },
  // apply if variant === "filled"
  buttonVariantFilled: {
    minHeight: 44,
    paddingLeft: globalStyles.space300,
    paddingRight: globalStyles.space300,
    paddingTop: globalStyles.space200,
    paddingBottom: globalStyles.space200,
    borderRadius: globalStyles.borderRadiusSmall,
  },

  // apply if color === "primary" && variant === "filled"
  buttonColorPrimary: {
    backgroundColor: tokens.themeColorBackgroundPrimary,
  },

  // apply if color === "secondary" && variant === "filled"
  buttonColorSecondary: {
    backgroundColor: tokens.themeColorBackgroundSecondary,
  },
});
