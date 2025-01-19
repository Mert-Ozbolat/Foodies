import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


const SearchStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 12,
        position: 'relative'
    },
    search: {
        position: 'absolute',
        zIndex: 1,
        height: 20,
        width: 20,
        left: 7,
        top: 15,
    },
    input: {
        flex: 1,
        borderRadius: 6,
        backgroundColor: colors.InputBg,
        paddingHorizontal: 40
    }
})


export default SearchStyle