import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

import Ionicons from 'react-native-vector-icons/Ionicons';

// laays duwx ảnh từ bộ sưu tập

export default function ChupAnh() {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();
    const [type, setType] = useState(CameraType.back);

    const [permission, requestPermission] = Camera.useCameraPermissions();



    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
            setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
        })();
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text>Requesting permissions...</Text>
    } else if (!hasCameraPermission) {
        return <Text>Permission for camera not granted. Please change this in settings.</Text>
    }




    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        };

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    };
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
        // console.log('a')
    }
    if (photo) {
        let sharePic = () => {
            shareAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };

        let savePhoto = () => {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };

        return (
            <SafeAreaView style={styles.container}>
                {/* <Text>1</Text> */}
                <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
                <Button title="Share" onPress={sharePic} />
                {hasMediaLibraryPermission ? <Button title="Lưu Vào Ảnh" onPress={savePhoto} /> : undefined}
                <Button title="Hủy" onPress={() => setPhoto(undefined)} />
                {/* <Button onPress={requestPermission} title="grant permission" /> */}

            </SafeAreaView>
        );
    }

    return (

        <Camera style={styles.container} ref={cameraRef} type={type}>

            <StatusBar style="auto" />
            <View style={styles.buttonContainer}>
                {/* <View style={styles.buttonContainer}> */}
                {/* <Button title="Take Pic" /> */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={takePic}
                >
                    <Ionicons name='camera-outline' style={{
                        fontSize: 50,
                        color: 'white'

                    }}
                    />
                </TouchableOpacity>
                {/* </View> */}
                <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                    <Ionicons name='sync-outline' style={{
                        fontSize: 50,
                        color: 'white'

                    }} />
                </TouchableOpacity>
            </View>
        </Camera>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end'
    },
    preview: {
        alignSelf: 'stretch',
        flex: 1
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        zIndex: 1
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        zIndex: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
});