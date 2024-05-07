import { StyleSheet } from "react-native";
import { tokens, globalStyles } from "../../styles";

export const styles = StyleSheet.create({
  textFieldBase: {
    flexGrow: 1,
    flex: 1,
  },
  textFieldInput: {
    width: "100%",

    backgroundColor: tokens.themeColorBackgroundSecondary,
    minHeight: 44,
    maxHeight: 120,
    fontSize: 14,
    lineHeight: 16,
    paddingTop: globalStyles.space400,
    paddingBottom: globalStyles.space400,
    borderRadius: globalStyles.borderRadiusXLarge,
    color: tokens.themeColorForegroundNeutralHigh,
  },
  textFieldInputSlot: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: 44,
    width: 44,
  },
});
