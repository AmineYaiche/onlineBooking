import React, { Ref } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import { ScrollView, SafeAreaView } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import { errorBookingForm, noErrorBookingForm } from '../../actions/Index';

import {
  changeEmail,
  changeFirstName,
  changeLastName
} from '../../actions/Index';

export interface User {
  firstname: string,
  lastname: string,
  email: string
}

export interface Props {
  user: User
  changeEmail: Function
  changeFirstName: Function
  changeLastName: Function
  errorBookingForm: Function
  noErrorBookingForm: Function
}

interface State {
  errors: Object
}

let styles = {
  scroll: {
    backgroundColor: '#E8EAF6',
  },

  container: {
    margin: 8,
  },

  contentContainer: {
    padding: 8,
  },

  safeContainer: {
    flex: 1,
    backgroundColor: '#E8EAF6',
  },
};

class InfoPerso extends React.Component<Props, State> {
  firstnameRef: Object
  lastnameRef: Object
  emailRef: Object

  constructor(props) {
    super(props);

    this.firstnameRef = this.updateRef.bind(this, 'firstname');
    this.lastnameRef = this.updateRef.bind(this, 'lastname');
    this.emailRef = this.updateRef.bind(this, 'email');

    this.state = {
      errors: {}
    };
  }

  componentDidMount = () => {
    this.props.errorBookingForm("L'email est obligatoire.");
  }

  validateFirstName = () => {
    if (/\d/.test(this.props.user.firstname)) {
      this.setState({ errors: { firstname: "Le prenom ne doit pas contenir des chiffres." } })
    }
  }

  validateLastName = () => {
    if (/\d/.test(this.props.user.lastname)) {
      this.setState({ errors: { lastname: "Le nom ne doit pas contenir des chiffres." } })
    }
  }

  validateEmail = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (this.props.user.email == '') {
      this.setState({ errors: { email: "Le champ email est obligatoire." } })
      return;
    }

    if (!emailRegex.test(this.props.user.email)) {
      this.setState({ errors: { email: "Le format de l'email est invalide." } })
      return
    }
    this.props.noErrorBookingForm();
  }

  onFocus = () => {
    let { errors = {} } = this.state;
    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }
    this.setState({ errors });
  }

  onSubmitFirstName = () => {
    this.email.focus();
    this.validateFirstName();
  }

  onSubmitLastName = () => {
    this.firstname.focus();
    this.validateLastName();
  }

  onSubmitEmail = () => {
    this.email.blur();
    this.validateEmail();
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  onLastNameChange = (lastname) => {
    this.props.changeLastName(lastname)
  }

  onFirstNameChange = (firstname) => {
    this.props.changeFirstName(firstname)
  }

  onEmailChange = (email) => {
    this.props.changeEmail(email)
  }

  render() {
    let { errors = {} } = this.state;
    return (
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.container}>

            <TextField
              ref={this.lastnameRef}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onLastNameChange}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='Nom'
              error={errors.lastname}
            />

            <TextField
              ref={this.firstnameRef}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onFirstNameChange}
              onSubmitEditing={this.onSubmitFirstName}
              returnKeyType='next'
              label='Prénom'
              error={errors.firstname}
            />

            <TextField
              ref={this.emailRef}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onEmailChange}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType='next'
              label='Email'
              error={errors.email}
            />

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.userInfo }
}

export default connect(
  mapStateToProps,
  {
    changeEmail,
    changeFirstName,
    changeLastName,
    errorBookingForm,
    noErrorBookingForm
  }
)(InfoPerso);
