import * as React from "react";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import { styles } from "./IconButtonStyles";

export interface IconButtonProps extends TouchableOpacityProps {
  variant?: "filled" | "transparent" | "fab";
  color?: "primary" | "secondary" | "neutral";
  size?: "small" | "medium" | "large" | "xLarge";
  shape?: "rounded" | "circular";
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = "filled",
  children,
  size = "medium",
  shape = "rounded",
  color = "secondary",
  style,
  ...props
}) => {
  let colorStyles = {};
  let sizeStyles = {};
  let shapeStyles = {};

  // color styles
  switch (`${color}-${variant}`) {
    case "primary-filled":
      colorStyles = styles.iconButtonColorPrimaryVariantFilled;
      break;
    case "primary-fab":
      colorStyles = styles.iconButtonColorPrimaryVariantFab;
      break;
    case "secondary-filled":
      colorStyles = styles.iconButtonColorSecondaryVariantFilled;
      break;
    case "secondary-fab":
      colorStyles = styles.iconButtonColorSecondaryVariantFab;
      break;
    case "neutral-filled":
      colorStyles = styles.iconButtonColorNeutralVariantFilled;
      break;
    case "neutral-fab":
      colorStyles = styles.iconButtonColorNeutralVariantFab;
      break;
  }

  // size styles
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
    case "xLarge":
      sizeStyles = styles.iconButtonSizeXLarge;
      break;
  }

  // shape styles
  switch (shape) {
    case "rounded":
      shapeStyles = styles.iconButtonShapeRounded;
      break;
    case "circular":
      shapeStyles = styles.iconButtonShapeCircular;
      break;
  }
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.iconButtonBase,
        colorStyles,
        sizeStyles,
        shapeStyles,
        style,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};
