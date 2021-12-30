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
      sign:false
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
  handleSubmit = () => {
    //   if(this.state.username !== "" && this.state.password !== ""){
    this.context.loginFunction(this.state.username, this.state.password);
    // console.log(typeof this.state.username,typeof this.state.password);
    console.log("submited");
    //   }
  };
  flagSign=()=>{
      this.setState({sign:true})
  }

  render() {
    return (
      <>
        <When condition={!this.context.LoggedIn && !this.state.sign}>
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
            {/* <TextInput
              placeholder="username"    
              type="text"
              name="username"
              onChange={this.handleChange}
            /> */}
            {/* <TextInput
              placeholder="password"
              type="password"
              name="password"
              onChange={this.handleChange}
            /> */}
            <View style={{display:"flex" ,flexDirection:"row"}}>
            <Button onPress={()=>this.handleSubmit()} title="Sign in" />
            <Button onPress={()=>this.flagSign()} title="Sign up" />
            </View>
           </View>
        </When>





        <When condition={this.context.LoggedIn && this.state.sign}>
         
        <View style={{alignItems:"center",marginTop:100}}>

            <Text>{this.context.user.user}</Text>
            {/* <Text>{this.context.user.id}</Text> */}
            </View>
            
        <View style={{alignItems:"center",marginTop:100}}>
          <Button onPress={this.context.logoutFunction} title="logout"  />
          </View>
        </When>
        
      </>
    );
  }
}
