import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Test() {

    const [apis, setApi] = useState([]);

    const Token = ''

    fetch('', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Token,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    return (
        <View>
            <Text>Test</Text>
        </View>
    )
}