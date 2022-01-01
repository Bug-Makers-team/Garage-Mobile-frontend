import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';


import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

export default class Locationuser extends React.Component {

  state = {
    location: [],
    errorMessage: '',
    lat: 0,
    lon: 0

  }


  componentWillMount() {
    this._getLocation();
  }
  _getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
    if (status !== 'granted') {
      console.log('PERMISSION NOT GRANTED!');
      this.setState({
        errorMessage: 'PERMISSION NOT GRANTED'
      })
    }
    const location = await Location.getCurrentPositionAsync();
    this.setState({
      location,

    })
    let data = (Object.values(this.state.location))
    let userLocation = Object.entries(data[0])
    // console.log(userLocation[0][1]);
    // console.log(userLocation[1][1]);

    this.setState({
      lat: userLocation[0][1],
      lon: userLocation[1][1]
    })
    console.log(userLocation)
  }
  render() {


    return (
      <>
        <View style={styles.container}>




          <MapView style={styles.map}


            initialRegion={{
              latitude: `${this.state.lat}`,
              longitude: `${this.state.lon}`
            }} showsUserLocation={true} />

        </View>
      </>

    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 100,
//     width: 100,
//     position: "absolute"
//   }
// });

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,


  },
});
