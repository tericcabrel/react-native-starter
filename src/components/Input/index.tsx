import React from 'react';
import { Input as NativeInput } from 'react-native-elements';

import { IInputProps } from '../../utils/types';
import colors from '../../styles/colors';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 0
  },
  inputContainerStyle: {
    backgroundColor: colors.white,
    paddingTop: 4,
    paddingBottom: 4,
    borderBottomWidth: 0,
    paddingLeft: 0
  },
});

const Input: React.StatelessComponent<IInputProps> = ({
                                                        label, value, errorMessage, secureText, onChangeText, hasError,
  placeholder, leftIcon, rightIcon, containerStyle
                                                      }) => {
  return (
    <NativeInput
      containerStyle={[styles.containerStyle, containerStyle]}
      leftIconContainerStyle={{ marginLeft: 0, marginRight: 3, width: 32}}
      rightIconContainerStyle={{ width: 32}}
      inputContainerStyle={[styles.inputContainerStyle, hasError ? { borderColor: colors.brand.failure } : {}]}
      label={label}
      labelStyle={{ fontWeight: '300', marginBottom: 10, color: colors.dark }}
      errorStyle={{ color: colors.brand.failure, marginBottom: 15 }}
      errorMessage={errorMessage}
      secureTextEntry={secureText}
      onChangeText={onChangeText}
      value={value}
      placeholder={ placeholder? placeholder : ''}
      textAlignVertical="center"
      leftIcon={ leftIcon ? leftIcon : false}
      rightIcon={ rightIcon ? rightIcon : false}
    />
  );
};

Input.defaultProps = {
  label: undefined,
  errorMessage: '',
  secureText: false
};

export default Input;
