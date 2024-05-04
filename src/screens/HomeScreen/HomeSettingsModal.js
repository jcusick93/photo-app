import * as React from "react";
import { View } from "react-native";
import { tokens } from "../../styles/tokens";
import { IconButton, Text } from "../../components";
import { useNavigation } from "@react-navigation/core";
import { XOutlined24 } from "../../components";

export function HomeSettingsModal() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "relative",
        alignItems: "center",
        flex: 1,
        backgroundColor: tokens.themeColorBackgroundOverlay,
        padding: tokens.themeAppMargin,
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        <IconButton
          onPress={() => navigation.goBack()}
          color="secondary"
          shape="circular"
          size="large"
        >
          <XOutlined24 color={tokens.themeColorForegroundNeutralHigh} />
        </IconButton>
      </View>
    </View>
  );
}
