import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from "react-redux";
import StepIndicator from 'react-native-step-indicator';

import {wizardChangeStep} from '../../actions/Index';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
}

export interface Props {
  labels: Array<string>,
  currentStep: number,
  wizardChangeStep: Function
}

interface State {
  currentPosition: number
}

class BookingWizard extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0
    }
  }

  stepPressed = (step) => {
    this.props.wizardChangeStep(step);
  }

  render() {
    return (
      <StepIndicator
        customStyles={customStyles}
        currentPosition={this.props.currentStep}
        labels={this.props.labels}
        stepCount= {this.props.labels.length}
        onPress={this.stepPressed}
      />
    )
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
}

const mapStateToProps = state => {
  return state.wizardStep
}

export default connect(
  mapStateToProps,
  {wizardChangeStep}
)(BookingWizard);

