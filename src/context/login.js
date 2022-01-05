import React from "react";
import { LoginContext } from "./context";
import { When } from "react-if";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Form, FormItem } from "react-native-form-component";
import { RadioButton } from "react-native-paper";
import { Alertschema } from "../alerts/alerts";
// import {FontAwesome}  from '@expo/vector-icons';
// import { EvilIcons } from '@expo/vector-icons';
// import { TextInput } from 'react-native-paper';
export default class login extends React.Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      email: null,
      phoneNum: null,
      cartype: "",
      geneder: "male",
      sign: false,
      
    };
  }
  checking=()=>{
    const {username,password,email,phoneNum}=this.state
    if(username && password && email && phoneNum ){
      this.handelSignupSumbit()
    }else{
      const alertContent={
        title:"Alert",
        text:"please fill all the fields"
      }
      Alertschema(alertContent)
    }
  }

  handleUsername = (enteredText) => {
    this.setState({ username: enteredText });
  };
  handlePassword = (enteredText) => {
    this.setState({ password: enteredText });
  };

  //signup
  handleEmail = (enteredText) => {
    this.setState({ email: enteredText });
  };
  handlePhonenum = (enteredText) => {
    this.setState({ phoneNum: enteredText });
  };
  handleCartype = (enteredText) => {
    this.setState({ cartype: enteredText });
  };
  handleSubmit = () => {
    this.context.loginFunction(this.state.username, this.state.password);

  };

  //signUp
  handelSignupSumbit = () => {
    this.context.signup(
      this.state.username,
      this.state.password,
      this.state.email,
      this.state.phoneNum,
      this.state.geneder,
      this.state.cartype,
    );
    this.setState({ sign: false });
  };
  flagSign = () => {
    this.setState({ sign: true });
    this.props.navigation.setOptions({
      title: "SignUp",
    });
  };

  goBack = () => {
    setTimeout(() => {
      this.props.navigation.goBack();
    }, 100);
  };

  render() {
    return (
      <>
        <When condition={!this.context.LoggedIn}>
          <When condition={!this.state.sign}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
              <View style={{ flex: 1 }}>
                <Image
                  style={{
                    resizeMode: "stretch",
                    flex: 1,
                    width: "90%",
                    // height:"90%",
                    alignSelf: "center",
                    bottom: "8%",
                  }}
                  source={require("../../assets/icons/logo.png")}
                />
              </View>
              <View style={{ bottom: "13%" }}>
                {/* <Text
                style={{
                  fontSize: 30,
                  alignSelf: "center",
                }}
                >
              Garage Mobile </Text> */}
                <View>
                  <TextInput
                    style={style.container2}
                    placeholder="Username"
                    type="text"
                    name="username"
                    placeholderTextColor="#003f5c"
                    onChangeText={this.handleUsername}
                  />
                </View>
                <TextInput
                  style={style.container}
                  placeholder="Password..."
                  placeholderTextColor="#003f5c"
                  type="password"
                  name="password"
                  autoCorrect={false}
                  secureTextEntry={true}
                  onChangeText={this.handlePassword}
                />
                <View>
                  <Text
                    style={style.buttonStyle}
                    onPress={() => this.handleSubmit()}
                  >
                    SignIn
                  </Text>
                </View>

                <View>
                  <Text style={style.TextStyle} onPress={() => this.flagSign()}>
                    Don't have an account{" "}
                    <Text style={{ color: "#ee8133" }}>?Create here</Text>
                  </Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </When>

          {/* Sign up form */}
          <When condition={this.state.sign}>
            <ScrollView>
            
            <View>
              <TextInput
                style={style.container}
                placeholder="username"
                type="text"
                name="username"
                onChangeText={this.handleUsername}
              />
              <TextInput
                style={style.container}
                placeholder="password"
                type="password"
                name="password"
                secureTextEntry={true}
                onChangeText={this.handlePassword}
              />
              <TextInput
                style={style.container}
                placeholder="example@email.com"
                type="text"
                name="email"
                onChangeText={this.handleEmail}
              />
              <TextInput
                style={style.container}
                placeholder="phone Number"
                type="number"
                name="phoneNum"
                onChangeText={this.handlePhonenum}
              />
              <TextInput
                style={style.container}
                placeholder="car type"
                type="text"
                name="cartype"
                onChangeText={this.handleCartype}
              />
              <View style={{ display: "flex", flexDirection:"row" ,marginHorizontal: 55,paddingVertical:20,}}>
                <View style={{ display: "flex", flexDirection: "row" ,alignItems:"center"}}>
                  <RadioButton
                    color={"#ee8133"}
                    value="male"
                    status={
                      this.state.geneder === "male" ? "checked" : "unchecked"
                    }
                    onPress={() => this.setState({ geneder: "male" })}
                    />
                    <Text> Male</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                  <RadioButton
                    color={"#ee8133"}
                    value="female"
                    status={
                      this.state.geneder === "female" ? "checked" : "unchecked"
                    }
                    onPress={() => this.setState({ geneder: "female" })}
                    />
                    <Text>Female</Text>
                </View>
              </View>

              <View>
                <Text
                  style={style.buttonStyle}
                  onPress={() => this.checking()}
                >
                  Sign Up
                </Text>
              </View>

              {/* <View style={{ display: "flex", flexDirection: "row" }}> */}
              {/* <Button onPress={() => this.handelSignupSumbit()} title="Sign Up" /> */}
              {/* <Button onPress={()=>this.flagSign()} title="Sign up" /> */}
              {/* </View> */}
            </View>
            </ScrollView>
          </When>
        </When>
        {this.context.LoggedIn ? <>{this.goBack()}</> : null}
      </>
    );
  }
}

const style = StyleSheet.create({
  container2: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    paddingHorizontal: 20,
    borderColor: "#ee8133",
    // borderRadius: 23,
    paddingVertical: 15,
    color: "#333",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 25,
    paddingHorizontal: 20,
    borderColor: "#ee8133",
    // borderRadius: 23,
    paddingVertical: 15,
    color: "#333",
  },
  buttonStyle: {
    color: "white",
    textAlign: "center",
    padding: 10,
    marginHorizontal: 120,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#ee8133",
    paddingVertical: 10,
    fontSize: 16,
  },
  TextStyle: {
    // color: "black",
    color: "#333",
    textAlign: "center",
    padding: 10,
    fontSize: 16,
  },

  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
