import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { allValidations } from '../../utils/validations';
import { loginStyles, registerStyles } from '../../styles/login.styles';

const SignUp = ({ navigation }) => {
  const [avoidEnabled, setAvoidEnabled] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
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
                    placeholderTextColor={'gray'}
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
                    placeholderTextColor={'gray'}
                    onBlur={onBlur}
                    value={value}
                    onFocus={() => setAvoidEnabled()}
                    onChangeText={onChange}
                  />
                )}
                name="email"
              />
              {errors.email && <Text style={loginStyles.error}>{errors?.email?.message}</Text>}

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
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={loginStyles.input}
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
              {errors.password && <Text style={loginStyles.error}>{errors?.password?.message}</Text>}

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
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={loginStyles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor={'gray'}
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
          <TouchableOpacity style={loginStyles.signInButton} onPress={handleSubmit(onSubmit)}>
            <Text style={loginStyles.signInText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
