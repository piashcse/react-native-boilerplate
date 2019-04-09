import React, { Component } from 'react';
import Router from './src/navigations/route';
import configureStore from './src/redux';

import { Provider } from 'react-redux';

const store = configureStore();





export default class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <Router/>
        </Provider>
    );
  }
}