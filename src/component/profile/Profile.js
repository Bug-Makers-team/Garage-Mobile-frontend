import { useContext } from "react";
import { LoginContext } from "../../context/context";
import MyServices from "./MyServises";
import React from "react";
import { List } from "react-native-paper";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Profile({ navigation }) {
  const state = useContext(LoginContext);

  return (
    <>
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {state.LoggedIn ? (
        <>
          <View style={styles.container}>
            <View style={styles.header}></View>
            {state.user.geneder==='male'?(
            <Image
              style={styles.avatar}
              source={{
                uri: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar7.png",
              }}
            />):(
              <Image
              style={styles.avatar}
              source={{
                uri: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar8.png",
              }}
            />
            )}
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{state.user.user}</Text>
                <Text style={styles.info}>{state.user.email}</Text>
                <Text style={styles.description}>{state.user.phoneNum}</Text>
                <Text style={styles.description}>{state.user.cartype}</Text>
          <List.Section  style={{
                      borderRadius: 15,
                      borderWidth: 2,
                      borderColor:"#ee8133",
                      padding:4,
          }}>
                  <List.Accordion
                    title="My Services"
                    style={{
                      border: "solid",

                      padding:20,
                      margin: 5,
                      minWidth:"100%",
                      alignSelf:"center",

                    }}
                    titleStyle={{
                      color: "black",
                      // padding: 15,
                      alignSelf:"center",
                    }}
                    left={(props) => (
                      <List.Icon {...props} color="#ccc" icon="equal" />
                    )}
                  >
                
                <MyServices/>
                </List.Accordion>
                </List.Section>
                {/* <TouchableOpacity
                  onPress={() => navigation.navigate("MyServises")}
                  style={styles.buttonContainer}
                >
                  <Text style={styles.textbuttonContainer}>My Servises</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </>
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text>Please </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.navigate("SignIn")}
          >
            signin
          </Text>
          <Text> first</Text>
        </View>
      )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ee8133",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
    backgroundColor:"#5cc6db",
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#ee8133",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: 20,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#ee8133",
  },
  textbuttonContainer: {
    fontSize: 16,
    textAlign: "center",
  },
});
