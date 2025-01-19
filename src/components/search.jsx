import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SearchStyle from '../styles/HomePage/search'

const Search = () => {
    return (
        <View style={SearchStyle.container}>
            <Image style={SearchStyle.search} source={require('../assets/icons/navigation/search.png')} />
            <TextInput
                style={SearchStyle.input}
                placeholder="Search your interesting foods..."
                placeholderTextColor="#888" />
        </View>
    )
}

export default Search
