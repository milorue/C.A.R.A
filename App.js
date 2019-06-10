
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';
import MapView, {Marker, AnimatedRegion, Polyline} from 'react-native-maps';
import MapPolyline from "react-native-maps/lib/components/MapPolyline";

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class App extends Component {
    
    renderMarker(lat,lon,title){
        return(
            <Marker coordinate={{latitude: lat, longitude: lon}} title={title}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    ref={ref => {this.map = ref;}}
                    initialRegion={{
                        latitude: 42.42268,
                        longitude: -76.4952,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                >
                    <Polyline coordinates={[{latitude: 42.42268, longitude:-76.4952},{latitude: 42.41747, longitude: -76.49803}]}/>
                    {/*hardcoded markers*/}
                    {this.renderMarker(42.42268,-76.4952,"Williams Hall")}
                    {this.renderMarker(42.42235,-76.49429, "Campus Center")}
                    

                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
        marginRight: 20,
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
        marginBottom: 400,
    },
    members: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 10,
    },
});
