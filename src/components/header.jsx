import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import HeaderStyle from '../styles/HomePage/header'

const Header = ({ item }) => {
    return (
        <View style={HeaderStyle.container}>
            <View style={HeaderStyle.left}>
                <Image style={HeaderStyle.user} source={require('../assets/images/user.png')} />
                <View style={HeaderStyle.customer}>
                    <Text style={HeaderStyle.customerText}>Customer</Text>
                    <Text style={HeaderStyle.customerName}>John K Square</Text>
                </View>
            </View>

            <View style={HeaderStyle.right}>
                <Image style={HeaderStyle.bell} source={require('../assets/icons/navigation/bell.png')} />
                <Image style={HeaderStyle.search} source={require('../assets/icons/navigation/search.png')} />
            </View>
        </View>
    )
}

export default Header

