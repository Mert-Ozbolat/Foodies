import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BASKET, HOME } from '../utils/routes';
import HomePage from '../screens/HomePage';
import BasketPage from '../screens/BasketPage';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={HOME}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                },
                tabBarActiveTintColor: '#007bff',
                tabBarInactiveTintColor: '#6c757d',
            }}
        >
            <Tab.Screen name={HOME} component={HomePage} />
            <Tab.Screen name={BASKET} component={BasketPage} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
