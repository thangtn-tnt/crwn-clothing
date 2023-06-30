import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted"
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPES_CLASSES.base]: BaseButton
  }[buttonType]);

export default function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}
