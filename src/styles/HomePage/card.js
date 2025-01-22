import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


const CardStyle = StyleSheet.create({
    card: {
        marginTop: 60,
        height: 227,
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 35, // Kartın köşelerini yuvarla
        paddingTop: 70, // Kartın üst kısmına padding ekle
        paddingLeft: 10, // İçerik için iç boşluk
        paddingRight: 10, // İçerik için iç boşluk
        paddingBottom: 10, // İçerik için iç boşluk
        marginBottom: 15, // Kartlar arasında dikey boşluk
        alignItems: 'center', // İçeriği yatayda ortala
        justifyContent: 'center', // İçeriği üstte başlat
        shadowColor: '#fff', // Gölge için renk
        shadowOpacity: 0.1, // Gölge opaklığı
        shadowOffset: { width: 0, height: 2 }, // Gölge konumu
        shadowRadius: 4, // Gölge yayılması
        elevation: 3, // Android için gölge (yükseklik)
        position: 'relative',
    },

    foodImg: {
        objectFit: 'contain',
        width: 137, // Daha büyük resim
        height: 137,
        marginBottom: 10, // Resim ve metin arasında boşluk
        position: 'absolute',
        top: -55, // Resmi kartın üst kısmına yerleştir
    },

    foodName: {
        color: '#000',
        fontSize: 18, // Başlık boyutu
        fontWeight: '600',
        textAlign: 'center', // Metni ortala
        marginBottom: 5, // Metinler arası boşluk
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
        paddingHorizontal: 10, // Ekran kenarından boşluk
        flexDirection: 'row',
        flexWrap: 'wrap', // Satır düzeni
        justifyContent: 'space-between', // Kartlar arasında eşit boşluk
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