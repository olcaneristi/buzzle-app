import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const Login = ({ navigation }) => {
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
    <View style={styles.container}>
      <Text>Login</Text>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'This field is required.',
          },
          minLength: {
            value: 2,
            message: 'Too Many Characters',
          },
          pattern: {
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Not a valid e-mail',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="email"
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.error}>{errors?.email?.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'This field is required.',
          },
          minLength: {
            value: 6,
            message: 'Please much more',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="password"
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.error}>{errors?.password?.message}</Text>}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button title="Create account" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    width: '60%',
    marginVertical: 10,
    padding: 15,
  },
});

export default Login;
