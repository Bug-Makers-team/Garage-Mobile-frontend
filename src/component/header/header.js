import * as React from 'react';
import { Button } from 'react-native';
import { Appbar, Avatar, DefaultTheme } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ccc',
    accent: 'red',
  },
};

const Header = () => {

  let _goBack = ()=>{
    
  }
  return (
    <Appbar.Header theme={theme}>
      <Appbar.BackAction onPress={_goBack} />
      <Avatar.Image theme={theme} size={50} source={require('../../../assets/icons/home.png')} />
      <Appbar.Content title="Garage Mobile" />
    { true? // logged in state from context
      <Button title="logout" />:
      <Button title="Sign in" /> // button take you to sign in form
     } 
    </Appbar.Header>
  );
};

export default Header;