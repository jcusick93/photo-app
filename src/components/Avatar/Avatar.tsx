import * as React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  ImageProps,
} from "react-native";
import { styles } from "./AvatarStyles";
import { Skeleton } from "../Skeleton";
import { useState } from "react";

export interface AvatarProps extends TouchableOpacityProps {
  size?: "small" | "medium" | "large" | "xlarge";
  src?: any;
  initials?: string;
  style?: ViewStyle;
  imageProps?: ImageProps;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = "medium",
  src,
  initials,
  onPress,
  style,
  imageProps,
  ...props
}) => {
  let sizeStyles = {};
  switch (size) {
    case "small":
      sizeStyles = styles.avatarSizeSmall;
      break;
    case "medium":
      sizeStyles = styles.avatarSizeMedium;
      break;
    case "large":
      sizeStyles = styles.avatarSizeLarge;
      break;
    case "xlarge":
      sizeStyles = styles.avatarSizeXLarge;
      break;
  }

  // Conditionally render TouchableOpacity if onPress is provided, otherwise render View
  const AvatarComponent: React.ComponentType<TouchableOpacityProps> = onPress
    ? TouchableOpacity
    : View;

  // Initialize the loading to false
  const [loading, setLoading] = useState(false);
  return (
    <AvatarComponent
      style={[styles.avatarBase, sizeStyles, style]}
      onPress={onPress} // Pass onPress if provided
      {...(onPress ? props : {})} // Conditionally spread props only if TouchableOpacity is used
    >
      {loading && (
        <Skeleton
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      )}
      <Image
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        source={src}
        style={{ height: "100%", width: "100%" }}
        {...imageProps}
      />
    </AvatarComponent>
  );
};
