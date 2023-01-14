import React, { useState } from 'react';

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
    ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// import Call API
import call from 'react-native-phone-call';

const Phone = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('');

    const Numbers = [
        { id: 1, So: 1 },
        { id: 2, So: 2 },
        { id: 3, So: 3 },
        { id: 4, So: 4 },
        { id: 5, So: 5 },
        { id: 6, So: 6 },
        { id: 7, So: 7 },
        { id: 8, So: 8 },
        { id: 9, So: 9 },
        { id: 10, So: '*' },
        { id: 11, So: 0 },
        { id: 12, So: "#" },

    ]

    function handerValue(So) {
        console.log(So)
        setInputValue([...inputValue, So])
        // console.log(inputValue)
    }

    const triggerCall = () => {
        // Check for perfect 10 digit length
        if (inputValue.length != 10) {
            alert('Please insert correct contact number');
            return;
        }

        const args = {
            number: inputValue,
            prompt: true,
        };
        // Make a call
        call(args).catch(console.error);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <View style={{
                    height: 100,
                    backgroundColor: '#33CCFF',
                    justifyContent: 'center',
                    marginBottom: 10,
                    borderBottomRightRadius: 50,
                    borderBottomLeftRadius: 50
                }}>
                    <Text style={{
                        fontSize: 30,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Gọi Điện
                    </Text>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{
                            flex: 1
                        }}>
                            {/* <Text>
                                {inputValue}
                            </Text> */}
                            <TextInput
                                value={inputValue}
                                onChangeText={
                                    (inputValue) => setInputValue(inputValue)
                                }
                                placeholder={'Enter Conatct Number to Call'}
                                keyboardType="numeric"
                                style={styles.textInput}
                            />
                            <View style={{
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 50
                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-around'
                                }}>
                                    {
                                        Numbers.map(Number => (
                                            <TouchableOpacity
                                                key={Number.id}
                                                style={{
                                                    width: 100,
                                                    height: 80
                                                }}
                                                onPress={() => handerValue(Number.So)}
                                            >
                                                <Text style={{
                                                    textAlign: 'center',
                                                    fontSize: 40
                                                }}>
                                                    {Number.So}
                                                </Text>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </View>

                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStyle}
                                    onPress={triggerCall}>
                                    <Ionicons name="ios-call-outline" size={24} color="white" style={{
                                        textAlign: 'center'
                                    }} />
                                </TouchableOpacity>

                                {/* <TouchableOpacity
                                onPress={() => navigation.navigate('Home')}
                            >
                                <Text>
                                    Home
                                </Text>
                            </TouchableOpacity> */}
                            </View>
                        </View>

                    </TouchableWithoutFeedback>
                    <View style={{
                        height: 1,
                        backgroundColor: 'black',
                        marginBottom: 20
                    }}>

                    </View>
                </KeyboardAvoidingView>
            </View>

        </ScrollView>
    );
};

export default Phone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 10,
        textAlign: 'center',
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
        width: 80,
        height: 80,
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