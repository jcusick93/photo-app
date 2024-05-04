import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import {
  IconButton,
  TextField,
  MagnifyingGlassOutlined24,
  SlidersHorizontalOutlined24,
  Header,
  LandingCard,
  XCircleFilled24,
  Text,
  Avatar,
  Carousel,
} from "../../components";
import { useNavigation } from "@react-navigation/core";
import { ScreenNames } from "../../constants/ScreenNames";
import { useState } from "react";
import { tokens } from "../../styles/tokens";
import { Photographers, PortfolioData } from "../../constants";
import { useRef } from "react";

const flatListData = [
  {
    uri: "https://scontent.cdninstagram.com/v/t39.30808-6/432620111_17951909939755183_870715823501742970_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=vU-W4XHnAQEAX_vU6FA&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMyMzg0MTEyMTI4OTIzOTY3NQ%3D%3D.2-ccb7-5&oh=00_AfBfLDp43cVcuV0R8LMryWg83xD8tVZqsI73N8ayEuvNxw&oe=660E0E78&_nc_sid=10d13b",
  },
  {
    uri: "https://scontent.cdninstagram.com/v/t39.30808-6/429765216_17950711379755183_4935556215913750548_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=8wXitu7cX3kAX-A0bt6&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMxNjQxMDc0NzU2MTY2NTczNQ%3D%3D.2-ccb7-5&oh=00_AfCU8LAb7kH3G3VMdTm46shLHFeCfFl6G4NHNxVu6JpBDA&oe=660E136C&_nc_sid=10d13b",
  },
  {
    uri: "https://scontent.cdninstagram.com/v/t39.30808-6/409061117_17949332447755183_4651595138733710311_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=qMBPBISG5f4AX_Rraie&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwNzY5ODc3MDA2NDY3Mzk3MA%3D%3D.2-ccb7-5&oh=00_AfA86kqoZp_N19WYPWlhFQpvHTpX_1F_Y6DlVoSvGytq0g&oe=660E1F21&_nc_sid=10d13b",
  },
  {
    uri: "https://scontent.cdninstagram.com/v/t39.30808-6/427915369_17948923691755183_4392625578914000788_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=5--0ChXWZGkAX9iOeMN&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwNTA5NjE2NjY1ODczMDk0MQ%3D%3D.2-ccb7-5&oh=00_AfDNCm70SiwwycrEuAnIfhbrtLck92svQNmfrXClo_bzJQ&oe=660E3CB6&_nc_sid=10d13b",
  },
  {
    uri: "https://scontent.cdninstagram.com/v/t39.30808-6/428186726_17948573141755183_9014371826387157629_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=BGQPe0AeL9UAX-ej-tm&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwMjg2MzQxMjczNDc1MTEwMQ%3D%3D.2-ccb7-5&oh=00_AfBExgf5ZxJDey1yCDWOLH0cAi0IKrtdc37RzUVscVxFbw&oe=660E149F&_nc_sid=10d13b",
  },
];

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState("");
  const handleCarouselPress = (item, navigation) => {
    navigation.navigate(ScreenNames.PhotographerProfile, {
      home: item,
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: tokens.themeColorBackgroundBaseline,
        height: "100%",
      }}
    >
      <Header>
        <TextField
          onChangeText={setSearchValue}
          value={searchValue}
          placeholder="Search photographers"
          before={
            <MagnifyingGlassOutlined24
              color={tokens.themeColorForegroundNeutralMedium}
            />
          }
          after={
            searchValue.length > 0 ? (
              <IconButton
                color="neutral"
                size="medium"
                shape="circular"
                variant="transparent"
                onPress={() => setSearchValue("")}
              >
                <XCircleFilled24
                  color={tokens.themeColorForegroundNeutralHigh}
                />
              </IconButton>
            ) : null
          }
        />

        <IconButton
          color="secondary"
          size="large"
          shape="circular"
          onPress={() => navigation.navigate(ScreenNames.HomeSettingsModal)}
        >
          <SlidersHorizontalOutlined24
            color={tokens.themeColorForegroundNeutralHigh}
          />
        </IconButton>
      </Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: tokens.themeAppScreenMarginTop,
          paddingBottom: tokens.themeAppScreenMarginBottom,
          gap: 24,
        }}
        style={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        {PortfolioData.map((item) => (
          <LandingCard
            carouselProps={{
              items: item.images,
            }}
            onPress={() =>
              navigation.navigate(ScreenNames.PhotographerProfile, {
                home: item,
              })
            }
            key={item.owner.name}
            title={item.owner.name}
            subtitle={item.owner.location}
            avatarSrc={{ uri: item.owner.uri }}
            imageSrc={{
              uri: item.images[0].uri,
            }}
          ></LandingCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
