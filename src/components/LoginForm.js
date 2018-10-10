import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'; // New code
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Inputs, Buttons } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }


  render() {
    const { textContent, errorTextStyle, signinConatainer } = styles;

    return (
      <View style={signinConatainer}>
        <Inputs
          value={this.props.email}
          onChangeText={this.onEmailChange.bind(this)}
          placeholder="email@gmail.com"
          style={{ marginTop: 200 }}
        />
        <Inputs
          secureTextEntry
          value={this.props.password}
          onChangeText={this.onPasswordChange.bind(this)}
          placeholder="password"
        />
        <Text style={textContent} onPress={() => Actions.signUp()}>Create Account</Text>
        <Text style={errorTextStyle}>
          {this.props.error}
        </Text>
        <Buttons
          title="login"
          onPress={this.onButtonPress.bind(this)}
          loading={this.props.loading}
        />


      </View>
    );
  }
}

const styles = {
  signinConatainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#001f3f',
  },

  errorTextStyle: {
    fontSize: 20,
    color: 'red'
  },
  textContent: {
    color: '#0074D9',
    backgroundColor: 'transparent',
    marginTop: 10
  },

};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
