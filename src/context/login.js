import React from "react";
import { LoginContext } from "./context";
import { When } from "react-if";
import { StyleSheet, Text, View, Button, TextInput,
  SafeAreaView  } from "react-native";
import { Form, FormItem } from "react-native-form-component";
// import {FontAwesome}  from '@expo/vector-icons';
// import { EvilIcons } from '@expo/vector-icons';
// import { TextInput } from 'react-native-paper';
export default class login extends React.Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      phoneNum: "",
      sign: false,
      back: false,
      
    };
  }

  handleUsername = (enteredText) => {
   
    
        this.setState({ username: enteredText});
 



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
  handleSubmit = () => {
    //   if(this.state.username !== "" && this.state.password !== ""){
    this.context.loginFunction(this.state.username, this.state.password);
    // console.log(typeof this.state.username,typeof this.state.password);
    console.log("submited");
    //   }
  };

  //signUp 
  handelSignupSumbit = () => {
    this.context.signup(this.state.username, this.state.password,
      this.state.email, this.state.phoneNum);
    this.setState({ sign: false })
  }
  flagSign = () => {
    this.setState({ sign: true })
    this.props.navigation.setOptions({
      title: "SignUp"
    });
  }



  goBack = () => {
    setTimeout(() => { this.props.navigation.goBack() }, 100)
  }


  render() {
    return (
      <>
        <When condition={!this.context.LoggedIn}>
          <When condition={!this.state.sign}>
            <View style={{ backgroundColor: "#FFF" }}>
              <Text
                style={{
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Garage Mobile </Text>
              <View>
                <TextInput   style={style.container}
                  
                  placeholder="Username"
                  type="text"
                  name="username"
                  placeholderTextColor="#003f5c"
                  onChangeText={this.handleUsername}
                />

              </View>
                <TextInput  style={style.container}
              
              placeholder="Password..." 
              placeholderTextColor="#003f5c"
                  type="password"
                  name="password"
                  autoCorrect={false}
                  secureTextEntry={true}
                  onChangeText={this.handlePassword}
                />
                <View >

                <Text style={style.buttonStyle}
                  onPress={() =>
                this.handleSubmit()}>
                  SignIn
                </Text>
                </View>
              

              <View>
              <Text style={style.TextStyle}
                  onPress={() => this.flagSign()}>
                  Don't have an account <Text
                  style={{color:"#00716F"}}>
                             ?Create here
                    </Text> 
                </Text>
                </View>
            </View>
          </When>

          {/* Sign up form */}
          <When condition={this.state.sign}>
          
            <View>
              <TextInput style={style.container}
                placeholder="username"
                type="text"
                name="username"
                onChangeText={this.handleUsername}
              />
              <TextInput style={style.container}
                placeholder="password"
                type="password"
                name="password"
                secureTextEntry={true}
                onChangeText={this.handlePassword}
              />
              <TextInput style={style.container}
                placeholder="example@email.com"
                type="text"
                name="email"
                onChangeText={this.handleEmail}
              />
              <TextInput style={style.container}
                placeholder="phone Number"
                type="number"
                name="phoneNum"
                onChangeText={this.handlePhonenum}
              />
      
               <View >

                <Text style={style.buttonStyle}
                  onPress={() => this.handelSignupSumbit()}>
                  Sign Up
                </Text>
                </View>
           
              {/* <View style={{ display: "flex", flexDirection: "row" }}> */}
                {/* <Button onPress={() => this.handelSignupSumbit()} title="Sign Up" /> */}
                {/* <Button onPress={()=>this.flagSign()} title="Sign up" /> */}
              {/* </View> */}
            </View>

      
        
          </When>
        </When>
        {this.context.LoggedIn ? (
          <>
            {this.goBack()}
          </>
        ) : null}

      </>
    );
  }
}

const style = StyleSheet.create({
  container: {

    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 50,
    paddingHorizontal: 20,
    borderColor: "#00716F",
    // borderRadius: 23,
    paddingVertical: 15,
    color: '#333'
  },
  buttonStyle:{
    color: "black",
    textAlign:"center",
    padding:10,
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#00716F",
    paddingVertical: 10,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
  TextStyle:{
    // color: "black",
    color: '#333',
    textAlign:"center",
    padding:10,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },


  text: {
    fontSize: 25,
    fontWeight: '500'
  }



})
