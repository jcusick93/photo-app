import * as React from "react";
import { View, Image } from "react-native";
import { tokens } from "../../../styles/tokens";
import { Text } from "../../Text";
import { Avatar } from "../../Avatar";

export interface ChatBubbleProps {
  children?: React.ReactNode;
  variant: "to" | "from";
  time?: string;
  avatarSrc?: any;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  children,
  variant = "to",
  time,
  avatarSrc,
}) => {
  return (
    <View
      style={{
        alignItems: variant === "to" ? "flex-end" : "flex-start",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 8 }}>
        {variant == "from" ? <Avatar size="small" src={avatarSrc} /> : null}
        <View
          style={{
            gap: 8,
            maxWidth: 240,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderBottomLeftRadius: variant === "to" ? 24 : 0,
            borderBottomRightRadius: variant === "to" ? 0 : 24,
            padding: 12,

            backgroundColor:
              variant === "to"
                ? tokens.themeColorBackgroundPrimary
                : tokens.themeColorBackgroundSecondary,
          }}
        >
          <Text style={{ color: "white" }} size="small" color="neutralHigh">
            {children}
          </Text>
          {time ? (
            <Text size="xSmall" color="neutralLow">
              {time}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};
