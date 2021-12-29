import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { allValidations } from '../../utils/validations';
import { loginStyles, registerStyles } from '../../styles/pages/login.styles';
import { auth } from '../../firebase';
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/core';

const SignUp = () => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [avoidEnabled, setAvoidEnabled] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const togglePassword = () => {
    setIsSecureEntry(prev => !prev);
  };

  const password1 = useRef({});
  password1.current = watch('password', '');

  const onSubmit = async ({ email, password }) => {
    try {
      setIsSubmitLoading(true);
      await auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with', user.email);
      });
      Toast.show('Signed up successfully!', {
        duration: Toast.durations.LONG,
        position: 50,
        backgroundColor: '#247891',
        opacity: 1,
      });
      setTimeout(() => {
        navigation.replace('Home');
        setIsSubmitLoading(false);
      }, 2000);
    } catch (error) {
      setIsSubmitLoading(false);
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        position: 50,
        backgroundColor: 'darkred',
        opacity: 1,
      });
    }
  };

  return (
    <SafeAreaView style={loginStyles.login}>
      <View style={loginStyles.container}>
        <View style={loginStyles.main}>
          <KeyboardAvoidingView behavior="position" enabled={avoidEnabled}>
            <View style={loginStyles.textContainer}>
              <Text style={registerStyles.registerText}>Create an Account</Text>
            </View>
            <ScrollView style={[loginStyles.forms, registerStyles.forms]}>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: allValidations.REQUIRED,
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    autoCapitalize="none"
                    style={loginStyles.input}
                    placeholder="Full name"
                    placeholderTextColor={'rgba(213, 214, 240, 0.7)'}
                    onBlur={onBlur}
                    value={value}
                    onFocus={() => setAvoidEnabled()}
                    onChangeText={onChange}
                  />
                )}
                name="name"
              />
              {errors.name && <Text style={loginStyles.error}>{errors?.name?.message}</Text>}

              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: allValidations.REQUIRED,
                  },
                  pattern: allValidations.CHECK_VALIDITY_OF_EMAIL,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    autoCapitalize="none"
                    style={loginStyles.input}
                    placeholder="Email or username"
                    placeholderTextColor={'rgba(213, 214, 240, 0.7)'}
                    onBlur={onBlur}
                    value={value}
                    onFocus={() => setAvoidEnabled()}
                    onChangeText={onChange}
                  />
                )}
                name="email"
              />
              {errors.email && <Text style={loginStyles.error}>{errors?.email?.message}</Text>}

              <View style={loginStyles.passwordField}>
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: allValidations.REQUIRED,
                    },
                    minLength: allValidations.MIN_LENGTH_PASSWORD(8),
                    pattern: allValidations.CHECK_PASSWORD,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      secureTextEntry={isSecureEntry}
                      autoCapitalize="none"
                      style={[loginStyles.input, loginStyles.password]}
                      placeholder="Password"
                      placeholderTextColor={'rgba(213, 214, 240, 0.7)'}
                      onBlur={onBlur}
                      onFocus={() => setAvoidEnabled()}
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                  name="password"
                />
                <TouchableOpacity style={loginStyles.showIcon} onPress={togglePassword}>
                  {isSecureEntry ? (
                    <Image source={require('../../assets/Show.png')} />
                  ) : (
                    <Image source={require('../../assets/Hide.png')} />
                  )}
                </TouchableOpacity>
              </View>
              {errors.password && <Text style={loginStyles.error}>{errors?.password?.message}</Text>}

              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: allValidations.REQUIRED,
                  },
                  validate: value => value === password1.current || 'The passwords do not match',
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={loginStyles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor={'rgba(213, 214, 240, 0.7)'}
                    onBlur={onBlur}
                    onFocus={() => setAvoidEnabled()}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
                name="confirmPassword"
              />
              {errors.confirmPassword && <Text style={loginStyles.error}>{errors?.confirmPassword?.message}</Text>}
            </ScrollView>
          </KeyboardAvoidingView>
        </View>

        <View style={loginStyles.cta}>
          <View style={loginStyles.registerContainer}>
            <Text style={loginStyles.registerText}>Already have an account? </Text>
            <TouchableOpacity style={loginStyles.registerButton} onPress={() => navigation.navigate('Login')}>
              <Text style={loginStyles.registerButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={loginStyles.submitButton} onPress={handleSubmit(onSubmit)}>
            <Text style={loginStyles.signInText}>
              {isSubmitLoading ? (
                <ActivityIndicator
                  size="small"
                  color="#181b27"
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                />
              ) : (
                'Sign Up'
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
