import React from 'react'
import { View, Text } from 'react-native';
import Locationuser  from "../location/Location"
export default function Home() {
    return (
        <>
        <View style={{justifyContent:'center',  alignItems: 'center', top: 200}}>
            <Text>Home Page</Text>
         
        </View>
          <Locationuser />
           </>
    )
}
