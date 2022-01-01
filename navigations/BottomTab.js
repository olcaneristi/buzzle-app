import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Reels, Search, Shop } from '../screens';
import {
  HomeIcon,
  HomeFilled,
  SearchIcon,
  SearchFilled,
  ShopIcon,
  ShopFilled,
  ReelIcon,
  ReelFilled,
} from '../assets/icons/TabIcons';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#000',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <HomeFilled fill={color} />;
            return <HomeIcon fill={'#000'} />;
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#000',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <SearchFilled fill={color} />;
            return <SearchIcon fill={'#000'} />;
          },
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#000',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <ReelFilled fill={color} />;
            return <ReelIcon fill={'#000'} />;
          },
        }}
        name="Reels"
        component={Reels}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#000',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <ShopFilled fill={color} />;
            return <ShopIcon fill={'#000'} />;
          },
        }}
        name="Shop"
        component={Shop}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ ...styles.profile, borderWidth: focused ? 1 : 0 }}
                source={require('../assets/avatar-jack.png')}
              />
            );
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  profile: {
    width: 24,
    height: 24,
    borderColor: '#000',
    borderRadius: 50,
  },
});
