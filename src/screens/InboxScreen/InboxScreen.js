import * as React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { tokens } from "../../tokens/tokens";
import {
  ChatCard,
  Header,
  TextField,
  IconButton,
  MagnifyingGlassOutlined24,
  XCircleFilled24,
} from "../../components";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { ChatData } from "../../constants";
import { ScreenNames } from "../../constants/ScreenNames";

console.log("Inbox screen was rendered!");

export const InboxScreen = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: tokens.themeColorBackgroundBaseline,
      }}
    >
      {/* Header */}
      <Header>
        <View style={{ backgroundColor: "red", height: 44, flex: 1 }}></View>
        {/* <TextField
          onChangeText={setSearchValue}
          value={searchValue}
          placeholder="Search messages"
          before={
            <MagnifyingGlassOutlined24
              color={tokens.themeColorForegroundNeutralMedium}
            />
          }
          after={
            searchValue.length > 0 && (
              <IconButton
                variant="transparent"
                onPress={() => setSearchValue("")}
              >
                <XCircleFilled24
                  color={tokens.themeColorForegroundNeutralHigh}
                />
              </IconButton>
            )
          }
        /> */}
      </Header>

      {/* Chat list */}
      <ScrollView>
        <View>
          {ChatData.map((item, index) => (
            <ChatCard
              key={index}
              title={item.sender.name}
              avatarSrc={{ uri: item.sender.uri }}
              subtitle={
                item.messages.length > 0 ? item.messages[0].message : ""
              }
              time={item.messages.length > 0 ? item.messages[0].time : ""}
              onPress={() =>
                navigation.navigate(ScreenNames.Message, {
                  photographer: item.sender.name,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
