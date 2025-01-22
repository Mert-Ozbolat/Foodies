import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


const ProductStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.BgColor,
        flex: 1
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        height: '60%'
    },
    productImg: {
        width: '100%',
        height: '70%'
    },
    descriptions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        flexWrap: 'wrap',
    },
    productName: {
        marginRight: 5,
        color: colors.TextGreen,
        fontSize: 22,
        fontWeight: '500',
        maxWidth: '90%',
        overflow: 'hidden',
    },
    productDesc: {
        color: colors.TextWhite,
        fontSize: 16,
        fontWeight: '500',
        maxWidth: '90%',
        overflow: 'hidden',
        flexWrap: 'wrap',
    },
    footer: {
        flex: 1,
        alignSelf: 'flex-end',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '%100',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 20,
        backgroundColor: colors.Button1,
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: colors.TextWhite,
    },

})


export default ProductStyle