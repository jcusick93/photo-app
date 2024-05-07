import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  View,
} from "react-native";
import {
  Avatar,
  CaretLeftOutlined24,
  ChatBubble,
  Footer,
  Header,
  IconButton,
  MicrophoneFilled24,
  PaperPlaneTiltFilled24,
  TextField,
} from "../../components";
import { tokens } from "../../styles/tokens";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNames } from "../../constants/ScreenNames";
import { ChatData } from "../../constants/ChatData";

export const MessageScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // State for storing photographer's chat data
  const [chatData, setChatData] = useState(null);

  // Declare photographerName here
  const photographerName = route.params?.photographer;

  useEffect(() => {
    // Find the photographer's chat data from ChatData
    const photographerChatData = ChatData.find(
      (chat) => chat.sender.name === photographerName
    );

    // Set the photographer's chat data in state
    setChatData(photographerChatData);
  }, [photographerName]); // Use photographerName as a dependency

  const [inputValue, setInputValue] = useState("");

  const renderItem = ({ item }) => (
    <ChatBubble
      avatarSrc={{ uri: chatData?.sender.uri }}
      variant={item.variant}
      time={item.time}
      // avatarSrc={{
      //   uri: item.sender.uri, // Use item.sender.uri instead of conversation.sender.uri
      // }}
    >
      {item.message}
    </ChatBubble>
  );

  const keyExtractor = (_, index) => index.toString();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: tokens.themeColorBackgroundBaseline }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Header
          after={<View style={{ height: 24, width: 24 }} />}
          title={chatData?.sender.name || undefined}
          avatar={
            <Avatar
              size="small"
              src={{
                uri: chatData?.sender.uri,
              }}
              onPress={() =>
                navigation.navigate(ScreenNames.PhotographerProfile, {
                  conversation: chatData, // Pass the entire chatData object
                })
              }
            />
          }
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

        <FlatList
          inverted
          data={chatData?.messages || []} // Use chatData.messages for the data
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={{
            padding: tokens.themeAppMargin,
            gap: tokens.themeSpace500,
          }}
        />

        <Footer alignItems="flex-end">
          <TextField
            multiline
            numberOfLines={2}
            placeholder="Type a message"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <View>
            <IconButton
              color={inputValue.length > 0 ? "primary" : "secondary"}
              shape="circular"
              size="xlarge"
            >
              {inputValue.length > 0 ? (
                <PaperPlaneTiltFilled24
                  color={tokens.themeColorForegroundNeutralHigh}
                />
              ) : (
                <MicrophoneFilled24
                  color={tokens.themeColorForegroundNeutralHigh}
                />
              )}
            </IconButton>
          </View>
        </Footer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
