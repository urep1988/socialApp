import React, { useState } from "react";
import { FlatList, View,Text } from "react-native";

import User from "../User";
import Post from "../Post";
import { users } from "./dumpData";
import styles from "./styles";

const UserList = () => {
  const [selectedId, setId] = useState('1');
  const onPress = id => setId(id);
  const selectedUser = users.find(user => user.id === selectedId);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => <User user={item} onPress={onPress} />}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
      <FlatList
        data={selectedUser.posts}
        renderItem={({ item }) => <Post post={{ ...item, author: selectedUser }} />}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default UserList;
