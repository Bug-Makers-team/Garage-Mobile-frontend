import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph ,ScrollView} from 'react-native-paper';
import superagent from 'superagent';
import { useEffect, useState } from "react";


export default function services(props) {


    const api = " https://garage-mobile.herokuapp.com/services"
    const [service, showservices] = useState([]);
    // { name: "", description: "", category: "", price: "", imgURL: "" }
    useEffect(() => {
        async () => {
            try {
                const response = await superagent.get(`${api}`)
                console.log('====================================');
                console.log(response);
                console.log('====================================');
                // service.name = response.body.service.name
                // service.description = response.body.service.description
                // service.category = response.body.service.category
                // service.price = response.body.service.price
                // service.imgURL = response.body.service.imgURL
            } catch (err) { }
        }
    }, [])

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        // <ScrollView>
            <Card>
                <Card.Title title={service.category} left={LeftContent} />
                <Card.Content>
                    <Title>{service.name}</Title>
                </Card.Content>
                <Card.Cover source={service.imgURL} />
                <Card.Content>
                    <Paragraph>{service.price}</Paragraph>
                    <Paragraph>{service.description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>Buy Services</Button>
                </Card.Actions>
            </Card>
        // </ScrollView>
    );
}
