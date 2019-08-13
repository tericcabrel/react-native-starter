import React from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  StatusBar,
  SafeAreaView,
  ViewStyle,
  TextStyle,
  FlatListProps,
  View,
  StyleSheet
} from "react-native";
import tinycolor from "tinycolor2";

import Page from "./Page";
import Pagination from "./Pagination";
import Dot from "./Dot";
import SkipButton from "./buttons/SkipButton";
import NextButton from "./buttons/NextButton";
import DoneButton from "./buttons/DoneButton";
import { BUTTON_SIZE } from "./buttons/util";

const itemVisibleHotfix = { itemVisiblePercentThreshold: 100 };

interface PageItem {
  backgroundColor: string | any;
  image: React.ReactElement;
  title: React.ReactElement | string;
  subtitle: React.ReactElement | string;
  titleStyles?: TextStyle
  subTitleStyles?: TextStyle
}

interface OnboardingProps {
  pages: PageItem[];
  bottomBarHighlight?: boolean;
  bottomBarHeight?: number;
  bottomBarColor?: string;
  controlStatusBar?: boolean;
  showSkip?: boolean;
  showNext?: boolean;
  showDone?: boolean;
  showPagination?: boolean;
  onSkip?: () => void
  onDone?: () => void
  skipLabel?: React.ReactElement | string;
  nextLabel?: React.ReactElement | string;
  doneButtonBackgroundColor?: string; 
  DoneButtonComponent?: () => void | React.ReactElement;
  NextButtonComponent?: () => void | React.ReactElement;
  DotComponent?: () => void | React.ReactElement;
  containerStyle?: ViewStyle;
  imageContainerStyle?: ViewStyle;
  allowFontScalingText?: boolean;
  allowFontScalingButtons?: boolean;
  titleStyles?: TextStyle;
  subTitleStyles?: TextStyle;
  transitionAnimationDuration?: number;
  skipToPage?: number | null;
  pageIndexCallback?: (index: number) => void;
  flatlistProps?: FlatListProps<any>
}

interface OnboardingState {
  currentPage: number;
  previousPage: null | number;
  width: null | number;
  height: null | number;
  backgroundColorAnim: Animated.Value
}

class Onboarding extends React.Component<OnboardingProps, OnboardingState> {
  flatList: any;

  static defaultProps = {
    bottomBarHighlight: false,
    bottomBarHeight: 60,
    bottomBarColor: 'transparent',
    controlStatusBar: false,
    showPagination: true,
    showSkip: true,
    showNext: true,
    showDone: true,
    skipLabel: 'Skip',
    nextLabel: 'Next',
    onSkip: null,
    onDone: null,
    doneButtonBackgroundColor: 'black',
    DoneButtonComponent: DoneButton,
    NextButtonComponent: NextButton,
    DotComponent: Dot,
    containerStyle: {},
    imageContainerStyle: {},
    allowFontScalingText: true,
    allowFontScalingButtons: true,
    titleStyles: null,
    subTitleStyles: null,
    transitionAnimationDuration: 500,
    skipToPage: null,
    pageIndexCallback: null
  }

  constructor(props: OnboardingProps) {
    super(props);

    this.state = {
      currentPage: 0,
      previousPage: null,
      width: null,
      height: null,
      backgroundColorAnim: new Animated.Value(0)
    };
  }

  componentDidUpdate() {
    Animated.timing(this.state.backgroundColorAnim, {
      toValue: 1,
      duration: this.props.transitionAnimationDuration,
    }).start();
  }

  onSwipePageChange = ({ viewableItems }: { viewableItems: any }) => {
    if (!viewableItems[0] || this.state.currentPage === viewableItems[0].index)
      return;

    this.setState(state => {
      this.props.pageIndexCallback &&
        this.props.pageIndexCallback(viewableItems[0].index);
      return {
        previousPage: state.currentPage,
        currentPage: viewableItems[0].index,
        backgroundColorAnim: new Animated.Value(0),
      };
    });
  };

  goNext = () => {
    this.flatList.scrollToIndex({
      animated: true,
      index: this.state.currentPage + 1
    });
  };

  _onLayout = () => {
    const { width, height } = Dimensions.get('window');
    this.setState({ width, height });
  };

  keyExtractor = (item: PageItem, index: number) => index.toString();

