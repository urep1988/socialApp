import { StyleSheet } from 'react-native';

import { colors, screen, distances } from "../../Constants/styles";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: screen.width / 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
