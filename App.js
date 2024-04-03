import * as React from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tokens } from "./src/tokens/tokens";
import * as Haptics from "expo-haptics";
import {
  HomeScreen,
  InboxScreen,
  HomeSettingsModal,
  PhotographerProfileScreen,
  MessageScreen,
} from "./src/screens";

import {
  HomeFilled24,
  HomeOutlined24,
  ChatFilled24,
  ChatOutlined24,
} from "./src/components/Icons";
import { ChatBubble } from "./src/components/Chat/ChatBubble/ChatBubble";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./src/constants/ScreenNames";
import { Haptic } from "expo";

const TouchableTab = ({ children, onPress, screenName }) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} style={{ width: "100%" }}>
      <View
        style={{
          flex: 1,
        }}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

const ImageIcon = ({ focused }) => (
  <Image
    source={require("./assets/josh.jpeg")}
    style={{
      width: 24,
      height: 24,
      borderRadius: 99,
      borderWidth: 1,
      borderColor: focused ? "white" : "transparent",
    }}
  />
);

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: tokens.themeColorBackgroundBaseline,
      }}
    >
      <Text style={{ color: "white" }}>Profile screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: tokens.themeColorBackgroundBaseline,
          height: 84,
          borderTopColor: "rgba(255,255,255, .2)",
        },

        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === ScreenNames.Home) {
            return focused ? (
              <HomeFilled24 color={color} />
            ) : (
              <HomeOutlined24 color={color} />
            );
          } else if (route.name === ScreenNames.Inbox) {
            return focused ? (
              <ChatFilled24 color={color} />
            ) : (
              <ChatOutlined24 color={color} />
            );
          } else if (route.name === ScreenNames.Profile) {
            return <ImageIcon focused={focused} />;
          }
        },
        tabBarActiveTintColor: tokens.themeColorForegroundNeutralHigh,
        tabBarInactiveTintColor: tokens.themeColorForegroundNeutralLow,
      })}
    >
      <Tab.Screen
        name={ScreenNames.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarButton: (props) => <TouchableTab {...props} />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Inbox}
        component={InboxScreen}
        options={{
          title: "Chat",
          headerShown: false,
          tabBarButton: (props) => <TouchableTab {...props} />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarButton: (props) => <TouchableTab {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light-content" />
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.Root}
          component={Root}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={ScreenNames.Inbox}
          component={InboxScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.HomeSettingsModal}
          component={HomeSettingsModal}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name={ScreenNames.PhotographerProfile}
          component={PhotographerProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.Message}
          component={MessageScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
