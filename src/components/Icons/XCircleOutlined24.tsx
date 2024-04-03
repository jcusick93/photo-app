import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { IconWrapper, IconWrapperProps } from "./IconWrapper";

export const XCircleOutlined24: React.FC<IconWrapperProps> = ({ color }) => {
  return (
    <IconWrapper>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M15.7959 9.79594L13.5937 12L15.7987 14.2041C16.0101 14.4154 16.1288 14.7021 16.1288 15.0009C16.1288 15.2998 16.0101 15.5865 15.7987 15.7978C15.5874 16.0092 15.3008 16.1279 15.0019 16.1279C14.703 16.1279 14.4163 16.0092 14.205 15.7978L12 13.5938L9.79594 15.7988C9.58459 16.0101 9.29795 16.1288 8.99906 16.1288C8.70018 16.1288 8.41353 16.0101 8.20219 15.7988C7.99084 15.5874 7.87211 15.3008 7.87211 15.0019C7.87211 14.703 7.99084 14.4163 8.20219 14.205L10.4062 12L8.20406 9.79594C8.09942 9.69129 8.0164 9.56706 7.95977 9.43033C7.90313 9.2936 7.87399 9.14706 7.87399 8.99906C7.87399 8.70018 7.99272 8.41353 8.20406 8.20219C8.41541 7.99084 8.70205 7.87211 9.00094 7.87211C9.29982 7.87211 9.58647 7.99084 9.79781 8.20219L12 10.4062L14.2041 8.20125C14.4154 7.98991 14.7021 7.87117 15.0009 7.87117C15.2998 7.87117 15.5865 7.98991 15.7978 8.20125C16.0092 8.41259 16.1279 8.69924 16.1279 8.99813C16.1279 9.29701 16.0092 9.58366 15.7978 9.795L15.7959 9.79594ZM22.125 12C22.125 14.0025 21.5312 15.9601 20.4186 17.6251C19.3061 19.2902 17.7248 20.5879 15.8747 21.3543C14.0246 22.1206 11.9888 22.3211 10.0247 21.9305C8.06065 21.5398 6.25655 20.5755 4.84054 19.1595C3.42454 17.7435 2.46022 15.9393 2.06955 13.9753C1.67887 12.0112 1.87938 9.97543 2.64572 8.12533C3.41206 6.27523 4.7098 4.69392 6.37485 3.58137C8.0399 2.46882 9.99746 1.875 12 1.875C14.6844 1.87798 17.258 2.94567 19.1562 4.84383C21.0543 6.74199 22.122 9.3156 22.125 12ZM19.875 12C19.875 10.4425 19.4131 8.91992 18.5478 7.62488C17.6825 6.32985 16.4526 5.32049 15.0136 4.72445C13.5747 4.12841 11.9913 3.97246 10.4637 4.27632C8.93606 4.58017 7.53287 5.3302 6.43153 6.43153C5.3302 7.53287 4.58017 8.93606 4.27632 10.4637C3.97246 11.9913 4.12841 13.5747 4.72445 15.0136C5.32049 16.4526 6.32985 17.6825 7.62488 18.5478C8.91992 19.4131 10.4425 19.875 12 19.875C14.0879 19.8728 16.0896 19.0424 17.566 17.566C19.0424 16.0896 19.8728 14.0879 19.875 12Z"
          fill={color}
        />
      </Svg>
    </IconWrapper>
  );
};
