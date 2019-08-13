import React, { ReactNode } from "react";
import { 
  View, 
  TouchableOpacity, 
  Text, 
  TextStyle, 
  ViewStyle 
} from "react-native";

export interface TextButtonProps {
  size: number;
  onPress: () => void;
  textStyle?: TextStyle
  allowFontScaling?: boolean
  style?: ViewStyle
  children: ReactNode
}

const TextButton: React.StatelessComponent<TextButtonProps> = ({ size, onPress, textStyle, allowFontScaling, style, children }) => (
  <View style={{ flex: 0, paddingHorizontal: 10, ...style }}>
    <TouchableOpacity
      style={{ flex: 0 }}
      onPress={onPress}
      hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
    >
      <Text allowFontScaling={allowFontScaling} style={{ fontSize: size / 2.5, ...textStyle }}>{children}</Text>
    </TouchableOpacity>
  </View>
);

TextButton.defaultProps = {
  textStyle: {},
  allowFontScaling: true,
};

export default TextButton;
