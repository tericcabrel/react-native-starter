import React from "react";
import { View, Text, Dimensions } from "react-native";

import PlainButton, { PlainButtonProps } from './PlainButton';

const { width } = Dimensions.get('window');

interface DoneButtonProps extends PlainButtonProps {
  isLight: boolean
  backgroundColor?: string
}

const DoneButton: React.StatelessComponent<DoneButtonProps> = ({ isLight, backgroundColor, ...rest }) => (
  <View>
    <PlainButton
      height={60}
      textStyle={{
        color: '#fff',
        fontSize: 18
      }}
      style={{ backgroundColor, width }}
      {...rest}
    >
      <Text>GET STARTED NOW</Text>
    </PlainButton>
  </View>
);
 
export default DoneButton;
