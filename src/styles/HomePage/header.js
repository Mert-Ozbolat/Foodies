import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


const HeaderStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
    },
    user: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    customer: {
        marginLeft: 3
    },
    customerText: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.TextWhite
    },
    customerName: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.TextWhite
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    bell: {
        width: 30,
        height: 30
    },
    search: {
        width: 30,
        height: 30
    }
})


export default HeaderStyle