import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuAction } from '../store/action/getMenuAction';
import HomeStyle from '../styles/HomePage/HomePage';
import Header from '../components/header';
import Search from '../components/search';
import Categories from '../components/categories';
import Card from '../components/card';

const HomePage = () => {
    const dispatch = useDispatch();
    const { menu, isLoading } = useSelector(state => state.menu);


    console.log('Redux Store Menü:', menu);

    useEffect(() => {
        dispatch(getMenuAction());
    }, [dispatch]);



    return (
        <View style={HomeStyle.container}>
            <Header />
            <Search />
            <Categories />
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            ) : (
                <Card item={menu} />
            )}
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
});
