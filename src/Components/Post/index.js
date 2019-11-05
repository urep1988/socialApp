// @flow
import React from "react";
import { View, Image, Text } from "react-native";

import { images } from "../../Constants/styles";
import styles from "./styles";

const Post = ({
  post: {
    image, likeCount, commentCount, author,
  },
}) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Image
        style={styles.avatar}
        source={author.image}
      />
      <Text style={styles.name}>
        {`${author.name} ${author.lastName}`}
      </Text>
    </View>
    <Image
      style={styles.image}
      source={image}
    />
    <View style={styles.row}>
      <Image
        style={styles.icon}
        source={images.smile}
        resizeMode='contain'
      />
      <Image
        style={styles.icon}
        source={images.message2}
        resizeMode='contain'
      />
      <Image
        style={styles.icon}
        source={images.repost}
        resizeMode='contain'
      />
    </View>
    {likeCount ? (
      <Text style={styles.like}>
        {`${likeCount} ${likeCount > 1 ? 'comments' : 'comment'}`}
      </Text>
    ) : null}
    {commentCount ? (
      <Text style={styles.comment}>
        {`View ${commentCount} ${commentCount > 1 ? 'likes' : 'like'}`}
      </Text>
    ) : null}
  </View>
);

export default Post;
