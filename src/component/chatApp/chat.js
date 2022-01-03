import React, { useEffect, useState } from "react";
import {  View, ScrollView, Button, Text, TextInput} from 'react-native';
import {StyleSheet} from 'react-native'

import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room.id,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);

    });
  }, [socket]);

  
  const messages = (enteredText) => {
    setCurrentMessage(enteredText);
  };
  return (
   <View    >  

    <ScrollView 
        style={[{
          flex: 1,
         marginBottom: 75,
       }]}
       scrollEnabled={true}>

<View>
        {messageList.map((messageContent,idx) => (
        <View 
        className="message"
        id={username === messageContent.author ? "you" : "other"}
        key={idx}
        style={[{
          backgroundColor: "#dbf8c6",
          overflow: "hidden"
        }, username === messageContent.author ? styles.ownerView : styles.nonOwnerView]}>




<Text style={messageContent.owner ? styles.ownerText : styles.nonOwnerText }>{messageContent.message} </Text>


                
<View style={tw`flex flex-row mt-2 w-full justify-end`}>
            
                   
            <Text    id="time" style={messageContent.owner ? styles.ownerTextTime : styles.nonOwnerTextTime}> {messageContent.time}</Text>

            
                    <Text id="author"  style={messageContent.owner ? styles.ownerText : styles.nonOwnerText } >   ~{"\n"} {messageContent.author}</Text>
                  

                    </View> 
        </View>
        ))}
        </View>
        </ScrollView>

      


        <View style={[tw`flex flex-row justify-between items-center p-1 h-1/6 w-full -bottom-5`,{
      position: 'absolute',
   }]}>
     
     {/* <View style={[tw`flex-1 flex-row bg-white rounded-full ml-2 justify-between`]}> */}
    
     
       <TextInput
           style={styles.input}
           placeholder="How can We help you 🧑‍🔧..."
           underlineColorAndroid="transparent"


           value={currentMessage}
          
           onChangeText={messages}
           onKeypress={(event) => {
             event.key === "Enter" && sendMessage();     }}
       />
  
    
  
   </View>

<Text onPress={sendMessage} title='Send'> <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        /></Text>
   {/* <Button /> */}
   </View>
        //  </View>

        
  );

}

export default Chat;

const styles = StyleSheet.create({
  ownerText:{
    color:"#000",
    fontSize: 15,
  },
  ownerTextTime:{
    color:"#00000073",
    fontSize: 11,
  },
  ownerView: tw `flex flex-row flex-wrap p-2 w-1/2 rounded-xl ml-44 my-1`,
  nonOwnerText: {
    color:"#000",
    fontSize: 15,
  },
  nonOwnerTextTime: {
    color:"#00000073",
    fontSize: 11,
  },
  nonOwnerView: tw `flex flex-row flex-wrap p-2 w-1/2 rounded-xl m-2 my-1`,
  input: {
    width: 120,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: 'black',
},
})




   
  
   
  