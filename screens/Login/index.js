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
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { allValidations } from '../../utils/validations';
import { styles } from '../../styles/login.styles';

const Login = ({ navigation }) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [avoidEnabled, setAvoidEnabled] = useState(false);

  const togglePassword = () => {
    setIsSecureEntry(prev => !prev);
  };

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data, e) => {
    try {
      e.preventDefault();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.login}>
      <DismissKeyboard>
        <View style={styles.container}>
          <View style={styles.main}>
            <View style={styles.textContainer}>
              <Text style={styles.header}>Let's sign you in.</Text>
              <Text style={styles.label}>Welcome back.</Text>
              <Text style={styles.label}>You've been missed!</Text>
            </View>
            <KeyboardAvoidingView behavior="position" enabled={avoidEnabled}>
              <ScrollView style={styles.forms}>
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
                      style={styles.input}
                      placeholder="Email or username"
                      placeholderTextColor={'gray'}
                      onBlur={onBlur}
                      value={value}
                      onFocus={() => setAvoidEnabled()}
                      onChangeText={onChange}
                    />
                  )}
                  name="email"
                />
                {errors.email && <Text style={styles.error}>{errors?.email?.message}</Text>}

                <View style={styles.passwordField}>
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
                        style={[styles.input, styles.password]}
                        placeholder="Password"
                        placeholderTextColor={'gray'}
                        onBlur={onBlur}
                        onFocus={() => setAvoidEnabled()}
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                    name="password"
                  />
                  <TouchableOpacity style={styles.showIcon} onPress={togglePassword}>
                    {isSecureEntry ? (
                      <Image source={require('../../assets/Show.png')} />
                    ) : (
                      <Image source={require('../../assets/Hide.png')} />
                    )}
                  </TouchableOpacity>
                </View>
                {errors.password && <Text style={styles.error}>{errors?.password?.message}</Text>}
              </ScrollView>
            </KeyboardAvoidingView>
          </View>

          <View style={styles.cta}>
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Don't have an account? </Text>
              <TouchableOpacity
                style={styles.registerButton}
                title="Register"
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signInButton} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default Login;
