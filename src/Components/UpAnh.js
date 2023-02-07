import React, { useState, useEffect } from 'react'
import { Button, Image, View, Platform, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

function UpAnh() {
    const [image, setImage] = useState(null)
    const [isLoad, setIsLoad] = useState(true)


    const pickImage = async () => {
        // setIsLoad(true)

        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        // console.log(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    // function handerCance() {
    //     setIsLoad(false)
    // }

    return (
        <View style={{
            alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'white',
            paddingVertical: 2,
            marginTop: 3
        }}>
            <Button title="Thay Ảnh" onPress={pickImage} style={{

            }} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    )
}

export default UpAnh