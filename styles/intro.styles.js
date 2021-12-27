import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  intro: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  slider: {
    flex: 1,
    flexDirection: 'column',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginBottom: 10,
  },

  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 36,
    textAlign: 'center',
    letterSpacing: 1.1,
    marginBottom: 20,
    marginTop: 30,
    lineHeight: 45,
  },

  description: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 32,
    lineHeight: 24,
  },

  buttons: {
    backgroundColor: '#363333',
    borderRadius: 15,
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonContainer1: {
    width: '50%',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 15,
  },
  buttonContainer2: {
    width: '50%',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  register: {
    width: '100%',
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 17,
  },
  login: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
  },
});
