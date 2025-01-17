import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import SignInStyle from '../../styles/SignInStyle';
import { useNavigation } from '@react-navigation/native';
import { HOME } from '../../utils/routes';

const LoginBtn = ({ google }) => {
    const navigation = useNavigation();

    return (
        <View style={SignInStyle.buttons}>

            {/* Social Media Buttons */}
            <View style={SignInStyle.continueBtnContainer}>

                <TouchableOpacity style={SignInStyle.continueBtn}>
                    <View style={SignInStyle.imageSection}>
                        <Image
                            style={SignInStyle.continueImg}
                            source={require('../../assets/images/facebook.png')}
                        />
                    </View>

                    <View style={SignInStyle.textSection}>
                        <Text style={SignInStyle.continueText}>Continue with Facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={SignInStyle.continueBtn} onPress={google}>
                    <View style={SignInStyle.imageSection}>
                        <Image
                            style={SignInStyle.continueImg}
                            source={require('../../assets/images/google.png')}
                        />
                    </View>
                    <View style={SignInStyle.textSection}>
                        <Text style={SignInStyle.continueText}>Continue with Google</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={SignInStyle.continueBtn}>
                    <View style={SignInStyle.imageSection}>
                        <Image
                            style={SignInStyle.continueImg}
                            source={require('../../assets/images/apple.png')}
                        />
                    </View>

                    <View style={SignInStyle.textSection}>
                        <Text style={SignInStyle.continueText}>Continue with Apple</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={SignInStyle.line}>
                <Text style={SignInStyle.or}>or</Text>
            </View>

            <View style={SignInStyle.signinContainer}>
                <TouchableOpacity style={SignInStyle.signInBtn}
                    onPress={() => navigation.navigate('BottomTabs', { screen: 'Home' })}>
                    <Text style={SignInStyle.signInText}>Sign in with Contact Number</Text>
                </TouchableOpacity>

                <View style={SignInStyle.create}>
                    <Text style={SignInStyle.createText}>Create a new account</Text>
                    <TouchableOpacity>
                        <Text style={SignInStyle.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default LoginBtn;