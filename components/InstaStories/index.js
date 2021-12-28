import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/stories.styles';

const Stories = () => {
  return (
    <View style={styles.stories}>
      <View style={styles.container}>
        <Text>Stories</Text>
      </View>
    </View>
  );
};

export default Stories;
