import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { IconWrapper, IconWrapperProps } from "./IconWrapper";

export const CaretLeftOutlined24: React.FC<IconWrapperProps> = ({ color }) => {
  return (
    <IconWrapper>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M15.7959 18.7041C16.0073 18.9154 16.126 19.2021 16.126 19.5009C16.126 19.7998 16.0073 20.0865 15.7959 20.2978C15.5846 20.5092 15.2979 20.6279 14.9991 20.6279C14.7002 20.6279 14.4135 20.5092 14.2022 20.2978L6.70219 12.7978C6.59731 12.6933 6.51409 12.5691 6.45731 12.4324C6.40053 12.2956 6.3713 12.149 6.3713 12.0009C6.3713 11.8529 6.40053 11.7063 6.45731 11.5695C6.51409 11.4328 6.59731 11.3086 6.70219 11.2041L14.2022 3.70406C14.4135 3.49272 14.7002 3.37399 14.9991 3.37399C15.2979 3.37399 15.5846 3.49272 15.7959 3.70406C16.0073 3.91541 16.126 4.20205 16.126 4.50094C16.126 4.79982 16.0073 5.08647 15.7959 5.29781L9.09375 12L15.7959 18.7041Z"
          fill={color}
        />
      </Svg>
    </IconWrapper>
  );
};
