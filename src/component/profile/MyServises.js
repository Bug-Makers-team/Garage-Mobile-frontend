import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { LoginContext } from "../../context/context";
import superagent from "superagent";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { styles } from "../../styleSheet/styleSheet";
import { AlertschemaApprove } from "../../alerts/alerts";
import { List } from "react-native-paper";



export default function MyServices({ navigation }) {
  const state = useContext(LoginContext);
  const [service, setservices] = useState(null);
  const gear = require('../../../assets/icons/gear.png')
  const LeftContent = (props) => <Avatar.Icon {...props} icon={gear} color="grey" style={{backgroundColor:null}} />;
  const alertDeleteContent = {
    title: "Alert",
    process: "delete the service"
  }
  const alertBuyContent = {

  }
  useEffect(() => {
    (async () => {
      try {
        const api = 'https://garage-mobile.herokuapp.com/user/myservice'
        const response = await superagent.get(api).set('authorization', `Bearer ${state.user.token}`);
        // console.log(response.body);

        setservices(
          response.body.filter((item) => {
            // console.log("context",state.user.id);
            // console.log(item.user_id);
            // console.log(item.user_id === state.user.id);
            return parseInt(item.user_id) === parseInt(state.user.id);
          })
        );
      } catch (err) { }
    })();
  });

  const deleteFunction = async (id) => {
    try {
      const api = `https://garage-mobile.herokuapp.com/user/myservice/${id}/`
      const response = await superagent.delete(api).set('authorization', `Bearer ${state.user.token}`);
      console.log(response.body);

      if (response.body) {
        try {
          const api = 'https://garage-mobile.herokuapp.com/user/myservice'
          const response = await superagent.get(api).set('authorization', `Bearer ${state.user.token}`);
          // console.log(response.body);

          setservices(
            response.body.filter((item) => {
              console.log("context", state.user.id);
              // console.log(item.user_id);
              // console.log(item.user_id === state.user.id);
              return parseInt(item.user_id) === parseInt(state.user.id);
            })
          );
        } catch (err) { }
      }
      // setservices(
      //   response.body.filter((item) => {
      //       console.log("context",state.user.id);
      //       console.log(item.user_id);
      //       console.log(item.user_id === state.user.id);
      //     return parseInt(item.user_id) === parseInt(state.user.id);
      //   })
      // );
    } catch (err) { }
  }

  return (
    <>
      {state.LoggedIn ? (<>
        {service ? (
          <>

                   {service.map((item,idx)=>{
                     return(<>
                    <Card >
                    <Card.Title key={idx} title={item.nameOfServices} left={LeftContent} />
                    <Card.Content>
                    </Card.Content>
                    <Card.Cover  source={{ uri: item.imgURL }} />
                    <Card.Content>
                      <Paragraph><Text style={styles.paragraphText} >Price: </Text>{item.price}</Paragraph>
                      <Paragraph><Text style={styles.paragraphText} >Description: </Text>{item.description}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                      <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.button}>Buy Service</Text>
                        <Text style={styles.button} onPress={() => AlertschemaApprove(alertDeleteContent, deleteFunction, item.id)}>Delete Service</Text>
                      </View>
                    </Card.Actions>
                  </Card>
                     </>)
                   })} 
            {/* <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={service}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <>
                  <Card >
                    <Card.Title title={item.nameOfServices} left={LeftContent} />
                    <Card.Content>
                    </Card.Content>
                    <Card.Cover source={{ uri: item.imgURL }} />
                    <Card.Content>
                      <Paragraph><Text style={styles.paragraphText} >Price: </Text>{item.price}</Paragraph>
                      <Paragraph><Text style={styles.paragraphText} >Description: </Text>{item.description}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                      <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.button}>Buy Service</Text>
                        <Text style={styles.button} onPress={() => AlertschemaApprove(alertDeleteContent, deleteFunction, item.id)}>Delete Service</Text>
                      </View>
                    </Card.Actions>
                  </Card>

                </>
              )}
            /> */}


          </>
        ) : null}
      </>) : (<View style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignContent: 'center' }}>
        <Text>Please </Text>
        <Text style={{ color: 'blue' }}
          onPress={() => navigation.navigate('SignIn')}>signin</Text>
        <Text> first</Text>
      </View>)}

    </>
  )
}
