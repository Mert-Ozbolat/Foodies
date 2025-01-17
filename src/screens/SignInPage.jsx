import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import SignInStyle from '../styles/SignInStyle';
import LoginBtn from '../components/LoginButtons';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { loginWithGoogle } from '../store/action/loadinAction';
import { HOME } from '../utils/routes';



const SignInPage = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const { auth, user, loading, error } = useSelector((state) => state.login);

    const handleGoogleSignIn = () => {
        dispatch(loginWithGoogle())
    }

    const handleSignin = () => {
        navigation.navigate(HOME)
    }

    useEffect(() => {
        if (auth) {
            navigation.replace('Home')
        }
    }, [auth])

    return (
        <View style={SignInStyle.container}>
            <Image
                style={SignInStyle.image}
                source={require('../assets/illustrations/Group2.png')}
            />
            <Text style={SignInStyle.text}>Let's You In</Text>

            <LoginBtn google={handleGoogleSignIn} signin={handleSignin} />
            {
                loading ? (
                    <Text>Yükleniyor...</Text>
                ) : error && (
                    <Text>Hata oldu://</Text>
                )
            }
        </View>
    );
};

export default SignInPage;



