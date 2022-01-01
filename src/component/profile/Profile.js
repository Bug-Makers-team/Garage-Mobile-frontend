import React from 'react'
import { View, Text } from 'react-native'
import NavBar from "../navbar/navBar"

export default function Profile({navigation}) {
    return (
        <>
        {/* <NavBar navigation={navigation}/> */}
        <View style={{justifyContent:'center',  alignItems: 'center', top: 200}}>
            <Text>Profile Page</Text>
        </View>
        </>
    )
}
