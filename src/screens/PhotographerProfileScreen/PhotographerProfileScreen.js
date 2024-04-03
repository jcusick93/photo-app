import * as React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Animated,
} from "react-native";
import {
  Text,
  CaretLeftOutlined24,
  Avatar,
  Header,
  IconButton,
  Footer,
} from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNames } from "../../constants/ScreenNames";
import { tokens } from "../../tokens/tokens";
import { PortfolioData, Photographers } from "../../constants/";
import { useState, useEffect, useRef } from "react";

console.log("Photographer screen was rendered!");

export const PhotographerProfileScreen = () => {
  const navigation = useNavigation();
  // assigns route to the useRoute hook
  const route = useRoute();
  // constant to access params from the chat conversation
  const conversation = route.params?.conversation;
  // constant to access the params from home
  const home = route.params?.home;

  // Extract photographer name from the route params
  const photographerName =
    conversation?.sender?.name ||
    home?.owner?.name ||
    route.params?.photographer;

  // Find the portfolio data for the photographer
  const portfolio = PortfolioData.find(
    (item) => item.owner.name === photographerName
  );

  // get the avatar image
  const avatarSrc = conversation?.sender?.uri || home?.owner?.uri || "";
  // get the rating
  const rating = conversation?.sender?.rating || home?.owner?.rating || "";

  // initialize the scrollY pos
  const scrollY = useRef(new Animated.Value(0)).current;
  // define y plots, opts, 100pts, and 120pts
  const inputRange = [0, 100, 120];

  // defines opacity at the y plots, 0% at 0pts, 0% at 100pts, and then from 100-120 pts it goes from 0-100% opacity
  const outputRange = [0, 0, 1];
  const opacity = scrollY.interpolate({
    inputRange,
    outputRange,
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: tokens.themeColorBackgroundBaseline }}
    >
      <Header
        title={
          <Animated.View style={{ opacity: opacity }}>
            <Text color="neutralHigh" size="medium" weight={500}>
              {photographerName}
            </Text>
          </Animated.View>
        }
        after={<View style={{ height: 24, width: 24 }} />}
        before={
          <IconButton
            size="small"
            variant="transparent"
            onPress={() => navigation.goBack()}
          >
            <CaretLeftOutlined24
              color={tokens.themeColorForegroundNeutralHigh}
            />
          </IconButton>
        }
      />

      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        <View
          style={{
            padding: tokens.themeAppMargin,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={{ uri: avatarSrc }} size="xLarge" />

          <Text size="large" weight={500}>
            {photographerName}
          </Text>
          <Text size="xSmall" color="neutralLow">
            {rating} stars
          </Text>
        </View>
        <View style={{ padding: tokens.themeAppMargin }}>
          <Text>Recent shots</Text>
        </View>
        {/* grid */}
        <View
          style={{
            gap: 1,
            width: "100%",
            flexDirection: "column",
          }}
        >
          {portfolio &&
            portfolio.images.map((item, index) => (
              <Image
                key={index}
                source={{ uri: item.uri }}
                style={{ height: 320, width: "100%" }}
              />
            ))}
        </View>
      </Animated.ScrollView>
      <Footer>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreenNames.Message, {
              photographer: photographerName,
            })
          }
          style={{
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: tokens.themeBorderRadiusMedium,
            width: "100%",
            flex: 1,
            backgroundColor: tokens.themeColorBackgroundSecondary,
          }}
        >
          <Text size="small">Send message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.HomeSettingsModal)}
          style={{
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: tokens.themeBorderRadiusMedium,
            width: "100%",
            flex: 1,
            backgroundColor: tokens.themeColorBackgroundPrimary,
          }}
        >
          <Text size="small">Book now</Text>
        </TouchableOpacity>
      </Footer>
    </SafeAreaView>
  );
};
