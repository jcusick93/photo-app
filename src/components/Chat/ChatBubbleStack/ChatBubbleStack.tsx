import * as React from "react";
import { View } from "react-native";
import { tokens } from "../../../tokens/tokens";

export interface ChatBubbleProps {
  children?: React.ReactNode;
}

export const ChatBubbleStack: React.FC<ChatBubbleProps> = ({ children }) => {
  return <View>{children}</View>;
};
