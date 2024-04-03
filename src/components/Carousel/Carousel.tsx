import * as React from "react";
import {
  View,
  Image,
  Dimensions,
  Animated,
  Easing,
  Touchable,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { tokens } from "../../tokens/tokens";
import { styles } from "./CarouselStyles";

export interface CarouselProps {
  items: { uri: string }[];
  onPress?: any;
}

export const Carousel: React.FC<CarouselProps> = ({ items, onPress }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const spacing = 16;
  const width = Dimensions.get("window").width - tokens.themeAppMargin * 2;
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.FlatList
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        contentContainerStyle={styles.carouselBase}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled={true}
        decelerationRate="fast"
        snapToInterval={width + spacing}
        data={items}
        keyExtractor={(item) => item.uri}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * (width + spacing), // Previous card position with spacing
            index * (width + spacing), // Current card position with spacing
            (index + 1) * (width + spacing), // Next card position with spacing
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp",
            easing: Easing.ease,
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
            extrapolate: "clamp",
            easing: Easing.ease,
          });

          return (
            <Animated.View
              style={{
                opacity: opacity,
                transform: [{ scale }],
                marginRight: spacing,
              }}
            >
              <Pressable
                onPress={() => onPress(item)}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
              >
                <Image
                  source={{ uri: item.uri }}
                  style={{
                    height: 360,
                    width: width,
                    borderRadius: tokens.themeBorderRadiusLarge,
                  }}
                />
              </Pressable>
            </Animated.View>
          );
        }}
      />
      <Dots items={items} scrollX={scrollX} width={width} spacing={spacing} />
    </View>
  );
};

const Dots = ({ items, scrollX, width, spacing }) => {
  const dotPosition = Animated.divide(scrollX, width + spacing);

  return (
    <View style={styles.dotContainer}>
      {items.map((item, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
          easing: Easing.ease,
        });
        const width = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [8, 16, 8],
          extrapolate: "clamp",
          easing: Easing.ease,
        });

        return (
          <Animated.View
            key={index}
            style={[styles.dot, { width: width, opacity: opacity }]}
          ></Animated.View>
        );
      })}
    </View>
  );
};
