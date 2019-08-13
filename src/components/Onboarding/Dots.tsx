import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import { MARGIN_LEFT } from './buttons/util';

interface DotsProps {
  isLight: boolean;
  numPages: number;
  currentPage: number;
  Dot: any;
  style?: ViewStyle;
}

const Dots: React.StatelessComponent<DotsProps> = ({ isLight, numPages, currentPage, Dot, style }) => (
  <View style={[styles.container, style]}>
    {[...Array(numPages)].map((_, index) => (
      <Dot key={index} selected={index === currentPage} isLight={isLight} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: MARGIN_LEFT
  }
});

export default Dots;
