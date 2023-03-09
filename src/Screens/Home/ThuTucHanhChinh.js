import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import ThuTucHanhChinh from './ThuTucHanhChinh';
import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import ThemeConText from '../../../config/themeConText';

export default function ThuTucHanhChinh({ navigation }) {

    const theme = useContext(ThemeConText)

    return (
        <View
            style={
                [
                    {
                        flex: 1
                    }
                    , {
                        backgroundColor: theme.maunen
                    }]}
        >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View
                    style={[
                        {
                            width: '90%',
                            borderRadius: 20,
                            backgroundColor: 'white',
                            marginTop: 40,
                            zIndex: 1,
                            opacity: 1
                        }
                        , {
                            backgroundColor: theme.background
                        }]}

                >
                    <View style={{
                        borderRadius: 20

                    }}>
                        <Text
                            style={[
                                {
                                    textAlign: 'justify',
                                    padding: 10,
                                    fontSize: 20
                                }
                                , {
                                    color: theme.color
                                }]}
                        >
                            Thủ Tục Hành Chính
                        </Text>
                        <TouchableOpacity
                            style={[
                                {
                                    backgroundColor: '#fff',
                                    width: '100%',
                                    paddingHorizontal: 20,
                                    marginTop: 10
                                }
                                , {
                                    backgroundColor: theme.background
                                }]}

                            onPress={() => navigation.navigate('Phiếu Đề Nghị')}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <AntDesign name="closecircleo" size={30} color="green" style={{
                                        borderRadius: 100,
                                        marginRight: 20,
                                        marginTop: 10
                                    }} />
                                    <Text
                                        style={[
                                            {
                                                fontSize: 21,
                                                opacity: 0.7,
                                                marginTop: 4,
                                                lineHeight: 40
                                            }
                                            , {
                                                color: theme.color
                                            }]}
                                    >
                                        Phiếu Đề Nghị
                                    </Text>
                                </View>

                                <AntDesign name="right" size={14}

                                    style={[
                                        {
                                            marginTop: 13,
                                            opacity: 0.4
                                        }
                                        , {
                                            color: theme.color
                                        }]}
                                />
                            </View>
                            <View
                                style={[
                                    {
                                        padding: 7,
                                        borderBottomWidth: 0.4,
                                        opacity: 0.5,
                                    }
                                    , {
                                        borderBottomColor: theme.color
                                    }]}
                            >

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={[
                            {
                                backgroundColor: '#fff',
                                width: '100%',
                                paddingHorizontal: 20,
                                marginTop: 10
                            }
                            , {
                                backgroundColor: theme.background
                            }]}
                            onPress={() => navigation.navigate('Phiếu Giải Trình')}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <AntDesign name="closecircleo" size={30} color="green" style={{
                                        borderRadius: 100,
                                        marginRight: 20,
                                        marginTop: 10
                                    }} />
                                    <Text
                                        style={[
                                            {
                                                fontSize: 21,
                                                opacity: 0.7,
                                                marginTop: 4,
                                                lineHeight: 40

                                            }
                                            , {
                                                color: theme.color
                                            }]}
                                    >
                                        Phiếu Giải Trình
                                    </Text>
                                </View>

                                <AntDesign name="right" size={14}
                                    style={[
                                        {
                                            marginTop: 13,
                                            opacity: 0.4
                                        }
                                        , {
                                            color: theme.color
                                        }]} />
                            </View>
                            <View style={[
                                {
                                    padding: 7,
                                    borderBottomWidth: 0.4,
                                    opacity: 0.5,
                                }
                                , {
                                    borderBottomColor: theme.color
                                }]}>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <TouchableOpacity style={[
                            {
                                backgroundColor: '#fff',
                                width: '100%',
                                paddingHorizontal: 20,
                                marginTop: 10
                            }
                            , {
                                backgroundColor: theme.background
                            }]}
                            onPress={() => navigation.navigate('Đơn Xin nghỉ phép')}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <AntDesign name="closecircleo" size={30} color="green" style={{
                                        borderRadius: 100,
                                        marginRight: 20,
                                        marginTop: 10
                                    }} />
                                    <Text
                                        style={[
                                            {
                                                fontSize: 21,
                                                opacity: 0.7,
                                                marginTop: 4,
                                                lineHeight: 40

                                            }
                                            , {
                                                color: theme.color
                                            }]}
                                    >
                                        Đơn Xin nghỉ phép
                                    </Text>
                                </View>

                                <AntDesign name="right" size={14}
                                    style={[
                                        {
                                            marginTop: 13,
                                            opacity: 0.4
                                        }
                                        , {
                                            color: theme.color
                                        }]} />
                            </View>
                            <View style={[
                                {
                                    padding: 7,
                                    borderBottomWidth: 0.4,
                                    opacity: 0.5,
                                }
                                , {
                                    borderBottomColor: theme.color
                                }]}>

                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={[
                            {
                                backgroundColor: '#fff',
                                width: '100%',
                                paddingHorizontal: 20,
                                marginTop: 10
                            }
                            , {
                                backgroundColor: theme.background
                            }]}
                            onPress={() => navigation.navigate('Đơn Xin Nghỉ Việc')}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <AntDesign name="closecircleo" size={30} color="green" style={{
                                        borderRadius: 100,
                                        marginRight: 20,
                                        marginTop: 10
                                    }} />
                                    <Text
                                        style={[
                                            {
                                                fontSize: 21,
                                                opacity: 0.7,
                                                marginTop: 4,
                                                lineHeight: 40

                                            }
                                            , {
                                                color: theme.color
                                            }]}
                                    >
                                        Đơn Xin Nghỉ Việc
                                    </Text>
                                </View>

                                <AntDesign name="right" size={14}
                                    style={[
                                        {
                                            marginTop: 13,
                                            opacity: 0.4
                                        }
                                        , {
                                            color: theme.color
                                        }]} />
                            </View>
                            <View style={[
                                {
                                    padding: 7,
                                    borderBottomWidth: 0.4,
                                    opacity: 0.5,
                                }
                                , {
                                    borderBottomColor: theme.color
                                }]}>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={[
                            {
                                backgroundColor: '#fff',
                                width: '100%',
                                paddingHorizontal: 20,
                                marginTop: 10
                            }
                            , {
                                backgroundColor: theme.background
                            }]}
                            onPress={() => navigation.navigate('Đơn Xin Đi Muộn')}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <AntDesign name="closecircleo" size={30} color="green" style={{
                                        borderRadius: 100,
                                        marginRight: 20,
                                        marginTop: 10
                                    }} />
                                    <Text
                                        style={[
                                            {
                                                fontSize: 21,
                                                opacity: 0.7,
                                                marginTop: 4,
                                                lineHeight: 40

                                            }
                                            , {
                                                color: theme.color
                                            }]}
                                    >
                                        Đơn Xin đi muộn - về sớm
                                    </Text>
                                </View>

                                <AntDesign name="right" size={14}
                                    style={[
                                        {
                                            marginTop: 13,
                                            opacity: 0.4
                                        }
                                        , {
                                            color: theme.color
                                        }]} />
                            </View>
                            <View style={[
                                {
                                    padding: 7,
                                    borderBottomWidth: 0.4,
                                    opacity: 0.5,
                                }
                                , {
                                    borderBottomColor: theme.color
                                }]}>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>


                        <TouchableOpacity style={[
                            {
                                backgroundColor: '#fff',
                                width: '100%',
                                paddingHorizontal: 20,
                                marginTop: 10
                            }
                            , {
                                backgroundColor: theme.background
                            }]}
                            onPress={() => navigation.navigate('Đơn Xin Đi Muộn')}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <AntDesign name="closecircleo" size={30} color="green" style={{
                                        borderRadius: 100,
                                        marginRight: 20,
                                        marginTop: 10
                                    }} />
                                    <Text
                                        style={[
                                            {
                                                fontSize: 21,
                                                opacity: 0.7,
                                                marginTop: 4,
                                                lineHeight: 40

                                            }
                                            , {
                                                color: theme.color
                                            }]}
                                    >
                                        Đơn Xin đăng ký parttime
                                    </Text>
                                </View>

                                <AntDesign name="right" size={14}
                                    style={[
                                        {
                                            marginTop: 13,
                                            opacity: 0.4
                                        }
                                        , {
                                            color: theme.color
                                        }]} />
                            </View>
                            <View style={[
                                {
                                    padding: 7,
                                    borderBottomWidth: 0.4,
                                    opacity: 0.5,
                                }
                                , {
                                    borderBottomColor: theme.color
                                }]}>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 30
                    }}>


                        <TouchableOpacity style={[
                            {
                                backgroundColor: '#fff',
                                width: '100%',
                                paddingHorizontal: 20,
                                marginTop: 10
                            }
                            , {
                                backgroundColor: theme.background
                            }]}
                            onPress={() => navigation.navigate('Đơn Xin Đi Muộn')}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <AntDesign name="closecircleo" size={30} color="green" style={{
                                        borderRadius: 100,
                                        marginRight: 20,
                                        marginTop: 10
                                    }} />
                                    <Text
                                        style={[
                                            {
                                                fontSize: 21,
                                                opacity: 0.7,
                                                marginTop: 4,
                                                lineHeight: 40

                                            }
                                            , {
                                                color: theme.color
                                            }]}
                                    >
                                        Phiếu Đề Nghị
                                    </Text>
                                </View>

                                <AntDesign name="right" size={14}
                                    style={[
                                        {
                                            marginTop: 13,
                                            opacity: 0.4
                                        }
                                        , {
                                            color: theme.color
                                        }]} />
                            </View>
                            <View style={[
                                {
                                    padding: 7,
                                    borderBottomWidth: 0.4,
                                    opacity: 0.5,
                                }
                                , {
                                    borderBottomColor: theme.color
                                }]}>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
