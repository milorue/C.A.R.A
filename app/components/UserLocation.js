/*This is an Example of React Native Map*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView, Permissions } from 'expo'

export default class App extends React.Component {
    state = {
        latitude: null,
        longitude: null
    }

    async componentDidMount() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION)

        if(status != 'granted'){
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
        navigator.geolocation.getCurrentPosition(
            ({coords: {latitude, longitude}}) => this.setState({latitude,longitude}, () => console.log('State:', this.state)),
            (error) => console.log('Error:', error))
    }


    render() {
        const { latitude, longitude } = this.state;
        console.log('Coordinates: ', latitude,longitude)
        return(
            <MapView
                showsUserLocation
                style={{ flex:1 }}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
            </MapView>);
        // return (
        //   <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        //     <Text>We need permission to serve you a map!</Text>
        //   </View>
    }
}