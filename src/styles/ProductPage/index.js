import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const ProductStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BgColor,
        paddingHorizontal: 16, // Kenar boşlukları eklendi
    },
    section: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        height: "60%",
    },
    productImg: {
        width: "100%",
        height: "70%",
        resizeMode: "contain", // Görüntüyü kırpmamak için
    },
    descriptions: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: 20,
        width: "90%",
    },
    productName: {
        color: colors.TextGreen,
        fontSize: 22,
        fontWeight: "bold",
        maxWidth: "100%",
    },
    productDesc: {
        color: colors.TextWhite,
        fontSize: 16,
        fontWeight: "400",
        maxWidth: "100%",
        marginTop: 5,
    },
    footer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20, // Daha iyi boşluk
    },
    button: {
        width: "100%", // Hata düzeltildi
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        paddingHorizontal: 15,
        backgroundColor: colors.Button1,
        borderRadius: 30,
        shadowColor: "#000", // Hafif gölge efekti eklendi
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, // Android için gölge
    },
    buttonText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: colors.TextWhite,
    },
});

export default ProductStyle;
