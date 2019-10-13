import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SearchHotel from './src/components/search_hotel/Index';
import store from './src/store'; 


const AppNavigator = createStackNavigator({
  Home: {
    screen: SearchHotel,
  },
});

let Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}
