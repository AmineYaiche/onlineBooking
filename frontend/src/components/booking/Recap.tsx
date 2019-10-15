import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Props {
}

interface State {
}

export default class Recap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>Recap</Text>
      </View>
    );
  }
}
