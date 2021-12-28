import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, Home, Intro, Login, SignUp } from './screens';
import 'react-native-get-random-values';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={
          Platform.OS !== 'android'
            ? {
                headerTransparent: true,
                headerBackTitleVisible: false,
                headerTintColor: '#b4bccf',
              }
            : {
                headerTintColor: 'white',
                headerStyle: {
                  backgroundColor: '#181b27',
                },
              }
        }
      >
        <Stack.Screen options={{ headerShown: false }} name="Intro" component={Intro} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen
          options={{ headerTitle: Platform.OS === 'android' ? 'Forgot Password' : '' }}
          name="ForgotPassword"
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
