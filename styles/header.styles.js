import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 17,
  },
  brand: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  actions: {
    flexDirection: 'row',
    height: 24,
  },
  items: {
    marginHorizontal: 11,
  },
  directs: {
    marginRight: 0,
  },
});
