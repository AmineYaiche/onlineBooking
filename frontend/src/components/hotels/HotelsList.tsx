import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from "react-redux";

import {fetchHotels} from '../../actions/Index';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ];

interface Hotel {
  name: string,
  prix: Number,
  description: string,
  photo: string
}


export interface Props {
  fetchHotels: Function,
  hotels: Array<Hotel>,
  fetching: Boolean
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

  render() {
    console.log(this.props);
    return (
      <ScrollView>
        {
          this.props.hotels.map((hotel, index) => (
            <ListItem
              key={index}
              leftAvatar={{ source: { uri: hotel.photo } }}
              title={hotel.name}
              subtitle={hotel.description}
              bottomDivider
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
  {fetchHotels}
)(HotelsList);