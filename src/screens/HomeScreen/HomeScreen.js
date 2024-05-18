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
  Button,
  Header,
  LandingCard,
  XCircleFilled24,
} from "../../components";
import { useNavigation } from "@react-navigation/core";
import { ScreenNames } from "../../constants/ScreenNames";
import { useState } from "react";
import { tokens } from "../../styles/tokens";
import { Photographers, PortfolioData } from "../../constants";
import { globalStyles } from "../../styles";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState("");

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
          shape="circular"
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
        <Button
          variant="transparent"
          onPress={() => navigation.navigate(ScreenNames.HomeSettingsModal)}
        >
          Filter
        </Button>
      </Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: globalStyles.appContainerMarginTop,
          paddingBottom: globalStyles.appContainerMarginBottom,
          gap: globalStyles.space700,
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
