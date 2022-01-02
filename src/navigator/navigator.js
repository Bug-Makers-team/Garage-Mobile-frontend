import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { LoginContext } from '../context/context';
import Emergency from '../component/chatApp/emergency';
import Home from '../component/home/Home';
import Profile from '../component/profile/Profile';
import ChatApp from '../component/chatApp/chatApp';
import LogoTitle from '../LogoTitle';

export default function Navigator({navigation}) {
    const state = useContext(LoginContext);
    const Tab = createBottomTabNavigator();
    return (
        <>
        {/* <NavBar navigation={navigation}/> */}
        <Tab.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: "#dddada",
          },
            tabBarShowLabel: false,
            headerRight: () => (
                <>
                  {!state.LoggedIn ? (
                    <Text
                      onPress={() => navigation.navigate("SignIn")}
                      style={{
                        padding: 7,
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
                      padding: 7,
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
      <Tab.Screen  name="Home" component={Home} options={{
        headerTitle: (props) => <LogoTitle {...props} title="Home" />,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: 10,
            }}
          >
            <Image
              source={require("../../assets/icons/profile.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "red" : "black",
              }}
            />
            <Text style={{ color: focused ? "red" : "black" }}>HOME</Text>
          </View>
        ),
      }} />
      <Tab.Screen name="Emergency" component={Emergency} options={{
        headerTitle: (props) => <LogoTitle {...props} title="Emergency" /> ,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: 10,
            }}
          >
            <Image
              source={require("../../assets/icons/emergency.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "red" : "black",
              }}
            />
            <Text style={{ color: focused ? "red" : "black" }}>Emergency</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name="Customer Service" component={ChatApp} options={{
        headerTitle: (props) => <LogoTitle {...props} title="Customer Service" />,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: 10,
            }}
          >
            <Image
              source={require("../../assets/icons/chat.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "red" : "black",
              }}
            />
            <Text style={{ color: focused ? "red" : "black" }}>Assistance</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        headerTitle: (props) => <LogoTitle {...props} title="Profile" />,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: 10,
            }}
          >
            <Image
              source={require("../../assets/icons/profile.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "red" : "black",
              }}
            />
            <Text style={{ color: focused ? "red" : "black" }}>PROFILE</Text>
          </View>
        ),
      }}/>
    </Tab.Navigator>
        {/* <View style={{justifyContent:'center',  alignItems: 'center', top: 200}}>
            <Text>Home Page</Text>
        </View> */}
        </>
    )
}

