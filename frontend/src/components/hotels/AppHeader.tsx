import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';


export interface Props {
  title: String
  navigation: any
}

interface State {
}

export default class AppHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <Header
        centerComponent={{ text: this.props.title, style: { color: '#fff' } }}
        rightComponent={{
          icon: 'shopping-cart',
          color: '#fff',
          onPress: () => this.props.navigation.navigate('ValidatedCommands')
        }}
      />
    );
  }
}
