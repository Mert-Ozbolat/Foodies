const CardStyle = StyleSheet.create({
    card: {
        width: '48%', // 2 kolon için genişlik (kenar boşluklarına göre ayarlandı)
        backgroundColor: '#3f3f3f',
        borderRadius: 8, // Kartın köşelerini yuvarla
        padding: 10, // İçerik için iç boşluk
        marginBottom: 15, // Kartlar arasında dikey boşluk
        alignItems: 'center', // İçeriği yatayda ortala
        justifyContent: 'center', // İçeriği dikeyde ortala
        shadowColor: '#000', // Gölge için renk
        shadowOpacity: 0.1, // Gölge opaklığı
        shadowOffset: { width: 0, height: 2 }, // Gölge konumu
        shadowRadius: 4, // Gölge yayılması
        elevation: 3, // Android için gölge (yükseklik)
    },

    foodImg: {
        width: 80, // Daha büyük resim
        height: 80,
        marginBottom: 10, // Resim ve metin arasında boşluk
        borderRadius: 8, // Resmin köşelerini yuvarla
    },

    foodName: {
        color: colors.TextWhite,
        fontSize: 16, // Başlık boyutu
        fontWeight: '600',
        textAlign: 'center', // Metni ortala
        marginBottom: 5, // Metinler arası boşluk
    },

    fooddesc: {
        color: colors.TextWhite,
        fontSize: 14, // Açıklama boyutu
        fontWeight: '400',
        textAlign: 'left', // Sol hizalama
        marginBottom: 5, // Açıklama ve fiyat arasında boşluk
        flex: 1, // Genişlik ayarı
    },

    foodPrice: {
        color: colors.TextWhite,
        fontSize: 15, // Fiyat boyutu
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
        flexDirection: 'row',
        justifyContent: 'space-between', // Aralarındaki boşluk
        width: '100%', // Tam genişlik
    }
});
