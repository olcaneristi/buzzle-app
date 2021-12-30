import { NavigationContainer } from '@react-navigation/native';
import 'react-native-get-random-values';
import { RootSiblingParent } from 'react-native-root-siblings';
import { LogBox } from 'react-native';
import StackScreen from './navigations/StackScreen';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </RootSiblingParent>
  );
}
