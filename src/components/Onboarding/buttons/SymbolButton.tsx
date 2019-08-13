import React from "react";
import {
  View, 
  TouchableOpacity, 
  Text, 
  TextStyle, 
  ViewStyle 
} from "react-native";

interface SymbolButtonProps {
  size: number;
  onPress: () => void;
  textStyle?: TextStyle
  style?: ViewStyle
  children: React.ReactNode
}

const SymbolButton: React.StatelessComponent<SymbolButtonProps> = ({ size, onPress, style, textStyle, children }) => (
  <View
    style={{
      height: size,
      width: size,
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    }}
  >
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
      hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
    >
      <Text allowFontScaling={false} style={{ textAlign: 'center', fontSize: size / 1.7, ...textStyle }}>
        {children}
      </Text>
    </TouchableOpacity>
  </View>
);

SymbolButton.defaultProps = {
  style: {},
  textStyle: {},
};

export default SymbolButton;
