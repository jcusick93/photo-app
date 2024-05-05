import * as React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { styles } from "./FooterStyles";
import { tokens, globalStyles } from "../../styles";

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
        { gap: gap ? gap : globalStyles.space300 },
        { alignItems: alignItems ? alignItems : "center" },
      ]}
    >
      {children}
    </View>
  );
};
