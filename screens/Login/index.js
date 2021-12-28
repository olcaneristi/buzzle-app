import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { allValidations } from '../../utils/validations';
import { loginStyles } from '../../styles/pages/login.styles';

const Login = ({ navigation }) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [avoidEnabled, setAvoidEnabled] = useState(false);

  const togglePassword = () => {
    setIsSecureEntry(prev => !prev);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: '',
    password: '',
  });
  const onSubmit = data => {
    try {
      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={loginStyles.login}>
      <View style={loginStyles.container}>
        <View style={loginStyles.main}>
          <KeyboardAvoidingView behavior="position" enabled={avoidEnabled}>
            <View style={loginStyles.textContainer}>
              <Text style={loginStyles.header}>Let's sign you in.</Text>
              <Text style={loginStyles.label}>Welcome back.</Text>
              <Text style={loginStyles.label}>You've been missed!</Text>
            </View>
            <ScrollView style={loginStyles.forms}>
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
              <TouchableOpacity
                style={loginStyles.forgotPassword}
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <Text style={loginStyles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>

        <View style={loginStyles.cta}>
          <View style={loginStyles.registerContainer}>
            <Text style={loginStyles.registerText}>Don't have an account? </Text>
            <TouchableOpacity style={loginStyles.registerButton} onPress={() => navigation.navigate('SignUp')}>
              <Text style={loginStyles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={loginStyles.submitButton} onPress={handleSubmit(onSubmit)}>
            <Text style={loginStyles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
