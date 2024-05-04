import React from "react";
import { View, Animated, ViewStyle } from "react-native";
import { tokens } from "../../styles/tokens";
import { styles } from "./HeaderStyles";
import { Text } from "../Text";
import { SealCheckFilled16 } from "../Icons/SealCheckFilled16";

interface HeaderProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
  avatar?: React.ReactNode;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  verified?: boolean;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export const Header: React.FC<HeaderProps> = ({
  before,
  avatar,
  title,
  subtitle,
  verified = false,
  children,
  style,
  after,
}) => {
  return (
    <View style={styles.headerBase}>
      {before && <View style={styles.headerBeforeSlot}>{before}</View>}
      {/* only render IF avatar, title, OR subtitle are true */}
      {avatar || title || subtitle ? (
        <View style={styles.headerTitleAvatarStack}>
          {avatar && <View>{avatar}</View>}
          {(title || subtitle) && (
            <View>
              {typeof title === "string" ? (
                <Text size="medium" color="neutralHigh" weight={500}>
                  {title}
                </Text>
              ) : (
                title
              )}
              {typeof subtitle === "string" ? (
                <Text size="xSmall" color="neutralMedium">
                  {subtitle}
                </Text>
              ) : (
                subtitle
              )}
            </View>
          )}
        </View>
      ) : null}

      {after && <View style={styles.headerAfterSlot}>{after}</View>}
      {children}
    </View>
  );
};
