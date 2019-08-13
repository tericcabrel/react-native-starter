import React from "react";

import TextButton, { TextButtonProps } from "./TextButton";
import { BUTTON_SIZE, MARGIN_RIGHT } from "./util";

interface ButtonProps extends TextButtonProps {
  skipLabel: React.ReactNode
  isLight: boolean;
  nextLabel: string;
}

const NextButton: React.StatelessComponent<ButtonProps> = ({ nextLabel, isLight, ...rest }) => (
  <TextButton
    size={BUTTON_SIZE}
    style={{ marginRight: MARGIN_RIGHT }}
    textStyle={{
      color: isLight ? 'black' : '#fff',
      fontSize: 18,
      textTransform: 'uppercase',
      fontWeight: '600'
    }}
    {...rest}
  >
    {nextLabel}
  </TextButton>
);

export default NextButton;
