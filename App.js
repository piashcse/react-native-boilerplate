/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import configureAppStore from './src/redux';
import {Provider} from 'react-redux';
import Navigation from './src/navigations/AppNavigation';
import {PersistGate} from 'redux-persist/integration/react'


const {store, persistor} = configureAppStore();
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigation/>
            </PersistGate>
        </Provider>
    );
};

export default App;
