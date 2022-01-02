import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';



let profile=require("../../../assets/icons/profile.png");
const MyComponent = (props) => (
  
 <Appbar style={styles.bottom}>
   <Appbar.Action
     icon={home}
     onPress={() => props.navigation.navigate('Home')}
    />
    <Appbar.Action icon={'alert-circle-outline'} onPress={() => props.navigation.navigate('Emergency')} />
    <Appbar.Action icon="account-voice" onPress={() => props.navigation.navigate('Emergency')} />
    <Appbar.Action
      icon={profile}
      onPress={() => props.navigation.navigate('Profile')}
    />
  </Appbar>
 );

export default MyComponent

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    display:'flex',
    justifyContent:'space-between',
    backgroundColor:"#e7834c"
  },
});