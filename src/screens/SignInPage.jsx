import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import SignInStyle from '../styles/SignInStyle';
import LoginBtn from '../components/LoginButtons';


const SignInPage = () => {
    return (
        <View style={SignInStyle.container}>
            <Image
                style={SignInStyle.image}
                source={require('../assets/illustrations/Group2.png')}
            />
            <Text style={SignInStyle.text}>Let's You In</Text>

            <LoginBtn />
        </View>
    );
};

export default SignInPage;



