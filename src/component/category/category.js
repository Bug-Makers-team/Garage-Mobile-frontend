// import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import superagent from "superagent";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

export default function services({ route, navigation }) {
  const api = " https://garage-mobile.herokuapp.com/services";
  const [service, setservices] = useState(null);
  // let service=null;
  // { name: "", description: "", category: "", price: "", imgURL: "" }
  const { categoryName } = route.params;
  console.log(categoryName);
  useEffect(() => {
    (async () => {
      try {
        const response = await superagent.get(`${api}`);

        setservices(
          response.body.filter((item) => {
            console.log(item.category);
            return item.category === categoryName;
          })
        );
      } catch (err) {}
    })();
  }, []);

  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <>
      {service ? (
        <>
          <FlatList
            data={service}
            renderItem={({ item }) => (
                <Card>
                     {console.log(item.imgURL)}
                <Card.Title title={item.category} left={LeftContent} />
                <Card.Content>
                  <Title>{item.name}</Title>
                </Card.Content>
                <Card.Cover source={item.imgURL} />
                <Card.Content>
                  <Paragraph>{item.price}</Paragraph>
                  <Paragraph>{item.description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button>Buy Services</Button>
                </Card.Actions>
              </Card>
            )}
          />
         
        </>
      ) : null}
    </>
  );
}
