import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutButton: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    backgroundColor: 'darkblue',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  signOutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
});
