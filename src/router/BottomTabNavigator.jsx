import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BASKET, HOME } from '../utils/routes';
import HomePage from '../screens/HomePage';
import BasketPage from '../screens/BasketPage';
import { Image, View } from 'react-native';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={HOME}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000', // Arka plan siyah yapıld
                    height: 60, // Yükseklik artırıldı
                },
            }}
        >
            <Tab.Screen
                name={HOME}
                component={HomePage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/icons/navigation/home.png')}
                                style={{ width: 25, height: 25 }}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name={BASKET}
                component={BasketPage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/icons/navigation/email.png')}
                                style={{ width: 25, height: 25 }}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
