import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BASKET, HOME, SINGIN } from '../utils/routes';
import HomePage from '../screens/HomePage';
import BasketPage from '../screens/BasketPage';
import SignInPage from '../screens/SignInPage';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={HOME}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name={HOME} component={HomePage} />
            <Tab.Screen name={BASKET} component={BasketPage} />
        </Tab.Navigator>
    );
}

export default BottomTabs