import React, { useState } from "react";
import superagent from 'superagent';
import base64 from 'base-64';
export const LoginContext = React.createContext();

export default function LoginProvider(props) {

    const API = 'https://garage-mobile.herokuapp.com';
    const [LoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({ user: "", capabilities: [],id:'' ,token:'',role:''});
    const [showEmergency, setShowEmergency] = useState(true);
    const [issue, setIssue] = useState("Inform your issue please");
    const [userInfo, setUserInfo] = useState({ user: "", capabilities: [],id:'' ,token:'',role:''});


    const loginFunction = async (username, password) => {
        // it will update the LoggedIn flag into true
        try {
            const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
            console.log(response.body.user)
            user.user=response.body.user.username
            user.capabilities=response.body.user.capabilities
            user.id=response.body.user.id  
            user.token=response.body.user.token  
            user.role=response.body.user.role  
            user.email=response.body.user.email
            user.phoneNum=response.body.user.phoneNum
            console.log(response.body.user.email);
            console.log(response.body.user.phoneNum);
            console.log(user);

            validateMyToken(response.body.token);
        } catch (err) { }
    }
    const logoutFunction = () => {
        setLoggedIn(false);
        setUser({});
    }

      // signUp

      const signup = async (userName, passWord, email,phoneNum, role) => {
        try {
          let userObj = {
            username: userName,
            password: passWord,
            phoneNum:phoneNum,
            email: email,
            role: role
        }
        console.log(userObj);
          const res = await superagent.post(`${API}/signup`, userObj);
          validateMyToken(res.body.token);
        } catch (error) {
          alert(error.message)
        }
      };

    const validateMyToken = async(token) => {
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
            setUser({});
        }
    }
   

    const can = (capability) => {
        return user?.capabilities?.includes(capability);
    }

  

    const state = {
        LoggedIn: LoggedIn,
        loginFunction: loginFunction,
        logoutFunction: logoutFunction,
        user: user,
        can: can,
        showEmergency:showEmergency,
        setShowEmergency:setShowEmergency,
        signup:signup,
        issue:issue,
        setIssue:setIssue

    }
    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}