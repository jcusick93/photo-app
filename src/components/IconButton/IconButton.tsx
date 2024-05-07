import * as React from "react";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import { styles } from "./IconButtonStyles";

export interface IconButtonProps extends TouchableOpacityProps {
  variant?: "filled" | "transparent";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "xlarge";
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = "filled",
  children,
  size = "medium",
  color = "secondary",
  style,
  ...props
}) => {
  let colorStyles = {};
  let variantStyles = {};

  switch (variant) {
    case "filled":
      variantStyles = styles.iconButtonVariantFilled;
      break;
  }

  switch (color) {
    case "primary":
      switch (variant) {
        case "filled":
          colorStyles = styles.iconButtonColorPrimary;
          break;
      }
      break;
    case "secondary":
      switch (variant) {
        case "filled":
          colorStyles = styles.iconButtonColorSecondary;
          break;
      }
      break;
  }

  // size styles
  let sizeStyles = {};
  switch (size) {
    case "small":
      sizeStyles = styles.iconButtonSizeSmall;
      break;
    case "medium":
      sizeStyles = styles.iconButtonSizeMedium;
      break;
    case "large":
      sizeStyles = styles.iconButtonSizeLarge;
      break;
    case "xlarge":
      sizeStyles = styles.iconButtonSizeXLarge;
      break;
  }

  return (
    <TouchableOpacity
      {...props}
      style={[styles.iconButtonBase, colorStyles, sizeStyles, style]}
    >
      {children}
    </TouchableOpacity>
  );
};
