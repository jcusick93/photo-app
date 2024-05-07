import { StyleSheet } from "react-native";
import { tokens, globalStyles } from "../../styles";

export const styles = StyleSheet.create({
  // base styles to always be applied
  iconButtonBase: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: globalStyles.borderRadiusFull,
  },
  // styles to be applied if variant === "filled"
  iconButtonVariantFilled: {
    borderRadius: globalStyles.borderRadiusFull,
  },

  // styles to be applied if color === "primary" && variant === "filled"
  iconButtonColorPrimary: {
    backgroundColor: tokens.themeColorBackgroundPrimary,
  },

  // styles to be applied if color === "secondary" && variant === "filled"
  iconButtonColorSecondary: {
    backgroundColor: tokens.themeColorBackgroundSecondary,
  },

  // size styles
  iconButtonSizeSmall: {
    height: 24,
    width: 24,
  },

  iconButtonSizeMedium: {
    height: 32,
    width: 32,
  },

  iconButtonSizeLarge: {
    height: 40,
    width: 40,
  },

  iconButtonSizeXLarge: {
    height: 44,
    width: 44,
  },
});
