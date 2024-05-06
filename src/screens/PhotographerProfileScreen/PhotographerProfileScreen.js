import * as React from "react";
import { View, Image, SafeAreaView, Animated } from "react-native";
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
  SealCheckFilled24,
  MasonryGrid,
  Skeleton,
} from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNames } from "../../constants/ScreenNames";
import { tokens, globalStyles } from "../../styles";
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

  // Inits the hero loading state
  const [heroLoading, setHeroLoading] = useState(false);

  // Inits the avatar loading state
  const [avatarLoading, setAvatarLoading] = useState(false);

  // Extract photographer name from the route params
  const photographerName = conversation?.sender?.name || home?.owner?.name;

  // Check if is verified
  const verified = conversation?.sender?.verified || home?.owner?.verified;

  // Get the cover image
  const coverImage = conversation?.sender?.coverURI || home?.owner?.coverURI;

  // Find the portfolio data for the photographer
  const portfolio = PortfolioData.find(
    (item) => item.owner.name === photographerName
  );

  // Get the location
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
      label: "Top shots",
      content: <MasonryGrid images={portfolio.images} />,
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
            {verified && (
              <SealCheckFilled16 color={tokens.themeColorForegroundPrimary} />
            )}
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
      {/* animated scroll view so that the header knows when to animate */}
      <Animated.ScrollView
        contentContainerStyle={{
          paddingBottom: globalStyles.appContainerMarginBottom,
        }}
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
        {/* Hero lockup */}
        <View
          style={{
            width: "100%",
            paddingLeft: globalStyles.appMarginHorizontal,
            paddingRight: globalStyles.appMarginHorizontal,
            paddingTop: globalStyles.appContainerMarginTop,
          }}
        >
          <View
            style={{
              position: "relative",
              height: imageHeight,
              width: "100%",
            }}
          >
            {heroLoading && (
              <Skeleton
                style={{
                  flexGrow: 1,
                  borderRadius: globalStyles.borderRadiusMedium,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              />
            )}
            <Image
              onLoadStart={() => setHeroLoading(true)}
              onLoadEnd={() => setHeroLoading(false)}
              style={{
                borderRadius: globalStyles.borderRadiusMedium,
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
              <View
                style={{
                  overflow: "hidden",
                  height: 72,
                  width: 72,
                  borderRadius: globalStyles.borderRadiusFull,
                  borderWidth: 2,
                  borderColor: tokens.themeColorBackgroundBaseline,
                  backgroundColor: tokens.themeColorBackgroundBaseline,
                }}
              >
                <Avatar src={{ uri: avatarSrc }} size="xlarge" />
              </View>
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
            <View
              style={{
                gap: 4,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text size="large" weight={500} style={{ textAlign: "center" }}>
                {photographerName}
              </Text>
              {verified && (
                <SealCheckFilled24 color={tokens.themeColorForegroundPrimary} />
              )}
            </View>

            <Text size="xsmall" color="neutralLow">
              {location}
            </Text>
            <Text size="xsmall" color="neutralLow">
              {rating} stars
            </Text>
          </View>
        </View>

        <Tabs items={tabData} />
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
