import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import moment from 'moment';
import 'moment/locale/en-gb';
import { styles } from '../../styles/post.styles';
import Options from '../../assets/icons/Options';
import Like from '../../assets/icons/Like';
import Comment from '../../assets/icons/Comment';
import Message from '../../assets/icons/Message';
import Bookmark from '../../assets/icons/Bookmark';
import BookmarkFill from '../../assets/icons/BookmarkFill';
import LikeFill from '../../assets/icons/LikeFill';

const Posts = ({ post }) => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(post.isBookmarked);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [state, setState] = useState({
    width: 0,
    height: 0,
  });

  const { width, height } = state;

  useEffect(() => {
    Image.getSize(post.image, (w, h) => {
      const screenWidth = Dimensions.get('window').width;
      const scaleFactor = w / screenWidth;
      const imageHeight = h / scaleFactor;

      setState(s => ({
        ...s,
        width: screenWidth,
        height: imageHeight,
      }));
    });
  }, []);

  const convertRelativeTime = date => {
    return moment(date).fromNow();
  };

  const toggleLike = () => {
    setLike(prev => !prev);
    setLikeCount(prevCount => (like ? prevCount - 1 : prevCount + 1));
  };

  const toggleBookmark = () => {
    setBookmark(prev => !prev);
  };

  return (
    <View style={styles.post}>
      <View style={styles.heading}>
        <View style={styles.userContainer}>
          <Image style={styles.miniPicture} source={post.user.profilePicture} />
          <Text style={styles.username}>{post.user.username}</Text>
        </View>
        <TouchableOpacity>
          <Options />
        </TouchableOpacity>
      </View>

      <Image style={{ ...styles.image, width, height }} source={{ uri: post.image }} />

      <View style={styles.content}>
        <View style={styles.interactions}>
          <View style={styles.leftInteractions}>
            <TouchableOpacity onPress={toggleLike} style={[styles.items, styles.like]}>
              {like ? <LikeFill /> : <Like />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
              <Comment />
            </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
              <Message />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={toggleBookmark} style={[styles.items, styles.bookmark]}>
              {bookmark ? <BookmarkFill /> : <Bookmark />}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.likes}>
          <Text style={styles.likesCount}>{likeCount} likes</Text>
        </View>

        <View style={styles.description}>
          <Text numberOfLines={3}>
            <Text onPress={() => console.log(post.user.username)} style={styles.postUsername}>
              {post.user.username}
              <Text style={styles.postDescription}>{post.description}</Text>
            </Text>
          </Text>
        </View>

        <TouchableOpacity style={{ marginTop: 7 }}>
          <Text style={styles.comments}>View all {post.comments} comments</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 7, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.time}>{convertRelativeTime(post.date)} </Text>
          <Text style={styles.translate}>See Translation</Text>
        </View>
      </View>
    </View>
  );
};

export default Posts;
