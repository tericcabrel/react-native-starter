import React from "react";

import { BUTTON_SIZE, getDefaultStyle } from "./util";
import TextButton, { TextButtonProps } from "./TextButton";

interface ButtonProps extends TextButtonProps {
  skipLabel?: React.ReactNode | null;
  isLight: boolean;
}

const SkipButton: React.StatelessComponent<ButtonProps> = ({ skipLabel, isLight, ...rest }) => (
  <TextButton
    size={BUTTON_SIZE}
    style={{ alignSelf: 'flex-end', paddingRight: 16 }}
    textStyle={getDefaultStyle(isLight)}
    {...rest}
  >
    {skipLabel}
  </TextButton>
);

export default SkipButton;
