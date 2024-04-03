import * as React from "react";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { tokens } from "../../tokens/tokens";
import { Text } from "../Text/Text";

export interface ButtonProps {
  children?: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
  variant?: "filled" | "text";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  before,
  after,
  variant = "filled",
  disabled = false,
  color = "secondary",
}) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View
          style={[
            styles.buttonBase,
            color === "primary"
              ? styles.buttonColorPrimary
              : styles.buttonColorSecondary,
          ]}
        >
          {before ? <View>{before}</View> : null}
          <Text size="medium" color="neutralHigh" weight={700}>
            {children}
          </Text>
          {after ? <View>{after}</View> : null}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  buttonBase: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    minHeight: 40,
  },

  buttonColorPrimary: {
    backgroundColor: tokens.themeColorBackgroundPrimary,
  },

  buttonColorSecondary: {
    backgroundColor: tokens.themeColorBackgroundSecondary,
  },
});
