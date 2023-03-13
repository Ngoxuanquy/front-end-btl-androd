import React, { useState, useContext } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    RefreshControl
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';

// import Call API
import call from 'react-native-phone-call';
import { useEffect } from 'react';

function Testphone(number) {

    console.log(number)

    const args = {
        number: number,
        prompt: true,
    };
    // Make a call
    call(args).catch(console.error);



    return (
        <View>
            <View style={{
            }}>
                <LinearGradient
                    // Background Linear Gradient
                    start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
                    colors={['#bf57f4', '#997af4', '#878bf5', '#7a84f3']}
                    style={{
                        width: "100%",
                        height: 120,
                        flex: -1,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <View style={{
                        height: 100,
                        justifyContent: 'center',
                        // marginBottom: 10,
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10
                    }}>
                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                            textAlign: 'center',
                            marginTop: 40
                        }}>
                            Gọi Điện
                        </Text>
                    </View>
                </LinearGradient>

            </View>

        </View>
    );
};

export default Testphone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 10,
        textAlign: 'center',
        marginTop: -10,
        zIndex: -1
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: -15,
        padding: 10,
        backgroundColor: '#8ad24e',
        width: 60,
        height: 60,
        borderRadius: 100
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    textInput: {
        height: 60,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 7,
        fontSize: 24
    },
});