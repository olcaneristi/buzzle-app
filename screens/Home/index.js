import { useNavigation } from '@react-navigation/core';
import React, { useState, useCallback, useEffect } from 'react';
import { ScrollView, SafeAreaView, RefreshControl, View, Image } from 'react-native';
import { Header, InstaStories, Posts } from '../../components';
import { postList } from '../../data/home-data';
import { auth } from '../../firebase';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const Home = () => {
  const [refreshTimeline, setRefreshTimeline] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    return auth.onAuthStateChanged(handleUser);
  }, []);

  const handleUser = useCallback(
    loggedInUser => {
      if (!loggedInUser) {
        return navigation.replace('Login');
      }

      setUser(loggedInUser);
      setLoading(false);
    },
    [navigation],
  );

  const onRefresh = useCallback(() => {
    setRefreshTimeline(true);
    wait(2000).then(() => setRefreshTimeline(false));
  }, []);

  return (
    <>
      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#181b27' }}>
          <Image source={require('../../assets/logo.png')} />
        </View>
      ) : user ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? 50 : 0 }}>
          <Header />
          <ScrollView refreshControl={<RefreshControl refreshing={refreshTimeline} onRefresh={onRefresh} />}>
            <InstaStories />
            {postList && postList.map(post => <Posts key={post.id} post={post} />)}
          </ScrollView>
        </SafeAreaView>
      ) : (
        'asdasd'
      )}
    </>
  );
};

export default Home;
