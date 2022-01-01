import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../context/login';
import AddServices from '../component/addservices/AddServices';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import NavBar from "../component/navbar/navBar";
import { LoginContext } from '../context/context';
import Emergency from '../component/chatApp/emergency';
import Home from '../component/home/Home';
import Profile from '../component/profile/Profile';
import ChatApp from '../component/chatApp/chatApp2';


export default function Navigator({navigation}) {
    const state = useContext(LoginContext);
    const Tab = createBottomTabNavigator();
    return (
        <>
        {/* <NavBar navigation={navigation}/> */}
        <Tab.Navigator screenOptions={{
            headerRight: () => (
                <>
                  {!state.LoggedIn ? (
                    <Text
                      onPress={() => navigation.navigate("SignIn")}
                      style={{
                        padding: 10,
                        color: "#000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      Sign in{" "}
                    </Text>
                  ) : (
                    <Text
                    onPress={()=>state.logoutFunction()}
                      style={{
                        padding: 10,
                        color: "#000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      Sign Out
                    </Text>
                  )}
                </>
              ),
        }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Emergency" component={Emergency} />
      <Tab.Screen name="Customer Service" component={ChatApp} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
        {/* <View style={{justifyContent:'center',  alignItems: 'center', top: 200}}>
            <Text>Home Page</Text>
        </View> */}
        </>
    )
}
