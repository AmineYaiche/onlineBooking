import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { Table, Row, Rows } from 'react-native-table-component';

import moment from '../../../load_moment';
import { User } from './InfoPerso';
import { Hotel } from '../hotels/HotelsList';

export interface Period {
  startDate: string
  endDate: string
}

export interface Props {
  user: User
  period: Period
  hotel: Hotel
}

interface State {
  tableData: Array<Array<string | number>>
}

class Recap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tableData: this.getTableData(this.props),
    }
  }

  getTableData = (props: Props) => {
    const startDate = moment(props.period.startDate);
    const endDate = moment(props.period.endDate);
    const nightsNumber = endDate.diff(startDate, 'days');
    const totalPrice = nightsNumber * props.hotel.prix;

    return [
      ['Nom', props.user.lastname],
      ['Prénom', props.user.firstname],
      ['Email', props.user.email],
      ['Date debut', startDate.format('DD MMM YYYY')],
      ['Date fin', endDate.format('DD MMM YYYY')],
      ['Nombre de nuits', nightsNumber],
      ['Prix totale', totalPrice + ' €']
    ];
  }

  componentWillReceiveProps = (nextProps, nextContext) => {
    this.setState({ tableData: this.getTableData(nextProps) });
  }

  render() {
    return (

      <View style={styles.container}>
        <Text>Récapitulatif de la commande</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Rows data={this.state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  text: { margin: 6, textAlign: "center" }
});

const mapStateToProps = state => {
  return {
    user: state.userInfo,
    period: state.setPeriod,
    hotel: state.hotelSelected
  }
}

export default connect(
  mapStateToProps,
)(Recap);