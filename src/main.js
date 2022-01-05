import { StyleSheet, Text, Image } from "react-native";
import Login from "./context/login";
import AboutUs from "./component/aboutUs/AboutUs";
import Profile from "./component/profile/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginContext } from "./context/context";
import { useContext } from "react";
import Navigator from "./navigator/navigator";
import Emergency from "./component/chatApp/emergency";
import LogoTitle from "./LogoTitle";
import { useNavigation } from "@react-navigation/native";
import Location from "./component/location/Location"
import ChatApp from "./component/chatApp/chatApp";
import category from "./component/category/category";
import MyServises from "./component/profile/MyServises"

const Stack = createNativeStackNavigator();

export default function Main() {
  const state = useContext(LoginContext);

  const navigation = useNavigation();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FBF9F5",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <>
              {!state.LoggedIn ? (
                <Text
                  onPress={() => navigation.navigate("SignIn")}
                  style={{
                    padding: 7,
                    marginRight:5,
                    color: "#000",
                    // backgroundColor: "#ffffff",
                  }}
                >
                  Sign in{" "}
                </Text>
              ) : (
                <Text
                  onPress={() => state.logoutFunction()}
                  style={{
                    padding: 7,
                    marginRight:5,
                    color: "#000",
                    // backgroundColor: "#ffffff",
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={Login}
          options={{
            headerTitle: (props) => (
              <LogoTitle {...props} title="SignIn" />
            ),
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="ChatApp" component={ChatApp} />
        <Stack.Screen name="category" component={category} />
        <Stack.Screen name="MyServises" component={MyServises} />
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
{/* <Text style={{textAlign:'center',backgroundColor:"#f5cbaa"}} onPress={()=>navigation.navigate('AboutUs')}>AboutUs</Text> */}
