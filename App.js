import { StyleSheet } from 'react-native';
import Header from './src/component/header/header';
import Tabs from './src/component/navbar/tabs';
import LoginProvider from "./src/context/context";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <LoginProvider>
    <NavigationContainer>
      <Header/>
    <Tabs/>
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
