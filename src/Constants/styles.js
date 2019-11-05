import { Dimensions } from "react-native";

export const colors = {
  darkGrey: '#121212',
  black: '#000000',
  white: '#FFFFFF',
  title: '#FAFAFA',
  name: '#999999',
  border: '#D6E3F0',
};

export const distances = {
  small: 10,
  medium: 20,
  large: 50,
  avatar: 40,
};

export const images = {
  plus: require("../Assets/Images/plus.png"),
  message: require("../Assets/Images/message.png"),
  smile: require("../Assets/Images/smile.png"),
  repost: require("../Assets/Images/repost.png"),
  message2: require("../Assets/Images/message2.png"),
};

export const screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};
