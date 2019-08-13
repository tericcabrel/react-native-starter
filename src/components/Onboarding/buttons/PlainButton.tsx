import React from "react";
import {
  TouchableOpacity, 
  Text, 
  TextStyle, 
  ViewStyle 
} from "react-native";

export interface PlainButtonProps {
  height: number;
  onPress: () => void;
  textStyle?: TextStyle
  style?: ViewStyle
  children: React.ReactNode
}

const PlainButton: React.StatelessComponent<PlainButtonProps> = ({ height, onPress, style, textStyle, children }) => (
  <TouchableOpacity
    style={{
      height,
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    }}
    onPress={onPress}
    activeOpacity={0.9}
  >
    <Text 
      allowFontScaling={false} 
      style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: 16, fontWeight: 'bold', ...textStyle }}
    >
      {children}
    </Text>
  </TouchableOpacity>
);

PlainButton.defaultProps = {
  style: {},
  textStyle: {},
};

export default PlainButton;
