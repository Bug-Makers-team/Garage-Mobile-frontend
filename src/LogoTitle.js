import React from 'react'
import { View, Image, Text } from 'react-native';
const logo = require("../assets/icons/logo.png")

export default function LogoTitle(props) {
    return (
      <View style={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
        <Image
          style={{ width: 100, height: 100 }}
          source={logo}
        />
        <Text style={{ fontWeight:"500"}}>|{props.title}</Text>
      </View>
      
    );
  }