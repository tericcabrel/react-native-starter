import React from 'react';
import { Input as NativeInput } from 'react-native-elements';

import { IInputProps } from '../../utils/types';
import colors from '../../styles/colors';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    borderWidth: 1
  },
  inputContainerStyle: {
    backgroundColor: colors.white,
    padding: 4,
    borderWidth: 0,
    borderBottomWidth: 0,
  },
});

const Input: React.StatelessComponent<IInputProps> = ({
                                                        label, value, errorMessage, secureText, onChangeText, hasError,
  placeholder, leftIcon, rightIcon
                                                      }) => {
  return (
    <NativeInput
      containerStyle={styles.containerStyle}
      inputContainerStyle={[styles.inputContainerStyle, hasError ? { borderColor: colors.brand.failure } : {}]}
      label={label}
      labelStyle={{ fontWeight: '300', marginBottom: 10, color: colors.dark }}
      errorStyle={{ color: colors.brand.failure, marginBottom: 15 }}
      errorMessage={errorMessage}
      secureTextEntry={secureText}
      onChangeText={onChangeText}
      value={value}
      placeholder={ placeholder? placeholder : ''}
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
