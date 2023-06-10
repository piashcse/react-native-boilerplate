import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getTestData} from "../redux/actions/network-demo";


const Home = () => {
    const dispatch = useDispatch();
    const {isLoading, data} = useSelector(state => state?.networkTestReducer);
    useEffect(() => {
        dispatch(getTestData())
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
    );
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
