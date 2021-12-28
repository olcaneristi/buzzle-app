import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/header.styles';
import Svg from 'react-native-svg';
import Add from '../../assets/icons/Add';
import Like from '../../assets/icons/Like';
import DirectMessage from '../../assets/icons/DirectMessage';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.brand} source={require('../../assets/logo.png')} />
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => console.log('new post dropdown')} style={[styles.addNew, styles.items]}>
          <Svg style={styles.icons}>
            <Add />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('navigate activity')} style={[styles.activity, styles.items]}>
          <Svg>
            <Like />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('navigate dm')} style={[styles.directs, styles.items]}>
          <Svg>
            <DirectMessage />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
