import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store/store'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/router/StackNavigator'
import HomePage from './src/screens/HomePage';
import BottomTabs from './src/router/BottomTabNavigator';

GoogleSignin.configure({
  webClientId: '894419976793-3fl0uir1c3m2fk1seadhjq010u197o7g.apps.googleusercontent.com', // Web Client ID
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App