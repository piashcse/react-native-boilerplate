import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getTestData} from "../redux/actions/network-demo";
import Loading from "../components/loading/Loading";


const Home = () => {
    const dispatch = useDispatch();
    const {isLoading, movies} = useSelector(state => state?.networkTestReducer);
    useEffect(() => {
        dispatch(getTestData())
    }, [])

    return isLoading ? <Loading/> : (
        <ScrollView style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text>{JSON.stringify(movies, null, ' ')}</Text>
        </ScrollView>
    );
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:16,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