  renderItem = ({ item }: { item: PageItem }) => {
    const { image, title, subtitle, backgroundColor } = item;
    const isLight = tinycolor(backgroundColor).getBrightness() > 180;
    const {
      containerStyle,
      imageContainerStyle,
      allowFontScalingText,
      titleStyles,
      subTitleStyles,
    } = this.props;

    return (
      <Page
        isLight={isLight}
        image={image}
        title={title}
        subtitle={subtitle}
        width={this.state.width || Dimensions.get('window').width}
        height={this.state.height || Dimensions.get('window').height}
        containerStyle={containerStyle}
        imageContainerStyle={imageContainerStyle}
        allowFontScaling={allowFontScalingText}
        titleStyles={Object.assign(
          {},
          titleStyles || {},
          item.titleStyles || {}
        )}
        subTitleStyles={Object.assign(
          {},
          subTitleStyles || {},
          item.subTitleStyles || {}
        )}
      />
    );
  };

  render() {
    const {
      pages,
      bottomBarHeight,
      bottomBarColor,
      controlStatusBar,
      showSkip,
      showNext,
      showDone,
      showPagination,
      onSkip,
      onDone,
      skipLabel,
      nextLabel,
      allowFontScalingButtons,
      DoneButtonComponent,
      NextButtonComponent,
      DotComponent,
      flatlistProps,
      skipToPage,
      doneButtonBackgroundColor
    } = this.props;
    const currentPage = pages[this.state.currentPage];
    const currentBackgroundColor = currentPage.backgroundColor;
    const isLight = tinycolor(currentBackgroundColor).getBrightness() > 180;
    const barStyle = isLight ? 'dark-content' : 'light-content';
    const bottomBarHighlight = this.props.bottomBarHighlight;

    let backgroundColor = currentBackgroundColor;
    if (
      this.state.previousPage !== null &&
      pages[this.state.previousPage] !== undefined
    ) {
      const previousBackgroundColor =
        pages[this.state.previousPage].backgroundColor;
      backgroundColor = this.state.backgroundColorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [previousBackgroundColor, currentBackgroundColor],
      });
    }

    const skipFun =
      skipToPage != null
        ? () => {
            this.flatList.scrollToIndex({
              animated: true,
              index: skipToPage,
            });
          }
        : onSkip;

    const isLastPage = this.state.currentPage + 1 === pages.length;
    const SkipButtonFinal = showSkip &&
      !isLastPage && (
        <SkipButton
          size={BUTTON_SIZE}
          isLight={isLight}
          skipLabel={skipLabel}
          allowFontScaling={allowFontScalingButtons}
          onPress={() => {
            if (typeof onSkip === 'function') {
              if (controlStatusBar) {
                StatusBar.setBarStyle('default', true);
              }
              skipFun();
            }
          }}
        >{}</SkipButton>
      );
    
    const fakeElement = isLastPage && (
      <View style={{ height: 22, backgroundColor: 'white', marginTop: 10 }} />
    );

    return (
      <Animated.View
        onLayout={this._onLayout}
        style={{ flex: 1, backgroundColor, justifyContent: 'center' }}
      >
        <SafeAreaView>
          <View>{SkipButtonFinal}</View>
          {fakeElement}
        </SafeAreaView>
        {controlStatusBar && <StatusBar barStyle={barStyle} />}
        <FlatList
          ref={list => {
            this.flatList = list;
          }}
          data={pages}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          onViewableItemsChanged={this.onSwipePageChange}
          viewabilityConfig={itemVisibleHotfix}
          initialNumToRender={1}
          extraData={
            this.state.width // ensure that the list re-renders on orientation change
          }
          {...flatlistProps}
        />
        {showPagination && (
          <SafeAreaView style={[bottomBarHighlight ? styles.overlay : { backgroundColor: isLastPage ? doneButtonBackgroundColor : 'transparent' }]}>
            <Pagination
              isLight={isLight}
              bottomBarHeight={bottomBarHeight}
              bottomBarColor={bottomBarColor}
              showNext={showNext}
              showDone={showDone}
              numPages={pages.length}
              currentPage={this.state.currentPage}
              controlStatusBar={controlStatusBar}
              onDone={onDone}
              onNext={this.goNext}
              nextLabel={nextLabel}
              allowFontScaling={allowFontScalingButtons}
              DoneButtonComponent={DoneButtonComponent}
              NextButtonComponent={NextButtonComponent}
              DotComponent={DotComponent}
            />
          </SafeAreaView>
        )}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }
});

export default Onboarding;
