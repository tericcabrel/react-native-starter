import React from 'react';
import { View } from 'react-native';

interface DotProps {
  isLight: boolean;
  selected: boolean
}

const Dot: React.StatelessComponent<DotProps> = ({ isLight, selected }) => {
  let backgroundColor: string;
  let height: number
  let width: number

  if (isLight) {
    backgroundColor = selected ? 'black' : 'rgba(0, 0, 0, 0.5)';
    height = selected ? 10 : 6
    width = selected ? 10 : 6
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    height = selected ? 10 : 6
    width = selected ? 10 : 6
  }

  return (
    <View
      style={{
        ...styles.dot,
        backgroundColor,
        height,
        width,
        borderRadius: height / 2,
      }}
    />
  );
};

const styles = {
  dot: {
    marginHorizontal: 3
  }
};

export default Dot;
