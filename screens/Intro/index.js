import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/pages/intro.styles';
import Swiper from 'react-native-swiper';
import { data } from '../../data/swiper-data';
import Svg from 'react-native-svg';

const Intro = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.intro}>
      <View style={styles.container}>
        <Swiper style={styles.swiper} dotColor="#f7f7f7" activeDotColor="turquoise" paginationStyle={{ bottom: 15 }}>
          {data.map((item, i) => (
            <View key={i} style={styles.slider}>
              <View>
                <Svg style={styles.image}>{item.image}</Svg>
              </View>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.text}</Text>
              </View>
            </View>
          ))}
        </Swiper>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonContainer1} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer2} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.login}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Intro;
