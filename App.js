import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginProvider from "./src/context/context";
import Login from './src/context/login';
import ChatApp from './src/component/chatApp/chatApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LoginProvider>
    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen
          name="Home"
          component={ChatApp}
          options={{ title: 'Welcome' }}
        />
<Stack.Screen name="Login" component={Login} />
   </Stack.Navigator>
   </NavigationContainer>
   </LoginProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});