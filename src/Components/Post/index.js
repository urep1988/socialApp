// @flow
import React from "react";
import { View, Image, Text } from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import { images } from "../../Constants/styles";
import styles from "./styles";

const Post = ({
  post: {
    image, likeCount, commentCount, author, id,
  },
  onSwipeLeft,
  onSwipeRight,
}) => {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  return (
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
      <GestureRecognizer
        onSwipeLeft={() => onSwipeLeft(id)}
        onSwipeRight={() => onSwipeRight(id)}
        config={config}
      >
        <Image
          style={styles.image}
          source={image}
        />
      </GestureRecognizer>
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
          {`${likeCount} ${likeCount > 1 ? 'likes' : 'like'}`}
        </Text>
      ) : null}
      {commentCount ? (
        <Text style={styles.comment}>
          {`View ${commentCount} ${commentCount > 1 ? 'comments' : 'comment'}`}
        </Text>
      ) : null}
    </View>
  );
};

export default Post;
