import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


const CardStyle = StyleSheet.create({
    card: {
        display: 'flex',
        marginTop: 60,
        height: 200,
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingTop: 70,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#fff',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        position: 'relative',
    },

    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    foodImg: {
        objectFit: 'contain',
        width: 140,
        height: 140,
        marginBottom: 10,
        position: 'absolute',
        top: -140,
        left: '50%',
        transform: [{ translateX: -70 }],
    },


    foodName: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 5,
    },

    fooddesc: {
        color: '#000',
        fontSize: 16, // Açıklama boyutu
        fontWeight: '500',
        textAlign: 'left', // Sol hizalama
        marginBottom: 5, // Açıklama ve fiyat arasında boşluk
    },

    foodPrice: {
        color: colors.TextGreen,
        fontSize: 16, // Fiyat boyutu
        fontWeight: '500',
        textAlign: 'right', // Sağ hizalama
        flex: 1, // Genişlik ayarı
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },

    list: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },


    cardBottom: {
        display: 'flex',
        flexDirection: 'col',
        marginTop: 32,
    },

    cardInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', // Aralarındaki boşluk
        width: '100%', // Tam genişlik
        marginTop: 17
    }
});


export default CardStyle