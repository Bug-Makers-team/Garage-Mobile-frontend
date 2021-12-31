import { StyleSheet } from 'react-native';
import Header from './src/component/header/header';
import Navbar from './src/component/navbar/NavBar';

export default function App() {
  return (
      <>
        <Header/>
        <Navbar/>
        </>
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
