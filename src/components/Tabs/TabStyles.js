import { StyleSheet } from "react-native";
import { tokens } from "../../tokens/tokens";

export const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: tokens.themeColorOutlineNeutralLow,
    backgroundColor: tokens.themeColorBackgroundBaseline,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  tabBarIndicator: {},
  tabButton: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },

  tabContentContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 12,
    paddingLeft: tokens.themeAppMargin,
    paddingRight: tokens.themeAppMargin,
  },
});
