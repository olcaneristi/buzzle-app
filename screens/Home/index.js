import React, { useState, useCallback } from 'react';
import { ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import { Header, InstaStories, Posts } from '../../components';
import { postList } from '../../data/home-data';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const Home = () => {
  const [refreshTimeline, setRefreshTimeline] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshTimeline(true);
    wait(2000).then(() => setRefreshTimeline(false));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? 50 : 0 }}>
      <Header />
      <ScrollView refreshControl={<RefreshControl refreshing={refreshTimeline} onRefresh={onRefresh} />}>
        <InstaStories />
        {postList && postList.map(post => <Posts key={post.id} post={post} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
