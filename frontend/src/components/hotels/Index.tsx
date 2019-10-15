import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './AppHeader';
import HotelsList from './HotelsList';


export interface Props {
  startDate: string,
  endDate: string,
}

interface State {
}

export default class Hotels extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <AppHeader title="Selectioner hotel" />
        <HotelsList {...this.props} />
      </>
    );
  }
}
