import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconFoundation from 'react-native-vector-icons/Foundation'

const MapRecording = ( { navigation, route } ) => {
    const mapStyle = [{
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#212121"
        }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
            "color": "#212121"
        }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#757575"
        },
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#9e9e9e"
        }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#bdbdbd"
        }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#181818"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#616161"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
        {
            "color": "#1b1b1b"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#2c2c2c"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#8a8a8a"
        }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#373737"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#3c3c3c"
        }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#4e4e4e"
        }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#616161"
        }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#000000"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#3d3d3d"
        }
        ]
    }]
    const [region, setRegion] = React.useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    })
    const [record, setRecord] = React.useState('white')
    const [flag, setFlag] = React.useState(true)
    const changeRecord = () => {
        if (record === 'white') {
            setRecord('#FFD700')
        } else {
            setRecord('white')
        }
    }
    const changeFlag = () => {
        if(flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    const coordinates = [{
        latitude: 43.523050395,
        longitude: -80.245749950,
    },
    {
        latitude: 43.528436,
        longitude: -80.22352,
    },]

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <MapView 
                    initialRegion={{
                        latitude: 43.549999,
                        longitude: -80.250000,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onRegionChangeComplete={(region) => setRegion(region)}
                    style={styles.map}
                    customMapStyle={route.params.mode === true ? mapStyle : []}
                >
                    {record === '#FFD700' && <><Marker coordinate={{
                        latitude: 43.523050395,
                        longitude: -80.245749950,
                    }}>
                        <IconFoundation
                            name="home" 
                            size={30}
                            style={{
                                color: '#FFD700'
                            }}
                        />
                    </Marker>
                    <Marker coordinate={{
                        latitude: 43.528436,
                        longitude: -80.22352,
                    }}>
                        <IconMaterialCommunityIcons
                            name="bike" 
                            size={30}
                            style={{
                                color: '#FFD700'
                            }}
                        />
                    </Marker>
                    <MapViewDirections
                        origin={coordinates[0]}
                        destination={coordinates[1]}
                        apikey={'AIzaSyAeqyYPazbjm-kJg-ivAPP4N3564Xf0PlY'}
                        strokeWidth={4}
                        strokeColor="#FFD700"
                    /></>}
                </MapView>
                {flag && <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress = {() => navigation.navigate('Rewards', {name: 'Jane'})}
                    >
                        <IconMaterialCommunityIcons
                            name="gift-open" 
                            size={45}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress = {() => changeRecord()}
                    >
                        <IconMaterialCommunityIcons
                            name="bike-fast" 
                            size={45}
                            style={{
                                color: record
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress = {() => changeFlag()}
                    >
                        <IconIonicons
                            name="md-analytics-outline" 
                            size={45}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>}
                {!flag && <View style={styles.statsContainer}>
                    <View style={styles.statsTextContainer}>
                        <View style={styles.statsHeaderContainer}>
                            <IconIonicons
                                name="time" 
                                size={30}
                                style={styles.iconHeaders}
                            />
                            <Text style={styles.statsTextHeaders}>Time</Text>
                        </View>
                        <Text style={styles.statsText1}>16m 15s</Text>
                    </View>
                    <View style={styles.statsTextContainer}>
                        <View style={styles.statsHeaderContainer}>
                            <IconMaterialCommunityIcons
                                name="map-marker-distance" 
                                size={30}
                                style={styles.iconHeaders}
                            />
                            <Text style={styles.statsTextHeaders}>Distance</Text>
                        </View>
                        <Text style={styles.statsText2}>4.32km</Text>
                    </View>
                    <View style={styles.statsTextContainer}>
                        <View style={styles.statsHeaderContainer}>
                            <IconMaterialIcons
                                name="speed" 
                                size={30}
                                style={styles.iconHeaders}
                            />
                            <Text style={styles.statsTextHeaders}>Speed</Text>
                        </View>
                        <Text style={styles.statsText3}>3m 47s</Text>
                    </View>
                    <View style={styles.statsButton}>
                        <TouchableOpacity 
                            onPress = {() => changeFlag()}
                        >
                            <IconSimpleLineIcons
                                name="arrow-down" 
                                size={45}
                                style={styles.iconArrow}
                            />
                        </TouchableOpacity>
                    </View>
                </View>}
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.85
    },
    mapContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'space-around',
        paddingBottom: 30,
        paddingTop: 10
    },
    icon: {
        color: 'white'
    },
    statsContainer: {
        backgroundColor: 'white',
        width: '100%',
        paddingBottom: 110,
        paddingTop: 10,
    },
    statsTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingRight: 50
    },
    statsButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statsHeaderContainer: {
        flexDirection: 'row'
    },
    statsTextHeaders: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    statsText1: {
        fontSize: 22,
        color: '#0085FF'
    },
    statsText2: {
        fontSize: 22,
        color: '#FF0000'
    },
    statsText3: {
        fontSize: 22,
        color: '#7000FF'
    },
    iconHeaders: {
        paddingRight: 5,
    },
    iconArrow: {
        color: 'black'
    }
});

export default MapRecording