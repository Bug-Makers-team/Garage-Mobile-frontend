import * as React from 'react';
import { Button } from 'react-native';
import { Appbar, Avatar, DefaultTheme } from 'react-native-paper';
import { LoginContext } from '../../context/context';

const context = React.useContext(LoginContext)
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
      <Avatar.Image theme={theme} size={50} source={require('../../../assets/icons/home.png')} />
      <Appbar.Content title="Garage Mobile" />
    { context.LoggedIn ? // logged in state from context
      <Button title="logout" />:
      <Button title="Sign in" /> // button take you to sign in form
     } 
    </Appbar.Header>
  );
};

export default Header;