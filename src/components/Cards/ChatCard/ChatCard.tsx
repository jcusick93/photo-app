import * as React from "react";
import { TouchableOpacity, TouchableHighlight, View } from "react-native";
import { Avatar } from "../../Avatar";
import { Text } from "../../Text";
import { tokens } from "../../../styles/tokens";

export interface ChatCardProps {
  avatarSrc?: string;
  title?: string;
  subtitle?: string;
  time?: string;
  unread?: boolean;
  to?: any;
  onPress?: any;
}

export const ChatCard: React.FC<ChatCardProps> = ({
  avatarSrc,
  title,
  subtitle,
  time,
  to,
  onPress,
  unread = false,
}) => {
  const [pressed, setPressed] = React.useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <TouchableHighlight
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: pressed
            ? tokens.themeColorBackgroundSecondary
            : "transparent", // Corrected background color
          paddingTop: tokens.themeSpace300,
          paddingLeft: tokens.themeAppMargin,
          paddingRight: tokens.themeAppMargin,
          paddingBottom: tokens.themeSpace300,

          width: "100%",
          overflow: "hidden",
          flexDirection: "row",
          gap: tokens.themeSpace300,
          alignItems: "center",
        }}
      >
        <Avatar src={avatarSrc} size="large" />
        {/* dot */}

        <View style={{ flex: 1, width: "100%", flexGrow: 1 }}>
          <Text
            weight={400}
            color="neutralHigh"
            size="medium"
            style={{ width: "100%" }}
          >
            {title}
          </Text>
          <Text
            color={unread ? "neutralHigh" : "neutralLow"}
            size="small"
            numberOfLines={1}
            style={{ width: "100%" }}
          >
            {subtitle}
          </Text>
          <Text size="small" color="neutralLow">
            {time}
          </Text>
        </View>
        {unread ? (
          <View
            style={{
              borderRadius: tokens.themeBorderRadiusFull,
              height: 8,
              width: 8,
              backgroundColor: tokens.themeColorForegroundNeutralHigh,
            }}
          ></View>
        ) : null}
      </View>
    </TouchableHighlight>
  );
};
