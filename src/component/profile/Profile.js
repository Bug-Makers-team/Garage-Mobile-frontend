import { useContext } from "react";
import { LoginContext } from "../../context/context";

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function Profile({ navigation }) {
  const state = useContext(LoginContext);

  return (
    <>
      {state.LoggedIn ? (
        <>
          <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={styles.body}>
              <View style={styles.bodyContent}>
             {  
                console.log(state.user)
                }
                <Text style={styles.name}>{state.user.user}</Text>
                <Text style={styles.info}>{state.user.email}</Text>
                <Text style={styles.description}>{state.user.phoneNum}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MyServises')} style={styles.buttonContainer}>
                  <Text  style={styles.textbuttonContainer} >
                    My Servises
                  </Text>
                </TouchableOpacity >
              </View>
            </View>
          </View>
        </>
      ) : (<View style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignContent: 'center' }}>
        <Text>Please </Text>
        <Text style={{ color: 'blue' }}
          onPress={() => navigation.navigate('SignIn')}>signin</Text>
        <Text> first</Text>
      </View>)}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",

  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: 20,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  textbuttonContainer: {
    fontSize: 16,
    textAlign: 'center',
  },
});