import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#181b27',
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
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
    borderColor: 'rgba(201, 202, 236, 0.4)',
    borderRadius: 10,
    height: 60,
    marginVertical: 10,
    padding: 15,
    color: 'white',
    fontSize: 16,
    letterSpacing: 1.2,
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

  submitButton: {
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

export const forgotPassStyles = StyleSheet.create({
  passwordReset: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#181b27',
  },

  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },

  header: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    marginTop: 15,
    marginBottom: 15,
  },

  cta: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  resetButton: {
    borderRadius: 15,
    backgroundColor: '#272d3d',
    paddingVertical: 20,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(86, 90, 99, 0.3)',
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
});
