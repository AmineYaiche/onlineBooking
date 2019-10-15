import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import { wizardChangeStep, validateBooking } from '../../actions/Index';
import BookingWizard from './Wizard';
import ChoixNuits from './ChoixNuits';
import InfoPerso from './InfoPerso';
import Recap from './Recap';
import {User} from './InfoPerso';
import {Period} from './Recap';
import {Hotel} from '../hotels/HotelsList';

export interface Props {
  wizardChangeStep: Function
  validateBooking: Function
  currentStep: number
  navigation: any
  hotel: Hotel
  user: User
  period: Period
}

interface State {
}

const labels = ["Choix des nuits", "Informations personnelles", "récap commande"];

class Booking extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  nextPressed = () => {
    this.props.wizardChangeStep(this.props.currentStep + 1);
    if (this.props.currentStep == labels.length - 1) {
      this.props.validateBooking(this.props.user, this.props.hotel, this.props.period);
      this.props.navigation.navigate('Home', {validationSuccess: true});
    }
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <BookingWizard labels={labels} />
        {this.props.currentStep == 0 && <ChoixNuits {...this.props} />}
        {this.props.currentStep == 1 && <InfoPerso />}
        {this.props.currentStep == 2 && <Recap />}

        <TouchableOpacity style={styles.bottomView} onPress={this.nextPressed}>
          {this.props.currentStep < labels.length - 1 &&
            <Text style={styles.textStyle}>Suivant</Text>
          }
          {this.props.currentStep >= labels.length - 1 &&
            <Text style={styles.textStyle}>Valider</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
    },

    bottomView: {

      width: '100%',
      height: 50,
      backgroundColor: '#FF9800',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },

    textStyle: {

      color: '#fff',
      fontSize: 22
    }
  }
);

const mapStateToProps = state => {
  return {
    ...state.wizardStep,
    user: state.user,
    hotel: state.hotel,
    period: state.period
  }
}

export default connect(
  mapStateToProps,
  { wizardChangeStep, validateBooking }
)(Booking);

