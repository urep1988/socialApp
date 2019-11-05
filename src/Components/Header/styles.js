import { StyleSheet } from 'react-native';

import { colors, distances } from "../../Constants/styles";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    height: distances.large,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: distances.medium,
  },
  title: {
    color: colors.title,
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 2,
  },
  images: {
    width: 25,
    height: 25,
  }
});
