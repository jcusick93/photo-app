import { StyleSheet } from "react-native";
import { tokens, globalStyles } from "../../styles";

export const styles = StyleSheet.create({
  headerBase: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: globalStyles.appMarginHorizontal,
    paddingRight: globalStyles.appMarginHorizontal,
    paddingTop: globalStyles.space400,
    gap: globalStyles.space300,
    paddingBottom: globalStyles.space400,
  },
  headerBeforeSlot: {},
  headerAfterSlot: {},
  headerTitleAvatarStack: {
    gap: globalStyles.space300,
    flexDirection: "row",
    alignItems: "center",
  },
});
