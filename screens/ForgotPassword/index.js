import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { loginStyles, forgotPassStyles } from '../../styles/pages/login.styles';
import { useForm, Controller } from 'react-hook-form';
import { allValidations } from '../../utils/validations';

const ForgotPassword = () => {
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
      console.log(data);
    } catch (error) {
      console.log(error);
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
            <TouchableOpacity style={forgotPassStyles.resetButton} onPress={handleSubmit(onSubmit)}>
              <Text style={forgotPassStyles.resetButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
