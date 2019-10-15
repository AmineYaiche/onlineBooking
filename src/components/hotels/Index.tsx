import React from 'react';
import { connect } from "react-redux";

import AppHeader from './AppHeader';
import HotelsList from './HotelsList';
import ValidationSuccess from './validationSuccess';




export interface Props {
  startDate: string,
  endDate: string,
  navigation: any
}

interface State {
}

class Hotels extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <AppHeader title="Selectioner hotel" {...this.props} />
        <ValidationSuccess show={this.props.navigation.getParam('validationSuccess', false)}/>
        <HotelsList {...this.props} />
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    hotel: state.hotelSelected,
    ...state.setPeriod
  }
}

export default connect(
  mapStateToProps,
)(Hotels);

