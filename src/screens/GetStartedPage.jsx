import { View } from 'react-native'
import React from 'react'
import GeneralStyle from '../styles/GeneralStyle'
import Welcome from '../components/Onboaring/Welcome';

const GetStartedPage = () => {
    return (
        <View style={GeneralStyle.container}>
            <Welcome />
        </View>
    )
}

export default GetStartedPage