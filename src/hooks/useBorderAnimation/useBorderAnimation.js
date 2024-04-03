import { useState, useRef } from "react";
import { Animated } from "react-native";

export const useBorderAnimation = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const lineOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return { scrollY, lineOpacity };
};
