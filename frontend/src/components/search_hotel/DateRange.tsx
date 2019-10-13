import React from 'react';
import DatepickerRange from 'react-native-range-datepicker';
import { Button, View, Text, StyleSheet } from "react-native";
import moment from 'moment';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import {setPeriod} from '../../actions/Index'


interface Props {
  setPeriod: Function,
  navigation: any,
  startDate: String,
  endDate: String
}

interface State {
  isDateTimePickerVisible: boolean,
  buttonText: string,
  validateDisabled: boolean,
}

class DateRange extends React.Component<Props, State> {
  config: object

  constructor(props: Props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      buttonText: 'Sélectionner une période',
      validateDisabled: true,
    };

    this.config = {
      dayHeadings: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      placeHolderStart: 'Date debut',
      placeHolderUntil: 'Date fin',
      minDate: moment().format('YYYY-MM-DD'),
      showReset: false,
    }
  }

  onConfirm = (startDate, endDate) => {
    this.setState({
      isDateTimePickerVisible: false,
      buttonText: `${startDate.format('DD MMM YYYY')} - ${endDate.format('DD MMM YYYY')}`,
      validateDisabled: false
    });
    this.props.setPeriod(startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'))
  };

  onClose = () => {
    this.setState({isDateTimePickerVisible: false});
  }

  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  }
  foo = () => {
    
  }

  render() {
    return (
      <View>
        <Button title={this.state.buttonText} onPress={this.showDateTimePicker} />
        {this.state.isDateTimePickerVisible && <DatepickerRange  
          onConfirm={this.onConfirm}
          onClose={this.onClose}
          startDate={this.props.startDate}
          untilDate={this.props.endDate}
          {...this.config}
        />}
        { !this.state.isDateTimePickerVisible &&
          <Button title="Valider" disabled={this.state.validateDisabled}
            onPress={() => this.props.navigation.navigate('HotelsList')}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state.search_hotel
}

export default connect(
  mapStateToProps,
  {setPeriod}
)(DateRange);
