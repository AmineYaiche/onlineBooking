import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import DateRange from './DateRange';

export interface Props {
}

interface State {
}

export default class SearchHotel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <DateRange />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
