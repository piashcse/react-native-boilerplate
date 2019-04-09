import React, { Component } from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import Home from "../screens/Home";
import NetworkingTest from "../screens/networking-test";

const App = () => (
    <Router>
        <Stack key="root">
            <Scene key="netwrokingTest" component={NetworkingTest} title="Netwroking" />
            <Scene key="Home" component={Home} title="Login"/>
        </Stack>
    </Router>
);

export default App;