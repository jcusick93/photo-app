import * as React from "react";
import { View } from "react-native";
import { tokens } from "../../styles";
import { Text } from "../Text";
import { Avatar } from "../Avatar";
import { styles } from "./ChatBubbleStyles";

export interface ChatBubbleProps {
  children?: React.ReactNode;
  variant: "to" | "from";
  time?: string;
  avatarSrc?: any;
  onAvatarPress?: () => void;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  children,
  variant = "to",
  time,
  avatarSrc,
  onAvatarPress,
}) => {
  return (
    <View
      style={{
        alignItems: variant === "to" ? "flex-end" : "flex-start",
      }}
    >
      <View style={styles.chatBubbleContainer}>
        {/* If from is true, show an avatar */}
        {variant == "from" && (
          <Avatar size="small" src={avatarSrc} onPress={onAvatarPress} />
        )}
        <View
          style={[
            styles.chatBubbleBase,
            variant === "to" ? styles.chatBubbleTo : styles.chatBubbleFrom,
          ]}
        >
          <Text
            size="small"
            color={variant === "to" ? "onPrimary" : "neutralHigh"}
          >
            {children}
          </Text>
          {time ? (
            <Text
              size="xsmall"
              color={variant === "to" ? "onPrimary" : "neutralHigh"}
            >
              {time}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};
