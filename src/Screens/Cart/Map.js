import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
// import '../gadm41_VNM_3.json'
// import api from './a.json'
import { LatLng, LeafletView } from 'react-native-leaflet-view';
// goongjs.accessToken = 'z9E6Puwilt35q3RGKNsxm1NFUaCz8bjPBS8vPYdh';
import MapView, { Marker, Polyline, Geojson } from 'react-native-maps';

export default function Map() {

    const [apis, setApi] = useState([]);
    const [value, setValue] = useState();

    // useEffect(() => {
    //     fetch('http://192.168.1.5:3000/apimaps/' + value)
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }, [])

    // function handerSreach() {
    //     // console.log(value)
    //     fetch('http://192.168.1.5:3000/apimaps/')
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }
    // console.log(apis)

    const myPlace = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: [20.165329, 105.844287],
                }
            }
        ]
    };



    return (
        <View style={{ flex: 1 }}>
            <MapView

                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 21.02898506099829,
                    longitude: 105.82494670809366,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                followsUserLocation={true}
                loadingEnabled={true}
                showsMyLocationButton={true}
                showsCompass={true}
                showsScale={true}
                showsTraffic={false}
                showsIndoors={true}
                showsBuildings={true}
                minZoomLevel={0}
                maxZoomLevel={20}
                zoomEnabled={true}
                rotateEnabled={true}
                scrollEnabled={true}
                pitchEnabled={true}
                toolbarEnabled={true}
                moveOnMarkerPress={true}
                showsIndoorLevelPicker={true}
                mapType="standard"
                key="AIzaSyCCfvra_ghVhjRc7lQ4M5zjzFcKk6vdcOI"
            >
                <Marker
                    coordinate={{ latitude: 21.02898506099829, longitude: 105.82494670809366 }}
                    title="My Marker"
                    description="Some description"
                />
                <Marker
                    coordinate={{ latitude: 20.98973615605541, longitude: 105.74986114397838 }}
                    title="My Marker"
                    description="Some description"
                />

                <Polyline
                    coordinates={[
                        { latitude: 20.98973615605541, longitude: 105.74986114397838 },
                        { latitude: 21.02898506099829, longitude: 105.82494670809366 },
                        // { latitude: 20.7665248, longitude: 105.4161628 },
                        // { latitude: 37.7734153, longitude: -122.4577787 },
                        // { latitude: 37.7948605, longitude: -122.4596065 },
                        // { latitude: 37.8025259, longitude: -122.4351431 }
                    ]}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        // '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        // '#B24112',
                        // '#E5845C',
                        // '#238C23',
                        // '#7F0000'
                    ]}
                    strokeWidth={2}
                />

                <Geojson
                    geojson={myPlace}
                    strokeColor="red"
                    fillColor="green"
                    strokeWidth={2}
                />
            </MapView>
        </View>
    )
}