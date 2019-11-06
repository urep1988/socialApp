import React, { useState } from "react";
import { FlatList, View,Text } from "react-native";

import User from "../User";
import Post from "../Post";
import { usersData } from "./dumpData";
import styles from "./styles";

const UserList = () => {
  const [selectedId, setId] = useState('1');
  const [users, changeUsers] = useState(usersData);
  const onPress = id => setId(id);
  const selectedUser = users.find(user => user.id === selectedId);
  const onSwipeLeft = (id) => {
    const post = selectedUser.posts.find(post => post.id === id);
    post.likeCount = post.likeCount === 0 ? 0 : post.likeCount - 1;

    changeUsers([...users]);
  }

  const onSwipeRight = (id) => {
    const post = selectedUser.posts.find(post => post.id === id);
    post.likeCount = post.likeCount + 1;

    changeUsers([...users]);
  }

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
        renderItem={({ item }) => (
          <Post
            post={{ ...item, author: selectedUser }}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </>
  );
};

export default UserList;
