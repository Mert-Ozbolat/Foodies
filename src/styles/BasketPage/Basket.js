import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";



const BasketStyle = StyleSheet.create({
    Header: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '600',
        color: colors.TextWhite,
        marginVertical: 10
    },
    cart: {
        flexDirection: "row", // Yan yana hizalama
        alignItems: "center", // Dikey hizalama
        alignSelf: "center",
        backgroundColor: colors.LoginBtn, // Koyu arka plan
        borderRadius: 12, // Köşeleri yuvarlat
        padding: 12,
        marginVertical: 6, // Üst-alt boşluk
        height: 125,
        width: 390,
        marginTop: 30,
        position: 'relative'
    },
    cartLeft: {
        width: 140, // Sabit genişlik
        height: 150, // Sabit yükseklik
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",

    },
    itemImage: {
        objectFit: 'contain',
        width: '100%', // Sabit genişlik
        height: '100%', // Sabit yükseklik
        position: 'absolute',
        left: -10,
    },
    cartRight: {
        flex: 1, // Kalan alanı kaplasın
        paddingLeft: 16, // Soldan boşluk bırak
    },
    cartHead: {
        flexDirection: "row", // Yatay hizalama
        justifyContent: "space-between", // İsmi sola, çöp kutusunu sağa al
        alignItems: "center",
        marginBottom: 6, // Altına boşluk bırak
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff", // Beyaz yazı rengi
    },
    cartBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 15
    },
    price: {
        fontSize: 25,
        color: colors.TextGreen,
        fontWeight: "bold",
    },
    quantity: {
        fontSize: 14,
        color: "#fff",
    }
});



export default BasketStyle