import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys
import { ScrollView } from 'react-native-virtualized-view'
import { Feather } from '@expo/vector-icons';

function App() {

    return (
        <ScrollView>
            <View style={{
                // padding: 10,
                backgroundColor: '#fff',
                flex: 1
            }}>

                {/* thông báo */}
                <View style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    marginTop: 5

                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 20,
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 70,
                            height: 70,
                            backgroundColor: '#66CC33',
                            borderRadius: 200,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Feather name="phone" size={37} color="white" style={{

                            }} />

                        </View>
                        <View style={{
                            // flexDirection: 'row',
                            marginRight: 56,
                            marginLeft: 5,
                            marginTop: 10,
                            marginBottom: 10
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',

                            }}>
                                Phòng Điều Hành:
                                <Text style={{
                                    fontWeight: '400'
                                }}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                </Text>
                            </Text>

                            <Text style={{
                                fontSize: 13,
                                marginTop: 5,
                                opacity: 0.5
                            }}>
                                14/01/2022 lúc 10h00
                            </Text>
                        </View>
                    </View>
                </View>

                {/* thông báo */}
                <View style={{
                    backgroundColor: '#eeeeee',
                    width: '100%',
                    marginTop: 5

                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 20,
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 70,
                            height: 70,
                            backgroundColor: '#66CC33',
                            borderRadius: 200,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Feather name="phone" size={37} color="white" style={{

                            }} />

                        </View>
                        <View style={{
                            // flexDirection: 'row',
                            marginRight: 56,
                            marginLeft: 5,
                            marginTop: 10,
                            marginBottom: 10
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',

                            }}>
                                Phòng Điều Hành:
                                <Text style={{
                                    fontWeight: '400'
                                }}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                </Text>
                            </Text>

                            <Text style={{
                                fontSize: 13,
                                marginTop: 5,
                                opacity: 0.5
                            }}>
                                14/01/2022 lúc 10h00
                            </Text>
                        </View>
                    </View>
                </View>

                {/* thông báo */}
                <View style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    marginTop: 5

                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 20,
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 70,
                            height: 70,
                            backgroundColor: '#66CC33',
                            borderRadius: 200,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Feather name="phone" size={37} color="white" style={{

                            }} />

                        </View>
                        <View style={{
                            // flexDirection: 'row',
                            marginRight: 56,
                            marginLeft: 5,
                            marginTop: 10,
                            marginBottom: 10
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',

                            }}>
                                Phòng Điều Hành:
                                <Text style={{
                                    fontWeight: '400'
                                }}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                </Text>
                            </Text>

                            <Text style={{
                                fontSize: 13,
                                marginTop: 5,
                                opacity: 0.5
                            }}>
                                14/01/2022 lúc 10h00
                            </Text>
                        </View>
                    </View>
                </View>

                {/* thông báo */}
                <View style={{
                    backgroundColor: '#eeeeee',
                    width: '100%',
                    marginTop: 5

                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 20,
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 70,
                            height: 70,
                            backgroundColor: '#66CC33',
                            borderRadius: 200,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Feather name="phone" size={37} color="white" style={{

                            }} />

                        </View>
                        <View style={{
                            // flexDirection: 'row',
                            marginRight: 56,
                            marginLeft: 5,
                            marginTop: 10,
                            marginBottom: 10
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',

                            }}>
                                Phòng Điều Hành:
                                <Text style={{
                                    fontWeight: '400'
                                }}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                </Text>
                            </Text>

                            <Text style={{
                                fontSize: 13,
                                marginTop: 5,
                                opacity: 0.5
                            }}>
                                14/01/2022 lúc 10h00
                            </Text>
                        </View>
                    </View>
                </View>

                {/* thông báo */}
                <View style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    marginTop: 5

                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 20,
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 70,
                            height: 70,
                            backgroundColor: '#66CC33',
                            borderRadius: 200,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Feather name="phone" size={37} color="white" style={{

                            }} />

                        </View>
                        <View style={{
                            // flexDirection: 'row',
                            marginRight: 56,
                            marginLeft: 5,
                            marginTop: 10,
                            marginBottom: 10
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',

                            }}>
                                Phòng Điều Hành:
                                <Text style={{
                                    fontWeight: '400'
                                }}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                </Text>
                            </Text>

                            <Text style={{
                                fontSize: 13,
                                marginTop: 5,
                                opacity: 0.5
                            }}>
                                14/01/2022 lúc 10h00
                            </Text>
                        </View>
                    </View>
                </View>

                {/* thông báo */}
                <View style={{
                    backgroundColor: '#eeeeee',
                    width: '100%',
                    marginTop: 5

                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 20,
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 70,
                            height: 70,
                            backgroundColor: '#66CC33',
                            borderRadius: 200,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Feather name="phone" size={37} color="white" style={{

                            }} />

                        </View>
                        <View style={{
                            // flexDirection: 'row',
                            marginRight: 56,
                            marginLeft: 5,
                            marginTop: 10,
                            marginBottom: 10
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',

                            }}>
                                Phòng Điều Hành:
                                <Text style={{
                                    fontWeight: '400'
                                }}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                </Text>
                            </Text>

                            <Text style={{
                                fontSize: 13,
                                marginTop: 5,
                                opacity: 0.5
                            }}>
                                14/01/2022 lúc 10h00
                            </Text>
                        </View>
                    </View>
                </View>

                {/* thông báo */}
                <View style={{
                    backgroundColor: '#eeeeee',
                    width: '100%',
                    marginTop: 5

                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 20,
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 70,
                            height: 70,
                            backgroundColor: '#66CC33',
                            borderRadius: 200,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Feather name="phone" size={37} color="white" style={{

                            }} />

                        </View>
                        <View style={{
                            // flexDirection: 'row',
                            marginRight: 56,
                            marginLeft: 5,
                            marginTop: 10,
                            marginBottom: 10
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',

                            }}>
                                Phòng Điều Hành:
                                <Text style={{
                                    fontWeight: '400',
                                    marginLeft: 6
                                }}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                </Text>
                            </Text>

                            <Text style={{
                                fontSize: 13,
                                marginTop: 5,
                                opacity: 0.5
                            }}>
                                14/01/2022 lúc 10h00
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

export default App
