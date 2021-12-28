import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/stories.styles';
import { data } from '../../data/home-data';
import InstaStory from 'react-native-insta-story';

const Stories = () => {
  return (
    <View style={styles.stories}>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <InstaStory data={data} duration={6} avatarSize={55} />
        </View>
      </View>
    </View>
  );
};

export default Stories;
