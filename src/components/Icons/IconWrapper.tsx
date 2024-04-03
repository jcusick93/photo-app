import * as React from "react";
import { View } from "react-native";
import { styles } from "./IconWrapperStyles";
import { tokens } from "../../tokens/tokens";

export interface IconWrapperProps {
  children?: React.ReactNode;
  color?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  color,
}) => {
  let fillColor = {};

  switch (color) {
    case "primary":
      fillColor = tokens.themeColorForegroundPrimary;
      break;
    case "neutralHigh":
      fillColor = tokens.themeColorForegroundNeutralHigh;
      break;
    case "neutralMedium":
      fillColor = tokens.themeColorForegroundNeutralMedium;
      break;
    case "neutralLow":
      fillColor = tokens.themeColorForegroundNeutralLow;
      break;
  }
  return <View style={{}}>{children}</View>;
};
