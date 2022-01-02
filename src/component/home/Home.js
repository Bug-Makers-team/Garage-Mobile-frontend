import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../../context/login';
import AddServices from '../addservices/AddServices';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import NavBar from "../navbar/navBar";
import { LoginContext } from '../../context/context';
import ChatApp from '../chatApp/emergency';


export default function Home({navigation}) {
    const state = useContext(LoginContext);
    const Tab = createBottomTabNavigator();
    return (
        <>
        {/* <NavBar navigation={navigation}/> */}

        <View style={{justifyContent:'center',  alignItems: 'center', top: 200}}>
            <Text>Home Page</Text>
        </View>
        </>
    )
}
