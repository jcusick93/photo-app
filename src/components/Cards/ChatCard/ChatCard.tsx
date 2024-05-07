import * as React from "react";
import { TouchableHighlight, View } from "react-native";
import { Avatar } from "../../Avatar";
import { Text } from "../../Text";
import { tokens } from "../../../styles";
import { styles } from "./ChatCardStyles";
import { SealCheckFilled16 } from "../../Icons";

export interface ChatCardProps {
  avatarSrc?: string;
  title?: string;
  subtitle?: string;
  time?: string;
  unread?: boolean;
  to?: any;
  onPress?: any;
  verified?: boolean;
}

export const ChatCard: React.FC<ChatCardProps> = ({
  avatarSrc,
  title,
  subtitle,
  time,
  to,
  onPress,
  verified = false,
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
        style={[
          styles.chatCardBase,
          {
            backgroundColor: pressed
              ? tokens.themeColorBackgroundSecondary
              : "transparent",
          },
        ]}
      >
        <Avatar src={avatarSrc} size="large" />
        <View style={{ flex: 1, width: "100%", flexGrow: 1 }}>
          {/* text-icon-stack */}
          <View style={verified && styles.chatCardTextIconStack}>
            <Text
              weight="regular"
              color="neutralHigh"
              size="medium"
              numberOfLines={1}
            >
              {title}
            </Text>
            {verified && (
              <SealCheckFilled16 color={tokens.themeColorForegroundPrimary} />
            )}
          </View>
          <Text
            weight="regular"
            color={unread ? "neutralHigh" : "neutralLow"}
            size="small"
            numberOfLines={1}
            style={{ width: "100%" }}
          >
            {subtitle}
          </Text>
          <Text size="xsmall" color="neutralLow" numberOfLines={1}>
            {time}
          </Text>
        </View>
        {/* indicator if unread */}
        {unread && <View style={styles.chatCardDot}></View>}
      </View>
    </TouchableHighlight>
  );
};
