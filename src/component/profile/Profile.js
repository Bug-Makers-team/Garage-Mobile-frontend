import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList } from 'react-native'
import { LoginContext } from "../../context/context";
import superagent from "superagent";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {styles} from "../../styleSheet/styleSheet";
import { notSignedinAlert } from "../../alerts/alerts";

export default function Profile({navigation}) {
  const state=useContext(LoginContext);
  const [service, setservices] = useState(null);
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

    useEffect(() => {
        (async () => {
          try {
            const api='https://garage-mobile.herokuapp.com/user/myservice'
            const response = await superagent.get(api).set('authorization', `Bearer ${state.user.token}`);
            console.log(response.body);

            setservices(
              response.body.filter((item) => {
                  console.log("context",state.user.id);
                  console.log(item.user_id);
                  console.log(item.user_id === state.user.id);
                return parseInt(item.user_id) === parseInt(state.user.id);
              })
            );
          } catch (err) {}
        })();
      }, [state.LoggedIn]);

      // const deleteFunction

    return (
        <>
        {state.LoggedIn?(<>
            {service ? (
                <>
            {console.log(service)}
          <FlatList
            data={service}
            renderItem={({ item }) => (
                <>
                <Card >
                <Card.Title title={item.nameOfServices} left={LeftContent} />
                <Card.Content>
                </Card.Content>
                <Card.Cover source={{ uri:item.imgURL }}/>
                <Card.Content>
                  <Paragraph>{item.price}</Paragraph>
                  <Paragraph>{item.description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Text style={styles.button}>Delete Service</Text>
                </Card.Actions>
              </Card>
              </>
            )}
          />

        </>
      ) : null}
        </>):(<View style={{display:"flex" ,flexDirection:"row",justifyContent:'center',alignContent:'center'}}>
            <Text>Please </Text>
         <Text style={{color: 'blue'}}
      onPress={() => navigation.navigate('SignIn')}>signin</Text>
       <Text> first</Text>
        </View>)}
        
        </>
    )
}
