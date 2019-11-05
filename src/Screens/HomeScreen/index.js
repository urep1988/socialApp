import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";

import Header from "../../Components/Header";
import UserList from "../../Components/UserList";
import styles from "./styles";

const HomeScreen = () => (
  <>
    <SafeAreaView style={styles.safeArea} />
    <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <Header />
      <UserList />
    </View>
  </>
);

export default HomeScreen;
