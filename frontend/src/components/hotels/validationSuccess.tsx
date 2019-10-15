import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";

import { connect } from "react-redux";

import AppHeader from './AppHeader';
import HotelsList from './HotelsList';




export interface Props {
  show: boolean
}

interface State {
  show: boolean
}

export default class ValidationSuccess extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      show: this.props.show
    };
  }

  componentWillReceiveProps = (newProps, newContext) => {
    if (newProps.show) {
      this.setState({show: true})
      setTimeout(() => {
        this.setState({show: false});
      }, 5000)
    }
  }

  render() {
    return (
      <>
        { this.state.show && 
          <TouchableOpacity style={styles.bottomView}>
            <Text style={styles.textStyle}>Votre commande a bien été prise en compte</Text>
          </TouchableOpacity>

        }
      </>
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
      height: 30,
      backgroundColor: '#4BB543',
      justifyContent: 'center',
      alignItems: 'center',
    },

    textStyle: {

      color: '#fff',
      fontSize: 17
    }
  }
);

