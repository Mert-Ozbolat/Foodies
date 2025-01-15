import { View, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import WelcomeStyle from '../../styles/GetStarted/WelcomeStyle';

const Welcome = () => {
    return (
        <LinearGradient
            colors={['#000000', '#FFFFFF']}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={WelcomeStyle.container}
        >
            <Image style={WelcomeStyle.image} source={require('../../assets/images/bg.png')} />
        </LinearGradient>
    );
};

export default Welcome;
