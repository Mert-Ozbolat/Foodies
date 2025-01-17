import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from '../screens/SignInPage';
import { SINGIN } from '../utils/routes';
import BottomTabs from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={SINGIN} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SINGIN} component={SignInPage} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
    );
}


export default StackNavigator