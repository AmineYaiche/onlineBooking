import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { connect } from "react-redux";

import moment from '../../../load_moment';
import DateRange from '../search_hotel/DateRange';
import {Hotel} from '../hotels/HotelsList';

export interface Props {
  navigation: any
  hotel: Hotel
  startDate: string,
  endDate: string
}

interface State {
}

class ChoixNuits extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  onPress = () => {
    this.props.navigation.navigate('DateRange');
  }

  getDisplayRange() {
    console.log(this.props.startDate)
    const startDate = moment(this.props.startDate).format('DD MMM YYYY');
    const endDate = moment(this.props.endDate).format('DD MMM YYYY');
    return startDate + ' - ' + endDate;
  }

  getButtonTitle = () => {
    if(this.props.startDate && this.props.endDate) {
      return this.getDisplayRange();
    }
    return "Selectionner une periode";
  }

  render() {
    return (
      <View>
        <Text>Vous avez choisi l'hotel {" "}
          <Text style={styles.hotel}>{this.props.hotel.name}</Text>
        </Text>
        <Button title={this.getButtonTitle()} onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hotel: {
    fontWeight: "bold"
  }
})

const mapStateToProps = state => {
  return {
    hotel: state.hotelSelected,
    ...state.setPeriod
  }
}

export default connect(
  mapStateToProps,
)(ChoixNuits);
