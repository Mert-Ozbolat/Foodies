import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BASKET, HOME, SINGIN } from '../utils/routes';
import HomePage from '../screens/HomePage';
import BasketPage from '../screens/BasketPage';
import { Image, View } from 'react-native';
import SignInPage from '../screens/SignInPage';
import { colors } from './../theme/colors';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={HOME}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000', // Arka plan siyah
                    height: 60, // Yükseklik artırıldı
                },
            }}
        >
            <Tab.Screen
                name={HOME}
                component={HomePage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/icons/navigation/home.png')}
                                style={{ width: 30, height: 30, tintColor: focused ? colors.Button1 : 'white' }}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name={SINGIN}
                component={SignInPage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/icons/navigation/email.png')}
                                style={{ width: 25, height: 25, tintColor: focused ? colors.Button1 : 'white' }}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name={'deneme'}
                component={SignInPage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/icons/navigation/user.png')}
                                style={{ width: 25, height: 25, tintColor: focused ? colors.Button1 : 'white' }}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name={'deneme2'}
                component={SignInPage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/icons/navigation/setting.png')}
                                style={{ width: 25, height: 25, tintColor: focused ? colors.Button1 : 'white' }}
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
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/icons/navigation/wallet.png')}
                                style={{ width: 25, height: 25, tintColor: focused ? colors.Button1 : 'white' }}
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
