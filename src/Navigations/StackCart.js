import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../Screens/Cart/CartScrenn';

const Stack = createNativeStackNavigator();

function StackCart() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cart_home"
                component={Cart}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default StackCart;
