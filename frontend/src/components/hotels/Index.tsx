import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './AppHeader';
import HotelsList from './HotelsList';
import { connect } from 'react-redux';
import moment from '../../../load_moment';



export interface Props {
  startDate: string,
  endDate: string,
}

interface State {
  startDate: string,
  endDate: string
}

class Hotels extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      startDate: moment(this.props.startDate).format('DD MMM YYYY'),
      endDate: moment(this.props.startDate).format('DD MMM YYYY'),
    };
  }

  render() {
    return (
      <>
        <AppHeader title="Selectioner hotel" />
        <Text>Periode: {this.state.startDate} - {this.state.endDate}</Text>
        <HotelsList />
      </>
    );
  }
}


const mapStateToProps = state => {
  return state.search_hotel
}

export default connect(
  mapStateToProps
)(Hotels);
