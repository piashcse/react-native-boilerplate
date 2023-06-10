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

const store = configureAppStore();
const App = () => {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
};

export default App;
