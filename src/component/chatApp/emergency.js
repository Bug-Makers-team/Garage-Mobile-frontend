import io from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import Chat from "./chat";
import { Text, View, Button, TextInput, Linking } from "react-native";
import { LoginContext } from "../../context/context";
import { When } from "react-if";
import { List } from "react-native-paper";
import login from "../../context/login";
import * as Location from "expo-location";
import { styles } from "../../styleSheet/styleSheet";
import { Alertschema } from "../../alerts/alerts";

const socket = io.connect("https://chat-test-bugmakers.herokuapp.com");
// const socket = io.connect("http://localhost:3001");

function App({ navigation }) {
  const state = useContext(LoginContext);
  const [username, setUsername] = useState(state.user.user);
  const [room, setRoom] = useState(state.user);
  const [expanded, setExpanded] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [itemStyle, setItemStyle] = useState({})

  const gear = require('../../../assets/icons/gear.png')
  const activeStyle = {
    border: "solid",
    borderRadius: 15,
    borderWidth: 1,
    width: 300,
    marginLeft: 25,
  };
  useEffect(() => {
    setUsername(state.user.user);
    setRoom(state.user);
    socket.emit("join_room", room);
  }, []);
  const sendHelp=()=>{
    if(state.issue!=="Inform your issue please"){
      navigation.navigate("Location")
    }else{
      const alertcontent={
        title:"Alert",
        text:"Please choose you issue first!"
      }
      Alertschema(alertcontent)
    }
  }
  const handlePress = () => setExpanded(!expanded);

  const handleEmergency = () => {
    socket.emit("join_room", room);
    setShowEmergency(false);
  };
  const shadow = {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  };
  return (
    <>
      <When condition={state.LoggedIn}>
        <List.Section title="Accordions">
          <List.Accordion
            title="Inform your issue please"
            style={{
              border: "solid",
              borderRadius: 15,
              borderWidth: 1,
              margin: 5,
            }}
            titleStyle={{
              color: "black",
              padding: 15
            }}
            left={(props) => <List.Icon {...props} color="#ccc" icon='equal' />}
          >
            <List.Item
              left={(props) => (
                <List.Icon {...props} color="#ccc" icon={gear} />
              )}
              
              onPress={() => {state.setIssue("tires explosion")}}
              title="tires explosion"
            />
            <List.Item
            left={(props) => (
              <List.Icon {...props} color="#ccc" icon={gear} />
            )}
              onPress={() => state.setIssue("Gaz fuel")}
              title="Gaz fuel"
            />
            <List.Item
            left={(props) => (
              <List.Icon {...props} color="#ccc" icon={gear} />
            )}
              onPress={() => state.setIssue("mechanical issue")}
              title="mechanical issue"
            />
            <List.Item
            left={(props) => (
              <List.Icon {...props} color="#ccc" icon={gear} />
            )}
              onPress={() => state.setIssue("brake issues")}
              title="brake issues"
            />
            <List.Item
            left={(props) => (
              <List.Icon {...props} color="#ccc" icon={gear} />
            )}
              onPress={() => state.setIssue("Issue not choosen")}
              title="Other issues"
            />
          </List.Accordion>
        </List.Section>
        {console.log(state.issue)}
       
        <Text
          style={{
            width: 100,
            padding: 10,
            color: "white",
            backgroundColor: "#f44336",
            borderRadius: 8,
            border:"solid",
            borderWidth:1,
            borderColor:'540c0c',
            position: "absolute",
            bottom: 60,
            right:50,
            ...shadow,
          }}
          onPress={() => sendHelp()}
        >
          Send Help
        </Text>
          <View style={{position: "absolute",
            bottom: 60,
            left:20,}}>
            {state.issue==="Inform your issue please"?(null):(<Text>Your issue is: {state.issue}</Text>)}
          </View>
      </When>
      <When condition={!state.LoggedIn}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text>Please </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.navigate("SignIn")}
          >
            signin
          </Text>
          <Text> first</Text>
        </View>
      </When>
    </>
  );
}

export default App;
