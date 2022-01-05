import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import base64 from 'base-64';
import superagent from "superagent";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import {styles} from "../../styleSheet/styleSheet";
import { Alertschema } from "../../alerts/alerts";
import { LoginContext } from "../../context/context";


export default function services({ route, navigation }) {
  const api = " https://garage-mobile.herokuapp.com/services";
  const [service, setservices] = useState(null);
  const state=useContext(LoginContext);
  // let service=null;
  // { name: "", description: "", category: "", price: "", imgURL: "" }
  const { categoryName } = route.params;
  useEffect(() => {
    (async () => {
      try {
        const response = await superagent.get(`${api}`);

        setservices(
          response.body.filter((item) => {
            return item.category === categoryName;
          })
        );
      } catch (err) {}
    })();
  }, []);
  const gear = require('../../../assets/icons/gear.png')
  const LeftContent = (props) => <Avatar.Icon {...props} icon={gear} color="grey" style={{backgroundColor:null}} />;
  let alertContent;

  if (state.LoggedIn) {
       alertContent={title:'Alert',text:'Service added to your profile'}
    }else{
       alertContent={title:'Alert',text:'Please sign-in first'}   
  }

  const addServices= async(item)=>{


    Alertschema(alertContent)

    if(state.LoggedIn){
      const api='https://garage-mobile.herokuapp.com/user/myservice'
      const obj={
        user_id: state.user.id,
        nameOfServices: item.name,
        description: item.description,
        price: item.price,
        imgURL: item.imgURL
      }
    //   let config = {
    //     headers: {
    //       authorization: `Bearer ${base64.encode(`${state.user.token}`)}`
    //     },
    //     user:{capabilities:state.user.capabilities}
    //   }
        // axios
        // .post("http://localhost:8080/user/myservice",obj,config)
        // .post("https://garage-mobile.herokuapp.com/user/myservice",obj,config)
        // .then(result=>{console.log(result.status);})
    try{
    const response = await superagent.post(api).send(obj).set('authorization', `Bearer ${state.user.token}`);
    }catch(err){}

//   .catch (err=>console.log(err)) 
    }
}




  return (
    <>
      {service ? (
        <>
            <Title>{service[0].category}</Title>
          <FlatList
            data={service}
            renderItem={({ item }) => (
                <>
                <Card >
                <Card.Title title={item.name} left={LeftContent} />
                <Card.Content>
                </Card.Content>
                <Card.Cover source={{ uri:item.imgURL }}/>
                <Card.Content>
                  <Paragraph><Text style={styles.paragraphText} >Price: </Text>{item.price}</Paragraph>
                  <Paragraph><Text style={styles.paragraphText} >Description: </Text>{item.description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Text style={styles.button} onPress={()=>{addServices(item)}}>Get Service</Text>
                </Card.Actions>
              </Card>
              </>
            )}
          />
         
        </>
      ) : null}
    </>
  );
}