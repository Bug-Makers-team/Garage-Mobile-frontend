import LoginProvider from "./src/context/context";
import Main from "./src/main";
import { NavigationContainer,DefaultTheme  } from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background:"white",
  },
};

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer theme={MyTheme}>
      <Main/>
      </NavigationContainer>
   </LoginProvider>
  );
}
