import { StyleSheet } from "react-native";
import { tokens, globalStyles } from "../../styles";

export const styles = StyleSheet.create({
  avatarBase: {
    borderRadius: globalStyles.borderRadiusFull,
    overflow: "hidden",
  },
  // size styles
  avatarSizeSmall: {
    height: 32,
    width: 32,
  },
  avatarSizeMedium: {
    height: 44,
    width: 44,
  },
  avatarSizeLarge: {
    height: 56,
    width: 56,
  },
  avatarSizeXLarge: {
    height: 72,
    width: 72,
  },
});
