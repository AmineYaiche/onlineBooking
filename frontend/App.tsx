import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import DateRange from './src/components/search_hotel/DateRange';
import HotelsList from './src/components/hotels/Index';
import BookingWizard from './src/components/booking/Index';
import validatedCommands from './src/components/validated_commands/Index';
import store from './src/store'; 


const AppNavigator = createStackNavigator({
  Home: {screen: HotelsList},
  DateRange: {screen: DateRange},
  BookingWizard: {screen: BookingWizard},
  ValidatedCommands: {screen: validatedCommands},
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
