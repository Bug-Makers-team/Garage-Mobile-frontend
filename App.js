import LoginProvider from "./src/context/context";
import Main from "./src/main";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
      <Main/>
      </NavigationContainer>
   </LoginProvider>
  );
}
