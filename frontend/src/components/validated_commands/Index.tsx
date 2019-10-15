import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import moment from '../../../load_moment';

export interface Props {
  validatedBooking: Array<any>
}

interface State {
  tableData: Array<Array<string | number>>
}

class ValidatedCommands extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tableData: this.getTableData()
    };
  }

  getTableData = (props:Props=this.props) => {
    const rows = [["nom de l'hotel", "Debut séjour", "Fin séjour", "Prix"]];
    props.validatedBooking.map(command => {
      const startDate = moment(command.period.startDate);
      const endDate = moment(command.period.endDate);
      const price = endDate.diff(startDate, 'days') * command.hotel.prix;
      rows.push([
        command.hotel.name,
        startDate.format('DD MMM YYYY'),
        endDate.format('DD MMM YYYY'),
        price + ' €'
      ])
    })
    return rows;
  }

  componentWillReceiveProps = (newProps, newContext) => {
    this.setState({tableData: this.getTableData(newProps)});
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
  return { validatedBooking: state.validatedBooking }
}

export default connect(
  mapStateToProps,
)(ValidatedCommands);

