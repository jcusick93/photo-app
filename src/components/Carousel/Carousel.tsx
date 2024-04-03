import * as React from "react";
import { View, Image, Dimensions, Animated } from "react-native";
import { tokens } from "../../tokens/tokens";
import { styles } from "./CarouselStyles";

export interface CarouselProps {
  items: { uri: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const spacing = 16;
  const cardWidth = Dimensions.get("window").width - tokens.themeAppMargin * 2;

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
          { useNativeDriver: true }
        )}
        contentContainerStyle={styles.carouselBase}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled={true}
        decelerationRate="fast"
        snapToInterval={cardWidth + spacing}
        data={items}
        keyExtractor={(item) => item.uri}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * (cardWidth + spacing), // Previous card position with spacing
            index * (cardWidth + spacing), // Current card position with spacing
            (index + 1) * (cardWidth + spacing), // Next card position with spacing
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={{
                opacity: opacity,
                transform: [{ scale }],
                marginRight: spacing,
              }}
            >
              <Image
                source={{ uri: item.uri }}
                style={{
                  height: 360,
                  width: cardWidth,
                  borderRadius: tokens.themeBorderRadiusLarge,
                }}
              />
            </Animated.View>
          );
        }}
      />

      <View style={styles.dotContainer}>
        {items.map((item, index) => (
          <Animated.View key={index} style={[styles.dot, { opacity: 1 }]} />
        ))}
      </View>
    </View>
  );
};
