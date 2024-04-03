import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { IconWrapper, IconWrapperProps } from "./IconWrapper";

export const XOutlined24: React.FC<IconWrapperProps> = ({ color }) => {
  return (
    <IconWrapper>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M18.7042 17.2907C18.892 17.4784 18.9975 17.7331 18.9975 17.9987C18.9975 18.2643 18.892 18.5189 18.7042 18.7067C18.5164 18.8945 18.2618 19 17.9962 19C17.7306 19 17.4759 18.8945 17.2882 18.7067L11.9996 13.4165L6.70934 18.7051C6.52156 18.8928 6.26687 18.9983 6.00131 18.9983C5.73574 18.9983 5.48106 18.8928 5.29328 18.7051C5.10549 18.5173 5 18.2626 5 17.997C5 17.7315 5.10549 17.4768 5.29328 17.289L10.5835 12.0004L5.29494 6.71017C5.10716 6.52239 5.00167 6.2677 5.00167 6.00214C5.00167 5.73658 5.10716 5.48189 5.29494 5.29411C5.48272 5.10633 5.73741 5.00083 6.00297 5.00083C6.26854 5.00083 6.52322 5.10633 6.71101 5.29411L11.9996 10.5844L17.2898 5.29328C17.4776 5.10549 17.7323 5 17.9979 5C18.2634 5 18.5181 5.10549 18.7059 5.29328C18.8937 5.48106 18.9992 5.73574 18.9992 6.00131C18.9992 6.26687 18.8937 6.52156 18.7059 6.70934L13.4156 12.0004L18.7042 17.2907Z"
          fill={color}
        />
      </Svg>
    </IconWrapper>
  );
};
