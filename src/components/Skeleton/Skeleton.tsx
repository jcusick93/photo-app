import * as React from "react";
import { View, ViewStyle } from "react-native";
import { tokens } from "../../tokens/tokens";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

export interface SkeletonProps extends ViewProps {
  style?: ViewStyle;
}

export const Skeleton: React.FC<SkeletonProps> = ({ style, ...props }) => {
  return (
    <View
      {...props}
      style={[
        {
          flexGrow: 1,
          backgroundColor: tokens.themeColorForegroundNeutralHigh,
          opacity: 0.1,
        },
        style,
      ]}
    />
  );
};
