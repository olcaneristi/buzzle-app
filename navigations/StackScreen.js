import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, Intro, Login, SignUp } from '../screens';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
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
      <Stack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTab} />
      <Stack.Screen
        options={{ headerTitle: Platform.OS === 'android' ? 'Forgot Password' : '' }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};
export default StackScreen;
