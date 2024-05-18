import * as React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { tokens, globalStyles } from "../../styles";
import { styles } from "./TextFieldStyles";

export interface TextFieldProps extends TextInputProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({
  before,
  after,
  ...props
}) => {
  const slotSize = 44;
  return (
    <View style={styles.textFieldBase}>
      <TextInput
        {...props}
        selectionColor={tokens.themeColorForegroundNeutralHigh}
        placeholderTextColor={tokens.themeColorForegroundNeutralMedium}
        style={[
          styles.textFieldInput,

          {
            paddingLeft: before ? 44 : globalStyles.space400,
            paddingRight: after
              ? slotSize + globalStyles.space300
              : globalStyles.space400,
          },
        ]}
      />
      {/* before slot if before is true */}
      {before && (
        <View style={[styles.textFieldInputSlot, { left: 0 }]}>{before}</View>
      )}
      {/* after slot if after is true */}
      {after && (
        <View style={[styles.textFieldInputSlot, { right: 0 }]}>{after}</View>
      )}
    </View>
  );
};
