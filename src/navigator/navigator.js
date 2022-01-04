import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { LoginContext } from "../context/context";
import Emergency from "../component/chatApp/emergency";
import Profile from "../component/profile/Profile";
import ChatApp from "../component/chatApp/chatApp";
import LogoTitle from "../LogoTitle";
import Home from "../component/home/Home";

export default function Navigator({ navigation }) {
  const state = useContext(LoginContext);
  const Tab = createBottomTabNavigator();
  return (
    <>
      {/* <NavBar navigation={navigation}/> */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            // position: "relative",
            // bottom: 5,
            // left: 20,
            // right: 20,
            // elevation: 0,
            // backgroundColor: "grey",
            // borderRadius: 15,
            height: 75,
            // ...styles.shadow,
          },
          tabBarShowLabel: false,
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
                  onPress={() => state.logoutFunction()}
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
        }}
      >
        {/* <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => <LogoTitle {...props} title="Home" />,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 5,
                }}
              >
                <Image
                  source={require("../../assets/icons/home.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#ee8133" : "black",
                  }}
                />
                <Text style={{ color: focused ? "#ee8133" : "black" }}>HOME</Text>
              </View>
            ),
          }}
        /> */}
        <Tab.Screen
          name="Emergency"
          component={Emergency}
          options={{
            headerTitle: (props) => <LogoTitle {...props} title="Emergency" />,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 5,
                }}
              >
                <Image
                  source={require("../../assets/icons/emergency.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#f44336" : "black",
                  }}
                />
                <Text style={{ color: focused ? "#f44336" : "black" }}>
                  Emergency
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Customer Service"
          component={ChatApp}
          options={{
            headerTitle: (props) => (
              <LogoTitle {...props} title="Customer Service" />
            ),
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 5,
                }}
              >
                <Image
                  source={require("../../assets/icons/chat.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#ee8133" : "black",
                  }}
                />
                <Text style={{ color: focused ? "#ee8133" : "black" }}>
                  Assistance
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: (props) => <LogoTitle {...props} title="Profile" />,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 5,
                }}
              >
                <Image
                  source={require("../../assets/icons/profile.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#ee8133" : "black",
                  }}
                />
                <Text style={{ color: focused ? "#ee8133" : "black" }}>
                  PROFILE
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      {/* <View style={{justifyContent:'center',  alignItems: 'center', top: 200}}>
            <Text>Home Page</Text>
        </View> */}
    </>
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
