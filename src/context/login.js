import React from "react";
import { LoginContext } from "./context";
import { When } from "react-if";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Form, FormItem } from "react-native-form-component";

export default class login extends React.Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email:"",
      phoneNum:"",
      sign:false,
      back:false,
    };
  }
  // handleUsername = (e) => {
  //     this.setState({ username: e.target.value })
  // }

  // handlePassword = (e) => {
  //     this.setState({ password: e.target.value })
  // }
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
  handleSubmit = () => {
    //   if(this.state.username !== "" && this.state.password !== ""){
    this.context.loginFunction(this.state.username, this.state.password);
    // console.log(typeof this.state.username,typeof this.state.password);
    console.log("submited");
    //   }
  };

  //signUp 
  handelSignupSumbit=()=>{
    this.context.signup(this.state.username,this.state.password,
      this.state.email,this.state.phoneNum);
  }
  flagSign=()=>{
      this.setState({sign:true})
      this.props.navigation.setOptions({
        title: "SignUp"
      });
  }

  

  render() {
    return (
      <>
      <When condition={!this.context.LoggedIn}>
        <When condition={!this.state.sign}>
        <View style={{alignItems:"center",marginTop:100}}
>
            <TextInput
              placeholder="username"
              type="text"
              name="username"
              onChangeText={this.handleUsername}
            />
            <TextInput
              placeholder="password"
              type="password"
              name="password"
              onChangeText={this.handlePassword}
            />
            <View style={{display:"flex" ,flexDirection:"row"}}>
            <Button onPress={()=>this.handleSubmit()} title="Sign in" />
            <Button onPress={()=>this.flagSign()} title="Register" />
            </View>
           </View>
        </When>
        <When condition={this.state.sign}>
        <View style={{alignItems:"center",marginTop:100}}
>
            <TextInput
              placeholder="username"
              type="text"
              name="username"
              onChangeText={this.handleUsername}
            />
            <TextInput
              placeholder="password"
              type="password"
              name="password"
              onChangeText={this.handlePassword}
            />
            <TextInput
              placeholder="email"    
              type="text"
              name="email"
              onChangeText={this.handleEmail}
            />
            <TextInput
              placeholder="phone Number"
              type="number"
              name="phoneNum"
              onChangeText={this.handlePhonenum}
            />
            
            <View style={{display:"flex" ,flexDirection:"row"}}>
            <Button onPress={()=>this.handelSignupSumbit()} title="Sign Up" />
            {/* <Button onPress={()=>this.flagSign()} title="Sign up" /> */}
            </View>
           </View>
        </When>
     </When>
     {this.context.LoggedIn?(
     <>
     {setTimeout(() => {this.props.navigation.goBack()}, 100)}
     </>
     ):null}
  
    


        
      </>
    );
  }
}
