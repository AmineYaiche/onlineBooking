import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export interface Props {
  textMessage: string
  show: boolean
}

interface State {
}

export default class ValidationError extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        { this.props.show  && this.props.textMessage &&
          <TouchableOpacity style={styles.bottomView}>
            <Text style={styles.textStyle}>{this.props.textMessage}</Text>
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
      backgroundColor: '#ff0033',
      justifyContent: 'center',
      alignItems: 'center',
    },

    textStyle: {

      color: '#fff',
      fontSize: 17
    }
  }
);

