import React from "react";
import { 
  Dimensions, 
  Text, 
  View, 
  StyleSheet, 
  ViewStyle, 
  TextStyle 
} from "react-native";

interface PageProps {
  isLight: boolean;
  image: React.ReactElement;
  containerStyle?: ViewStyle;
  imageContainerStyle?: ViewStyle;
  title: string | React.ReactElement
  subtitle: string | React.ReactElement;
  allowFontScaling?: boolean
  titleStyles?: TextStyle | null;
  subTitleStyles?: TextStyle | null;
  width: number;
  height: number;
}

const Page: React.StatelessComponent<PageProps> = ({
  isLight,
  image,
  title,
  subtitle,
  width,
  height,
  containerStyle,
  imageContainerStyle,
  allowFontScaling,
  titleStyles,
  subTitleStyles
}) => {
  let titleElement = title;
  if (typeof title === 'string' || title instanceof String) {
    titleElement = (
      <View style={styles.padding}>
        <Text allowFontScaling={allowFontScaling} style={[styles.title, isLight ? styles.titleLight : {}, titleStyles]}>
          {title}
        </Text>
      </View>
    );
  }

  let subtitleElement = subtitle;
  if (typeof subtitle === 'string' || subtitle instanceof String) {
    subtitleElement = (
      <View style={styles.subPadding}>
        <Text allowFontScaling={allowFontScaling} style={[styles.subtitle, isLight ? styles.subtitleLight : {}, subTitleStyles]}>
          {subtitle}
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, containerStyle, { width, height }]}>
      <View style={[styles.imageContainer, imageContainerStyle]}>{image}</View>
      {titleElement}
      {subtitleElement}
    </View>
  );
};

Page.defaultProps = {
  containerStyle: {},
  imageContainerStyle: {},
  allowFontScaling: true,
  titleStyles: null,
  subTitleStyles: null,
};

const { width, height } = Dimensions.get('window');
const potrait = height > width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -70
  },
  imageContainer: {
    flex: 0,
    paddingBottom: potrait ? 50 : 10,
    alignItems: 'center',
    width: '100%'
  },
  padding: {
    paddingHorizontal: 16
  },
  subPadding: {
    paddingHorizontal: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 23,
    color: '#fff',
    paddingBottom: 35
  },
  titleLight: {
    color: 'black',
    fontWeight: 'bold'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  subtitleLight: {
    color: '#B5B5B5'
  }
});

export default Page;
