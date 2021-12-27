import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    width: '100%',
  },

  container: {
    width: '90%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  main: {
    width: '100%',
  },

  textContainer: {
    marginTop: 25,
  },

  header: {
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
    marginBottom: 15,
    letterSpacing: 0.7,
  },

  label: {
    marginBottom: 10,
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
    letterSpacing: 0.6,
  },

  forms: {
    paddingVertical: '10%',
  },

  input: {
    borderWidth: 1,
    borderColor: '#606060',
    borderRadius: 10,
    height: 60,
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#0a0a0a',
    color: 'white',
    fontSize: 16,
  },

  passwordField: {
    position: 'relative',
  },

  password: {
    paddingRight: 45,
  },

  showIcon: {
    position: 'absolute',
    bottom: 30,
    right: 15,
  },

  error: {
    color: '#f0b4b4',
    fontSize: 13,
    paddingHorizontal: 5,
    letterSpacing: 0.6,
    marginBottom: 5,
  },

  forgotPassword: {
    marginLeft: 'auto',
  },
  forgotPasswordText: {
    fontSize: 15,
    color: '#fff',
  },

  cta: {
    width: '100%',
  },

  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  registerText: {
    color: 'gray',
    marginRight: 5,
    fontSize: 16,
  },

  registerButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  signInButton: {
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },

  signInText: {
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
});

export const registerStyles = StyleSheet.create({
  registerText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
});
