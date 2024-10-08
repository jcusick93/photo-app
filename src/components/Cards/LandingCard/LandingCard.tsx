import * as React from "react";
import { View, ViewProps, Pressable } from "react-native";
import { Avatar } from "../../Avatar";
import { Text } from "../../Text";
import { Carousel, CarouselProps } from "../../Carousel/Carousel";
import { styles } from "./LandingCardStyles";

export interface LandingCardProps extends ViewProps {
  title: string;
  subtitle: string;
  imageSrc: any;
  avatarSrc: any;
  children?: React.ReactNode;
  carouselProps?: CarouselProps;
  onPress?: () => void;
}

export const LandingCard: React.FC<LandingCardProps> = ({
  title,
  subtitle,
  avatarSrc,
  carouselProps,
  onPress,
}) => {
  return (
    <View>
      <Carousel {...carouselProps} onPress={onPress} />
      <Pressable style={styles.landingCardFooter} onPress={onPress}>
        <Avatar size="medium" src={avatarSrc} />
        <View style={styles.footerTextStack}>
          <Text size="medium" color="neutralHigh">
            {title}
          </Text>
          <Text size="small" color="neutralMedium">
            {subtitle}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
