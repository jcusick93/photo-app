import * as React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { styles } from "./FooterStyles";
import { tokens } from "../../styles/tokens";

export interface FooterProps extends ViewProps {
  children?: React.ReactNode;
  gap?: ViewStyle["gap"];
  alignItems?: ViewStyle["alignItems"];
}

export const Footer: React.FC<FooterProps> = ({
  children,
  gap,
  alignItems,
}) => {
  return (
    <View
      style={[
        styles.footerBase,
        { gap: gap ? gap : tokens.themeSpace300 },
        { alignItems: alignItems ? alignItems : "center" },
      ]}
    >
      {children}
    </View>
  );
};
