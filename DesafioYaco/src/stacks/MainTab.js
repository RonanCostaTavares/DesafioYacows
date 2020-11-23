import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Car from '../screens/Car';


const Tab = createBottomTabNavigator();

 
export default () => (

    <Tab.Navigator tabBar={props=> <CustomTabBar {...props}/>}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Carrinho" component={Car}/>
    </Tab.Navigator>

)