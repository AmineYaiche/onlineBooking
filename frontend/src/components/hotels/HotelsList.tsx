import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from "react-redux";

import {fetchHotels, hotelSelected} from '../../actions/Index';

export interface Hotel {
  id: number,
  name: string,
  prix: number,
  description: string,
  photo: string
}


export interface Props {
  fetchHotels: Function,
  hotelSelected: Function,
  hotels: Array<Hotel>,
  fetching: Boolean,
  navigation: any,
}

interface State {
}

class HotelsList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    this.props.fetchHotels();
  }
  
  hotelPressed = (hotel) => {
    this.props.hotelSelected(hotel);
    this.props.navigation.navigate('BookingWizard');
  }


  render() {
    return (
      <ScrollView>
        {
          this.props.hotels.map((hotel) => (
            <ListItem
              key={hotel.id}
              leftAvatar={{ source: { uri: hotel.photo } }}
              title={hotel.name}
              subtitle={hotel.description}
              bottomDivider
              onPress={() => this.hotelPressed(hotel)}
            />
          ))
        }
      </ScrollView>
    );
  }
}


const mapStateToProps = state => {
  return state.fetchingHotels
}

export default connect(
  mapStateToProps,
  {fetchHotels, hotelSelected}
)(HotelsList);