import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

import Dots from './Dots';

interface PaginationProps {
  numPages: number;
  currentPage: number;
  isLight: boolean;
  bottomBarHeight: number;
  bottomBarColor: string;
  showNext: boolean;
  showDone: boolean;
  controlStatusBar?: boolean;
  onNext: () => void;
  onDone?: () => void;
  allowFontScaling?: boolean
  nextLabel: React.ReactNode | string;
  DoneButtonComponent: any | React.ReactElement;
  NextButtonComponent: any | React.ReactElement;
  DotComponent: any | React.ReactElement;
}

const Pagination: React.StatelessComponent<PaginationProps> = ({
  numPages,
  currentPage,
  isLight,
  bottomBarHeight,
  bottomBarColor,
  controlStatusBar,
  showNext,
  showDone,
  onNext,
  onDone,
  nextLabel,
  allowFontScaling,
  NextButtonComponent,
  DoneButtonComponent,
  DotComponent,
}) => {
  const isLastPage = currentPage + 1 === numPages;

  const NextButtonFinal = showNext &&
    !isLastPage && (
      <NextButtonComponent
        nextLabel={nextLabel}
		    allowFontScaling={allowFontScaling}
        isLight={isLight}
        onPress={onNext}
      />
    );

  const DoneButtonFinal = showDone &&
    isLastPage && (
      <DoneButtonComponent
        isLight={isLight}
		    allowFontScaling={allowFontScaling}
        onPress={() => {
          if (typeof onDone === 'function') {
            if (controlStatusBar) {
              StatusBar.setBarStyle('default', true);
            }
            onDone();
          }
        }}
      />
    );

  return (
    <View
      style={{
        height: bottomBarHeight,
        backgroundColor: bottomBarColor,
        ...styles.container,
      }}
    >
      {DoneButtonFinal}
      <Dots
        isLight={isLight}
        numPages={numPages}
        currentPage={currentPage}
        Dot={DotComponent}
        style={{ opacity: isLastPage ? 0 : 1, flexShrink: 0 }}
      />
      <View style={[styles.buttonRight, { opacity: isLastPage ? 0 : 1 }]}>
        {NextButtonFinal}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonRight: {
    width: 200,
    flexShrink: 1,
    alignItems: 'flex-end'
  }
});

export default Pagination;
