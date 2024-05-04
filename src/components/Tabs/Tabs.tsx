import * as React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Animated,
  ViewStyle,
  Dimensions,
  ScrollView,
} from "react-native";
import { Text } from "../Text";
import { styles } from "./TabStyles";
import { useState, useCallback, useEffect } from "react";
import { tokens } from "../../styles/tokens";

export interface TabsProps {
  value: any;
  children: React.ReactNode;
  items?: { label: string; content: React.ReactNode }[];
  style?: ViewStyle;
}

export interface TabBarProps {
  children: React.ReactNode;
  indicatorPos: any;
  indicatorWidth: any;
}

export interface TabButtonProps extends TouchableOpacityProps {
  value: any;
  active?: boolean;
  children?: React.ReactNode;
}

// tab bar that holds TabButtons
export const TabBar: React.FC<TabBarProps> = ({
  children,
  indicatorPos,
  indicatorWidth,
}) => {
  return (
    <View style={styles.tabBar}>
      {children}
      <Animated.View
        style={[
          styles.tabBarIndicator,
          { left: indicatorPos, width: indicatorWidth },
        ]}
      />
    </View>
  );
};

// TabButton
export const TabButton: React.FC<TabButtonProps> = ({
  value,
  active,
  onPress,
  children,
  ...props
}) => {
  const handlePress = () => {
    onPress(value); // Call the onPress callback with the tab's value
  };
  return (
    <TouchableOpacity onPress={handlePress} {...props} style={styles.tabButton}>
      <Text size="small" color={active ? "neutralHigh" : "neutralLow"}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

// parent container
export const Tabs: React.FC<TabsProps> = ({ items, style }) => {
  const [currentTabValue, setCurrentTabValue] = useState(
    items && items.length > 0 ? items[0].label : null
  );

  const [indicatorPos] = useState(new Animated.Value(0));

  const buttonWidth = Dimensions.get("window").width / items.length;
  useEffect(() => {
    Animated.timing(indicatorPos, {
      toValue:
        buttonWidth * items.findIndex((item) => item.label === currentTabValue),
      duration: 180, // Animation duration in milliseconds
      useNativeDriver: false, // Necessary for positioning changes to be visible
    }).start();
  }, [currentTabValue, items, indicatorPos]);

  const onTabPress = useCallback((value) => {
    setCurrentTabValue(value);
  }, []);
  return (
    <View style={[styles.tabs, style]}>
      <TabBar indicatorPos={indicatorPos} indicatorWidth={buttonWidth}>
        {items.map((item, index) => (
          <TabButton
            onPress={() => onTabPress(item.label)}
            value={item.label}
            key={index}
            active={item.label === currentTabValue}
          >
            {item.label}
          </TabButton>
        ))}
      </TabBar>

      {/* content */}
      <ScrollView style={styles.tabContentContainer}>
        {items.map((item, index) => (
          <ScrollView key={index} style={{ flex: 1 }}>
            {item.label === currentTabValue && item.content}
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
};
