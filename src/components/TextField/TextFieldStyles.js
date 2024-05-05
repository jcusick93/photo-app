import { StyleSheet } from "react-native";
import { tokens, globalStyles } from "../../styles";

export const styles = StyleSheet.create({
  textFieldBase: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  textFieldInput: {
    width: "100%",
    flex: 1,
    backgroundColor: tokens.themeColorBackgroundSecondary,
    overflow: "hidden",
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
