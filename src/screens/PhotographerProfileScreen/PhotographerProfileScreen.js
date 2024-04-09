import * as React from "react";
import {
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
  Button,
  Tabs,
  TabBar,
  TabButton,
  TabPanel,
  SealCheckFilled16,
} from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNames } from "../../constants/ScreenNames";
import { tokens } from "../../tokens/tokens";
import { PortfolioData, Photographers } from "../../constants/";
import { useState, useEffect, useRef, useCallback } from "react";

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

  const coverImage =
    conversation?.sender?.coverURI ||
    home?.owner?.coverURI ||
    route.params?.photographer?.coverImage;

  // Find the portfolio data for the photographer
  const portfolio = PortfolioData.find(
    (item) => item.owner.name === photographerName
  );

  const location = conversation?.sender?.location || home?.owner?.location;
  // get the avatar image
  const avatarSrc = conversation?.sender?.uri || home?.owner?.uri || "";
  // get the rating
  const rating = conversation?.sender?.rating || home?.owner?.rating || "";

  // initialize the scrollY pos
  const scrollY = useRef(new Animated.Value(0)).current;
  const imageHeight = 180;
  const offSet = imageHeight + 60;
  // define y plots
  const inputRange = [0, offSet, offSet + 20];

  // defines opacity at the y plots, 0% at 0pts, 0% at 100pts, and then from 100-120 pts it goes from 0-100% opacity
  const outputRange = [0, 0, 1];
  const opacity = scrollY.interpolate({
    inputRange,
    outputRange,
    extrapolate: "clamp",
  });

  const tabData = [
    {
      label: "Recents",
      content: (
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
      ),
    },
    {
      label: "Reviews",
      content: <Text>Reviews</Text>,
    },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: tokens.themeColorBackgroundBaseline }}
    >
      <Header
        title={
          <Animated.View
            style={{
              opacity: opacity,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text color="neutralHigh" size="small" weight={500}>
              {photographerName}
            </Text>

            <SealCheckFilled16 color={tokens.themeColorForegroundPrimary} />
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
        showsVerticalScrollIndicator={false}
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
            paddingLeft: tokens.themeAppMargin,
            paddingRight: tokens.themeAppMargin,
            paddingTop: tokens.themeAppScreenMarginTop,
            paddingBottom: tokens.themeAppScreenMarginBottom,
          }}
        >
          <View
            style={{
              position: "relative",
              height: imageHeight,

              width: "100%",
            }}
          >
            <Image
              style={{
                borderRadius: tokens.themeBorderRadiusMedium,
                width: "100%",
                height: "100%",
              }}
              source={{
                uri: coverImage,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: -(72 / 2),
                width: "100%",
                height: 72,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                src={{ uri: avatarSrc }}
                size="xLarge"
                style={{
                  // centers the avatar on the bottom line, half the width

                  borderWidth: 2,
                  borderColor: tokens.themeColorBackgroundBaseline,
                }}
              />
            </View>
          </View>

          {/* text stack */}
          <View
            style={{
              marginTop: 72 / 2 + 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text size="large" weight={500} style={{ textAlign: "center" }}>
              {photographerName}
            </Text>
            <Text size="xSmall" color="neutralLow">
              {location}
            </Text>
            <Text size="xSmall" color="neutralLow">
              {rating} stars
            </Text>
          </View>
        </View>

        <Tabs
          items={tabData}
          style={{ paddingBottom: tokens.themeAppScreenMarginBottom }}
        />
      </Animated.ScrollView>
      <Footer>
        <Button
          color="secondary"
          fullWidth
          onPress={() =>
            navigation.navigate(ScreenNames.Message, {
              photographer: photographerName,
            })
          }
        >
          Send message
        </Button>
        <Button
          color="primary"
          fullWidth
          onPress={() => navigation.navigate(ScreenNames.HomeSettingsModal)}
        >
          Book now
        </Button>
      </Footer>
    </SafeAreaView>
  );
};
