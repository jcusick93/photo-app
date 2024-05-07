import * as React from "react";
import {
  Text as NativeText,
  TextStyle,
  TextProps as NativeTextProps,
} from "react-native";
import { styles } from "./TextStyles";

export interface TextProps extends NativeTextProps {
  color?:
    | "neutralHigh"
    | "neutralMedium"
    | "neutralLow"
    | "primary"
    | "onPrimary";
  weight?: "regular" | "semibold";
  size?: "xsmall" | "small" | "medium" | "large";
  style?: TextStyle;
}

export const Text: React.FC<TextProps> = ({
  color = "neutralHigh",
  weight = "regular",
  children,
  size = "medium",
  style,
  ...props
}) => {
  // Initializes the style objects
  let colorStyle = {};
  let sizeStyle = {};
  let weightStyle = {};

  switch (color) {
    case "primary":
      colorStyle = styles.textColorPrimary;
      break;
    case "neutralHigh":
      colorStyle = styles.textColorNeutralHigh;
      break;
    case "neutralMedium":
      colorStyle = styles.textColorNeutralMedium;
      break;
    case "neutralLow":
      colorStyle = styles.textColorNeutralLow;
      break;
    case "onPrimary":
      colorStyle = styles.textColorOnPrimary;
  }

  switch (size) {
    case "xsmall":
      sizeStyle = styles.textSizeXSmall;
      break;
    case "small":
      sizeStyle = styles.textSizeSmall;
      break;
    case "medium":
      sizeStyle = styles.textSizeMedium;
      break;
    case "large":
      sizeStyle = styles.textSizeLarge;
      break;
  }

  switch (weight) {
    case "regular":
      weightStyle = styles.textWeightRegular;
      break;
    case "semibold":
      weightStyle = styles.textWeightSemibold;
      break;
  }

  return (
    <NativeText
      {...props}
      style={[styles.text, colorStyle, sizeStyle, weightStyle, style]}
    >
      {children}
    </NativeText>
  );
};
