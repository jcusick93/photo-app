import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Text } from "../Text";
import { styles } from "./ButtonStyles";

export interface ButtonProps extends TouchableOpacityProps {
  variant?: "filled" | "transparent";
  color?: "primary" | "secondary";
  before?: React.ReactNode;
  after?: React.ReactNode;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  color = "secondary",
  before,
  after,
  children,
  fullWidth,
  ...props
}) => {
  let variantStyles = {};
  switch (variant) {
    case "filled":
      variantStyles = styles.buttonVariantFilled;
      break;
  }
  let colorStyles = {};
  switch (color) {
    case "primary":
      switch (variant) {
        case "filled":
          colorStyles = styles.buttonColorPrimary;
          break;
      }
      break;
    case "secondary":
      switch (variant) {
        case "filled":
          colorStyles = styles.buttonColorSecondary;
          break;
      }
      break;
  }
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.buttonBase,
        colorStyles,
        variantStyles,
        fullWidth && { flex: 1 },
      ]}
    >
      {before && <View>{before}</View>}

      <Text
        style={{ textAlign: "center" }}
        weight="semibold"
        size="small"
        color={
          color === "primary" && variant === "filled"
            ? "onPrimary"
            : color === "primary" && variant === "transparent"
            ? "primary"
            : "neutralHigh"
        }
      >
        {children}
      </Text>

      {after && <View>{after}</View>}
    </TouchableOpacity>
  );
};
