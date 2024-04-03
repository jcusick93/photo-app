import * as React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { tokens } from "../../tokens/tokens";

export interface TextFieldProps extends TextInputProps {
  shape?: "rounded" | "circular";
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({
  shape,
  before,
  after,
  ...props
}) => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",

        width: "100%",
      }}
    >
      <TextInput
        {...props}
        selectionColor="white"
        keyboardAppearance="dark"
        placeholderTextColor={tokens.themeColorForegroundNeutralMedium}
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: tokens.themeColorBackgroundSecondary,
          overflow: "hidden",
          minHeight: 44,
          maxHeight: 120,
          fontSize: 14,
          lineHeight: 16,
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: before ? 44 : 20,
          paddingRight: after ? 56 : 20,
          borderRadius: 24,
          color: "white",
        }}
      />
      {before ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: 0,
            top: 0,
            height: 44,
            width: 44,
          }}
        >
          {before}
        </View>
      ) : null}
      {after ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",

            position: "absolute",
            right: 0,
            top: 0,
            height: 44,
            width: 44,
          }}
        >
          {after}
        </View>
      ) : null}
    </View>
  );
};
