import { StyleSheet, Text, Image } from "react-native";
import Login from "./context/login";
import AboutUs from "./component/aboutUs/AboutUs";
import Profile from "./component/profile/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginContext } from "./context/context";
import { useContext } from "react";
import Navigator from "./navigator/navigator";
import Emergency from "./component/chatApp/emergency"
import LogoTitle from "./LogoTitle";
import { useNavigation } from "@react-navigation/native";

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
        <Stack.Screen name="SignIn" component={Login} options={{ headerTitle: (props) => <LogoTitle {...props} title="SignIn" /> }} />
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
