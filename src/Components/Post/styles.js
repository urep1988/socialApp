import { StyleSheet } from 'react-native';

import { colors, distances, screen } from "../../Constants/styles";

export default StyleSheet.create({
  container: {
  },
  row: {
    height: distances.large,
    margin: distances.small,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: colors.border,
    fontSize: 15,
    fontWeight: 'bold',
  },
  avatar: {
    width: distances.avatar,
    height: distances.avatar,
    borderColor: colors.border,
    borderRadius: 2,
    borderWidth: 1,
    marginRight: distances.small,
  },
  image: {
    width: screen.width,
    height: screen.width,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: distances.medium,
  },
  like: {
    color: colors.border,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: distances.small,
  },
  comment: {
    color: colors.name,
    fontSize: 15,
    marginLeft: distances.small,
  },
});
