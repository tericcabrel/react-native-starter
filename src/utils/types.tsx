import { TextInputProps } from "react-native";
import {InputProps} from "react-native-elements";

export type MenuItemData = {
  id: string;
  name: string;
  icon: string;
};

export type LocaleItemData = {
  id: string;
  name: string;
};

export interface IInputProps extends InputProps {
  label?: string | undefined
  value: string
  errorMessage?: string
  secureText?: boolean
  hasError?: boolean
}
