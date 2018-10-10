import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  signUpUser,
  firstNameChanged,
  lastNameChanged,
  phoneChanged,
} from '../actions';
import { Inputs, Buttons } from './common';

class SignUpForm extends Component {
  onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastNameChanged(text);
  }

  onPhoneChange(text) {
    this.props.phoneChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.signUpUser({ email, password });
  }


  render() {
    const { signupConatainer, errorTextStyle } = styles;

    return (
      <View style={signupConatainer}>
        <Inputs
          value={this.props.firstname}
          onChangeText={this.onFirstNameChange.bind(this)}
          placeholder="First Name"
          style={{ marginTop: 100 }}
        />
        <Inputs
          value={this.props.lastname}
          onChangeText={this.onLastNameChange.bind(this)}
          placeholder="Last Name"
        />
        <Inputs
          value={this.props.phone}
          onChangeText={this.onPhoneChange.bind(this)}
          placeholder="555-555-5555"
        />
        <Inputs
          value={this.props.email}
          onChangeText={this.onEmailChange.bind(this)}
          placeholder="email@gmail.com"
        />
        <Inputs
          value={this.props.password}
          onChangeText={this.onPasswordChange.bind(this)}
          placeholder="password"
          style={{ marginBottom: 10 }}
        />
        <Text style={errorTextStyle}>
          {this.props.error}
        </Text>
        <Buttons
          title="Create"
          onPress={this.onButtonPress.bind(this)}
          loading={this.props.loading}
        />
      </View>
    );
  }
}

const styles = {
  signupConatainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#001f3f',
  },

  errorTextStyle: {
    fontSize: 20,
    color: 'red'
  },
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  signUpUser,
  firstNameChanged,
  lastNameChanged,
  phoneChanged,
})(SignUpForm);
