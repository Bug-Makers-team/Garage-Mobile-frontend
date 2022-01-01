
import io from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import Chat from "./chat";
import { Text, View, Button, TextInput, Linking } from 'react-native';
import {LoginContext} from "../../context/context";
import { When } from "react-if";
import { List } from 'react-native-paper';
import login from "../../context/login";


// const socket = io.connect("https://chat-test-bugmakers.herokuapp.com");
const socket = io.connect("http://localhost:3001");

function App({navigation}) {
  const state =useContext(LoginContext)
  const [username, setUsername] = useState(state.user.user);
  const [room, setRoom] = useState(state.user);
  const [expanded, setExpanded] = useState(true);
  const [showChat, setShowChat] = useState(false);

  useEffect(()=>{
    setUsername(state.user.user)
    setRoom(state.user)
  },[state.user])
  
  const handlePress = () => setExpanded(!expanded);

  const handleEmergency=()=>{
    socket.emit("join_room", room);
    setShowEmergency(false);
  }


  return (
    <>
  <When condition={state.LoggedIn}>
    <When condition={state.showEmergency}>

    <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>


    </When>
    <When condition={!state.showEmergency}>
    <View>
      
        <Chat socket={socket} username={username} room={room} />
      </View>


        </When>
      </When>
      <When condition={!state.LoggedIn}>

        <View style={{display:"flex" ,flexDirection:"row",justifyContent:'center',alignContent:'center'}}>
          
        <Text>Please </Text>
         <Text style={{color: 'blue'}}
      onPress={() => navigation.navigate('SignIn')}>signin</Text>
       <Text> first</Text>
        </View>
        
        </When>
    </>
  );
}

export default App;
