import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../home/Home";
import Profile from "../profile/Profile";
import AddServices from "../addservices/AddServices";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const CustomTabButton = ({children, onPress})=>(
    <TouchableOpacity
    onPress={onPress}
    style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ... styles.shadow
    }}
    >
        <View style={{
            width:70,
            height:70,
            borderRadius: 35,
            backgroundColor: 'red'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ccc",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../../assets/icons/home.png")}
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
        }}
      />
      <Tab.Screen name="AddServices" component={AddServices} options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../../assets/icons/plus.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "black",
                }}
              />
            </View>
          ),
          tabBarButton: (props)=>(
              <CustomTabButton {...props}/>
          )
        }} />
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../../assets/icons/profile.png")}
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
        }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
