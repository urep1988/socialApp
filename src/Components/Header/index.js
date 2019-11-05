// @flow
import React from "react";
import { Text, View, Image } from "react-native";

import { images } from "../../Constants/styles";
import styles from "./styles";

const Header = () => (
  <View style={styles.container}>
    <Image
      style={styles.images}
      source={images.plus}
      resizeMode='contain'
    />
    <Text style={styles.title}>REAL</Text>
    <Image
      style={styles.images}
      source={images.message}
      resizeMode='contain'
    />
  </View>
);

export default Header;
