import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft2 } from 'iconsax-react-native';
import ProductStyle from '../../styles/ProductPage';

const BackButton = () => {
    const navigation = useNavigation();

    return (
        <View style={ProductStyle.header}>
            <Pressable onPress={() => navigation.goBack()}>
                <ArrowLeft2 size={32} color="#FFF" />
            </Pressable>
        </View>
    );
};

export default BackButton;
