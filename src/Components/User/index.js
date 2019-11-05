// @flow
import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

import styles from "./styles";

const User = ({ user: { name, image, id }, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPress(id)}
  >
    <Image
      style={styles.image}
      source={image}
    />
    <Text style={styles.name}>
      {name}
    </Text>
  </TouchableOpacity>
);

export default User;
