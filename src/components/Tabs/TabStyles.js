import { StyleSheet } from "react-native";
import { tokens } from "../../styles/tokens";

export const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    height: "100%",
  },
  tabBar: {
    width: "100%",
    top: 0,
    borderBottomWidth: 1,
    borderColor: tokens.themeColorOutlineNeutralLow,
    backgroundColor: tokens.themeColorBackgroundBaseline,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIndicator: {
    position: "absolute",
    height: 2,
    bottom: 0,
    backgroundColor: tokens.themeColorOutlineNeutralHigh,
  },
  tabButton: {
    padding: 12,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },

  tabContentContainer: {
    flex: 1,
    flexGrow: 1,
    width: "100%",
    height: "100%",

    paddingTop: 12,
    paddingLeft: tokens.themeAppMargin,
    paddingRight: tokens.themeAppMargin,
  },
});
