import { StyleSheet } from "react-native";
import { globalStyles, tokens } from "../../../styles";

export const styles = StyleSheet.create({
  chatBubbleBase: {
    gap: globalStyles.space300,
    maxWidth: 240,
    borderTopLeftRadius: globalStyles.borderRadiusXLarge,
    borderTopRightRadius: globalStyles.borderRadiusXLarge,
    padding: globalStyles.space400,
  },
  chatBubbleFrom: {
    backgroundColor: tokens.themeColorBackgroundSecondary,
    borderBottomRightRadius: globalStyles.borderRadiusXLarge,
  },

  chatBubbleTo: {
    backgroundColor: tokens.themeColorBackgroundPrimary,
    borderBottomLeftRadius: globalStyles.borderRadiusXLarge,
  },
});
