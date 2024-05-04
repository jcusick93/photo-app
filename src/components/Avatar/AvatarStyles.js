import { StyleSheet } from "react-native";
import { tokens } from "../../styles/tokens";

export const styles = StyleSheet.create({
  avatarBase: {
    borderRadius: tokens.themeBorderRadiusFull,
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
