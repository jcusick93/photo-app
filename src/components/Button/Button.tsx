import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Text } from "../Text";
import { styles } from "./ButtonStyles";

export interface ButtonProps extends TouchableOpacityProps {
  variant?: "filled" | "text";
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
  let colorVariantStyles = {};
  switch (color) {
    case "primary":
      switch (variant) {
        case "filled":
          colorVariantStyles = styles.buttonColorPrimaryVariantFilled;
          break; // Don't forget to add break statement here
        default:
          // Handle other primary variants if needed
          break;
      }
      break; // Don't forget to add break statement here
    case "secondary":
      switch (variant) {
        case "filled":
          colorVariantStyles = styles.buttonColorSecondaryVariantFilled;
          break; // Don't forget to add break statement here
        default:
          // Handle other secondary variants if needed
          break;
      }
      break; // Don't forget to add break statement here
    default:
      // Handle other colors if needed
      break;
  }
  return (
    <TouchableOpacity
      {...props}
      style={[styles.buttonBase, colorVariantStyles, fullWidth && { flex: 1 }]}
    >
      {before && <View>{before}</View>}

      <Text
        style={{ textAlign: "center" }}
        size="small"
        weight={500}
        color={
          color === "primary" && variant === "filled"
            ? "onPrimary"
            : color === "primary" && variant === "text"
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
