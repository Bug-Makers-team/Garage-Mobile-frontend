import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
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

  const scrollViewRef = useRef();
  return (
    <>
    <View style={{
         display: "flex",
         flexDirection: "row",
    }}>
    <Image
          style={{
            width: 60,
            height: 50,
            resizeMode: 'contain'
          }}
          source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/User-admin.svg/636px-User-admin.svg.png"}}/>
      <Text style={{  paddingBottom: 5,marginTop:20 }}>Live Chat</Text>
      </View>
      <View
        className="chat-window"
        style={[styles.chatBackGround, styles.shadowProp]}
      >
        <View className="chat-header" style={{ width: 300 }}></View>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
          className="message-container"
        >
          <View className="chat-body" style={{ width: 300 }}>
            {messageList.map((messageContent, idx) => {
              return (
                <View
                style={
                  username === messageContent.author
                    ? null
                    : styles.otherMassagesPlace
                } 
                className="message" key={idx}>
                  <View>
                    <View
                      style={
                        username === messageContent.author
                          ? styles.myMassage
                          : styles.otherMassage
                      }
                      className="message-content"
                    >
                      <Text 
                      style={
                        username === messageContent.author
                          ? styles.myMassageText
                          : styles.otherMassageText
                      }
                      >{messageContent.message}</Text>
                    </View>
                    <View className="message-meta">
                      <Text id="time" style={{fontSize:10}}>{messageContent.time}</Text>
                      {username === messageContent.author?(null):(<Text id="author">{messageContent.author}</Text>)}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.chatFooter}>
        <View style={styles.inputField}>
          <TextInput
            type="text"
            value={currentMessage}
            placeholder="How can we help you..."
            onChangeText={messages}
            // onKeypress={(event) => {
            //   event.key === "Enter" && sendMessage();
            // }}
          />
          <Text onPress={sendMessage}>
          <View style={{paddingRight:10,paddingTop:2.5}}>
            <Icon
          name='sc-telegram'
          type='evilicon'
          color='#ee8133'
          />
          </View>
          </Text>
        </View>
        <View style={{ paddingTop: 10 }}>
          {/* <Button onPress={sendMessage} title="Send" /> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  chatFooter: {
    marginBottom: "10%",
  },
  chatBackGround: {
    width: 300,
    backgroundColor: "white",
    shadowRadius: 100,
    shadowOpacity: 1,
    shadowColor: "black",
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#00000033",
    minHeight: "60%",
    maxHeight: "60%",
    width:"100%",
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  myMassage: {
    backgroundColor: "#e5e5ea",
    marginVertical: 10,
    borderRadius: 10,
    maxWidth: "40%",
    padding: 5,
    alignSelf: 'flex-start'
  },
  otherMassage:{
    backgroundColor: "#3aacfb",
    marginVertical: 10,
    borderRadius: 10,
    maxWidth: "40%",
    padding: 5,
    alignSelf: 'flex-start'
  },
  otherMassagesPlace:{
    alignItems: 'flex-end'
  },
  otherMassageText:{
    color:"white"
  },
  myMassageText:{
    color:"black"
  },
  inputField:{
     backgroundColor: "white",
   borderRadius: 10,
   borderWidth:2,
   borderColor: "#00000033",
   marginTop:5, 
   display: "flex",
   flexDirection: "row",
   justifyContent:"space-between"
  }
});

export default Chat;
