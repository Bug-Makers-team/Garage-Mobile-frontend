import React from 'react';
import { StyleSheet, View, Text, Dimensions, Button, Image,TouchableHighlight } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons'; 
import * as Location  from 'expo-location'
import * as Permissions from "expo-permissions";

const MapComponent = ({navigation}) => {
    const [location, setLocation] = React.useState(null)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        (async () =>{
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setError('Permission to access location was denied');
                return;
            }
            const locate = await Location.getCurrentPositionAsync({});
            setLocation(locate.coords)
            console.log(location);
        })()
    }, []);

    return (
        <>
            {location?(
                <>
        <View style={styles.container}>
                <>
            <Text style={styles.heading}>Map</Text>
            <MapView style={styles.map} initialRegion={
                {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0421,
                  }
            }>
                {location ? (
                    <Marker coordinate={location} title="My location" >
                        <FontAwesome name="map-marker" size={40} color="#B12A5B" />
                    </Marker>
                ):
                    <Text>{error}</Text>
                }
            </MapView>
            
                </>
        </View>
        <TouchableHighlight onPress={()=>navigation.navigate('ChatApp')} style={styles.button} underlayColor="#eaeaea87">
        <Image
        
        source={require('../../../assets/icons/customerService.png')}
        
      />
      </TouchableHighlight>
        </>
            ):(null)}
        </>
    );
};
export default MapComponent;

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.90,
    },
    heading: {
        alignSelf: 'center',
        paddingTop: 20,
        marginBottom: 10,
        fontSize: 24
    },
    container:{
        height:400,
    },
    button:{
        position:'absolute',
        left:20,
        bottom:20,
        borderRadius:50,
        padding:7,
    }
});