
import io from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import Chat from "./chat";
import { Text, View, Button, TextInput, Linking } from 'react-native';
import {LoginContext} from "../../context/context";
import { When } from "react-if";
import { List } from 'react-native-paper';
import login from "../../context/login";


const socket = io.connect("https://chat-test-bugmakers.herokuapp.com");
// const socket = io.connect("http://localhost:3001");

function App({navigation}) {
  const state =useContext(LoginContext)
  const [username, setUsername] = useState(state.user.user);
  const [room, setRoom] = useState(state.user);
  const [expanded, setExpanded] = useState(true);
  const [showChat, setShowChat] = useState(false);

  useEffect(()=>{
    setUsername(state.user.user)
    setRoom(state.user)
    socket.emit("join_room", room);
  },[])

  return (
    <>
  <When condition={state.LoggedIn}>

    <View>
        <Chat socket={socket} username={username} room={room} />
      </View>
        
        </When>
    </>
  );
}

export default App;