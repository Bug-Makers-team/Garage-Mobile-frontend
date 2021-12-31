import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginProvider from "./context/context";
import Login from "./context/login";
import ChatApp from "./component/chatApp/chatApp";
import Home from "./component/home/Home";
import AboutUs from "./component/aboutUs/AboutUs";
import Profile from "./component/profile/Profile";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./component/navbar/tabs";
import { When } from "react-if";
import { LoginContext } from "./context/context";
import { useContext } from "react";
import { Button } from "react-native-paper";
import SignFunction from "./functions/SignFunction";
const Stack = createNativeStackNavigator();

export default function Main() {
  const state = useContext(LoginContext);

  const navigation = useNavigation();

  return (
    <>
      {/* <NavBar/> */}
      {/* <NavigationContainer> */}
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
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="SignIn" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Emergency" component={ChatApp} />
      </Stack.Navigator>
      {/* </NavigationContainer> */}
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
