import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from '../screens/SignInPage';
import { PRODUCT, SINGIN } from '../utils/routes';
import BottomTabs from './BottomTabNavigator';
import ProductPage from '../screens/ProductPage';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={SINGIN} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SINGIN} component={SignInPage} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name={PRODUCT} component={ProductPage} />
        </Stack.Navigator>
    );
}


export default StackNavigator