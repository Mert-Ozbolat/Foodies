import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

const SignInStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.BgColor,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 55,
        fontWeight: '500',
        color: colors.TextWhite,
        textAlign: 'center',
        letterSpacing: 2,
        marginTop: 20,
    },


    // Login Buttons

    buttons: {
        flex: 1
    },
    continueBtnContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },



    continueBtn: {
        flexDirection: 'row', // İkon ve yazıyı yatay hizalar
        alignItems: 'center', // Dikeyde ortalar
        backgroundColor: colors.LoginBtn,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        width: '100%',
    },

    imageSection: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 15
    },

    continueImg: {
        display: 'flex',
        height: 40,
        width: 40,
        padding: 15
    },

    textSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'flex-start',
    },

    continueText: {
        color: colors.TextWhite,
        fontWeight: '400',
        fontSize: 15
    },


    // Horizantal Line
    line: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 1,
        backgroundColor: '#8f8f8f',
        borderRadius: 2
    },

    or: {
        position: 'absolute',
        color: colors.TextWhite,
        paddingHorizontal: 20,
        fontWeight: '500',
        fontSize: 19,
        top: -15,
        backgroundColor: colors.BgColor
    },

    // Sign Button

    signinContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        position: 'relative'
    },

    signInBtn: {
        padding: 20,
        backgroundColor: colors.Button1,
        borderRadius: 33,
        width: 390,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    signInText: {
        color: colors.TextWhite,
        fontSize: 15,
        fontWeight: '500'
    },

    create: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    createText: {
        color: colors.TextWhite,
        fontSize: 15,
        fontWeight: '400'
    },

    signUpText: {
        color: colors.TextGreen,
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 10
    }
});

export default SignInStyle;
