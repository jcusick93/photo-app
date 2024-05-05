import * as React from "react";
import {
  View,
  Image,
  Dimensions,
  Animated,
  Easing,
  Pressable,
} from "react-native";
import { tokens, globalStyles } from "../../styles";
import { styles } from "./CarouselStyles";
import { useState } from "react";
import { Skeleton } from "../Skeleton";

export interface CarouselProps {
  items: { uri: string }[];
  onPress?: any;
}

export const Carousel: React.FC<CarouselProps> = ({ items, onPress }) => {
  const [loading, setLoading] = useState(false);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const spacing = 16;
  const width =
    Dimensions.get("window").width - globalStyles.appMarginHorizontal * 2;
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
                style={[styles.carouselImageContainer, { width: width }]}
                onPress={() => onPress(item)}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
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
                  source={{ uri: item.uri }}
                  style={[styles.carouselImage, { width: width }]}
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
        const height = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [8, 12, 8],
          extrapolate: "clamp",
          easing: Easing.ease,
        });

        return (
          <Animated.View
            key={index}
            style={[styles.dot, { height: height, opacity: opacity }]}
          ></Animated.View>
        );
      })}
    </View>
  );
};
