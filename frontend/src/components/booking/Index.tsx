import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import {wizardChangeStep} from '../../actions/Index';
import BookingWizard from './Wizard';
import ChoixNuits from './ChoixNuits';
import InfoPerso from './InfoPerso';
import Recap from './Recap';

export interface Props {
  wizardChangeStep: Function
  currentStep: number
  navigation: any
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
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <BookingWizard labels={labels} />
        {this.props.currentStep == 0 && <ChoixNuits {...this.props}/>}
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
  return state.wizardStep
}

export default connect(
  mapStateToProps,
  {wizardChangeStep}
)(Booking);

