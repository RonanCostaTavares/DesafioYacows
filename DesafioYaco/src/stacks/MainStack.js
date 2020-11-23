import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import MainTab from './MainTab';


const Stack = createStackNavigator();


export default () => {

    return (
        <Stack.Navigator 
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="SignUp" component={SignUp} />


    </Stack.Navigator>
    );
    
}