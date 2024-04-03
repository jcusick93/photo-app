import * as React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./AvatarStyles";

export interface AvatarProps extends TouchableOpacityProps {
  size?: "small" | "medium" | "large" | "xLarge";
  src?: any;
  initials?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = "medium",
  src,
  initials,
  onPress,
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
    case "xLarge":
      sizeStyles = styles.avatarSizeXLarge;
      break;
  }

  // Conditionally render TouchableOpacity if onPress is provided, otherwise render View
  const AvatarComponent: React.ComponentType<TouchableOpacityProps> = onPress
    ? TouchableOpacity
    : View;

  return (
    <AvatarComponent
      style={[styles.avatarBase, sizeStyles]}
      onPress={onPress} // Pass onPress if provided
      {...(onPress ? props : {})} // Conditionally spread props only if TouchableOpacity is used
    >
      <Image source={src} style={{ height: "100%", width: "100%" }} />
    </AvatarComponent>
  );
};
