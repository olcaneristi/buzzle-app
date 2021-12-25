import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, Home, Login, SignUp } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen options={{ title: 'Create Account' }} name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={{ title: 'Forgot Password' }}
          name="ForgotPassword"
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
