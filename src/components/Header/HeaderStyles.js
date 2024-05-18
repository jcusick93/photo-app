import { StyleSheet } from "react-native";
import { tokens, globalStyles } from "../../styles";

export const styles = StyleSheet.create({
  headerBase: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: globalStyles.appMarginVertical,
    paddingRight: globalStyles.appMarginVertical,
    gap: globalStyles.space300,
    paddingTop: globalStyles.space400,
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
