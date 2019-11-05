import { StyleSheet } from 'react-native';

import { colors, distances, screen } from "../../Constants/styles";

export default StyleSheet.create({
  container: {
    paddingHorizontal: distances.small,
  },
  name: {
    color: colors.name,
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "center",
  },
  image: {
    width: screen.width / 5,
    height: screen.width / 5,
    borderColor: colors.border,
    borderRadius: 5,
    borderWidth: 2,
  }
});
