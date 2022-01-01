import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/pages/profile.styles';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/core';
import Toast from 'react-native-root-toast';

const Profile = () => {
  const navigation = useNavigation();
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const handleSignOut = () => {
    try {
      setIsSubmitLoading(true);
      auth.signOut().then(() => {
        navigation.replace('Login');
      });
      Toast.show('Signed out successfully!', {
        duration: Toast.durations.LONG,
        position: 50,
        backgroundColor: '#247891',
        opacity: 1,
      });
      setIsSubmitLoading(false);
    } catch (error) {
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        position: 50,
        backgroundColor: 'darkred',
        opacity: 1,
      });
      setIsSubmitLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut} disabled={isSubmitLoading}>
        <Text style={styles.signOutText}>
          {isSubmitLoading ? (
            <ActivityIndicator size="small" color="#fff" style={{ alignItems: 'center', justifyContent: 'center' }} />
          ) : (
            'Sign out'
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
