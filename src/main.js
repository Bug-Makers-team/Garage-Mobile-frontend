import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginProvider from "./context/context";
import Login from "./context/login";
import ChatApp from "./component/chatApp/chatApp2";
import Home from "./component/home/Home";
import AboutUs from "./component/aboutUs/AboutUs";
import Profile from "./component/profile/Profile";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { When } from "react-if";
import { LoginContext } from "./context/context";
import { useContext } from "react";
import { Button } from "react-native-paper";
import SignFunction from "./functions/SignFunction";
import NavBar from "./component/navbar/navBar";
import Navigator from "./navigator/navigator";
import Emergency from "./component/chatApp/emergency"

const Stack = createNativeStackNavigator();

export default function Main() {
  const state = useContext(LoginContext);

  const navigation = useNavigation();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#dc9c79",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
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
        }}
      >
        <Stack.Screen
          name="Navigator"
          component={Navigator}
          options={{headerShown: false }}
        />
        <Stack.Screen name="SignIn" component={Login}  />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Emergency" component={Emergency} />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
