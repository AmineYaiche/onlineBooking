import React from 'react';
import DatepickerRange from 'react-native-range-datepicker';
import { Button, View, Text, StyleSheet } from "react-native";
import moment from 'moment';
import { connect } from "react-redux";

import {setPeriod, errorBookingForm, noErrorBookingForm} from '../../actions/Index'


interface Props {
  setPeriod: Function
  navigation: any
  startDate: string
  endDate: string
  errorBookingForm: Function
  noErrorBookingForm: Function
}

interface State {
}

class DateRange extends React.Component<Props, State> {
  config: object

  constructor(props: Props) {
    super(props);
    this.state = {
    };

    this.config = {
      dayHeadings: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      placeHolderStart: 'Date debut',
      placeHolderUntil: 'Date fin',
      minDate: moment().format('YYYY-MM-DD'),
      showReset: false,
      showClose: false,
    }
  }

  onConfirm = (startDate, endDate) => {
    this.props.noErrorBookingForm();
    this.props.setPeriod(startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'))
    this.props.navigation.navigate('BookingWizard');
  };

  render() {
    return (
        <DatepickerRange  
          onConfirm={this.onConfirm}
          startDate={this.props.startDate}
          untilDate={this.props.endDate}
          {...this.config}
        />
    );
  }
}

const mapStateToProps = state => {
  return state.setPeriod
}

export default connect(
  mapStateToProps,
  {setPeriod, errorBookingForm, noErrorBookingForm}
)(DateRange);
