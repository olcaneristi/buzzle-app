import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { loginStyles, forgotPassStyles } from '../../styles/pages/login.styles';
import { useForm, Controller } from 'react-hook-form';
import { allValidations } from '../../utils/validations';
import Toast from 'react-native-root-toast';

const ForgotPassword = ({ navigation }) => {
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit = data => {
    try {
      setIsSubmitLoading(true);
      Toast.show('New password has been sent to your email address.', {
        duration: Toast.durations.LONG,
        position: 50,
        backgroundColor: '#247891',
        opacity: 1,
      });
      setTimeout(() => {
        navigation.replace('Login');
        setIsSubmitLoading(false);
      }, 2000);
    } catch (error) {
      setIsSubmitLoading(false);
      Toast.show('This email address was not found.', {
        duration: Toast.durations.LONG,
        position: 50,
        backgroundColor: 'darkred',
        opacity: 1,
      });
    }
  };

  return (
    <SafeAreaView style={forgotPassStyles.passwordReset}>
      <View style={forgotPassStyles.container}>
        <View style={loginStyles.main}>
          <Text style={forgotPassStyles.header}>Reset Your Password</Text>

          <View style={loginStyles.forms}>
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
                  placeholder="Email"
                  placeholderTextColor={'rgba(213, 214, 240, 0.7)'}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name="email"
            />
            {errors.email && <Text style={loginStyles.error}>{errors?.email?.message}</Text>}
          </View>

          <View style={forgotPassStyles.cta}>
            <TouchableOpacity
              style={forgotPassStyles.resetButton}
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitLoading}
            >
              <Text style={forgotPassStyles.resetButtonText}>
                {isSubmitLoading ? (
                  <ActivityIndicator
                    size="small"
                    color="#ffffff"
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                  />
                ) : (
                  'Reset Password'
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
