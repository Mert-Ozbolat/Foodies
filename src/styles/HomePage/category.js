import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";



const CategoryStyle = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    itemContainer: {
        width: '22%', // 4 sütun için yüzde genişlik
        marginBottom: 15,
        alignItems: 'center', // İçerikleri yatayda ortalar
        borderRadius: 8,
        padding: 10,
    },
    image: {
        width: 40,
        height: 40,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 12,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
    },
})


export default CategoryStyle