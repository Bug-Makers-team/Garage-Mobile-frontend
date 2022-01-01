import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../../context/login';
import AddServices from '../addservices/AddServices';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import NavBar from "../navbar/navBar"

export default function Home({navigation}) {
    const Tab = createBottomTabNavigator();
    return (
        <>
        {/* <NavBar navigation={navigation}/> */}
        {/* <Tab.Navigator>
      <Tab.Screen name="AddServices" component={AddServices} />
      <Tab.Screen name="login" component={login} />
    </Tab.Navigator> */}
        <View style={{justifyContent:'center',  alignItems: 'center', top: 200}}>
            <Text>Home Page</Text>
        </View>
        </>
    )
}
