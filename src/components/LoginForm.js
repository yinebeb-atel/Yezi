import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
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

  renderButton() {
    return (
      <Buttons
        title="login"
        onPress={this.onButtonPress.bind(this)}
        loading={this.props.loading}
      />
    );
  }

  render() {
    const {
      singUpContainer,
      textContent,
      errorTextStyle,
      signinConatainer
    } = styles;

    return (
      <View style={signinConatainer}>
        <Inputs
          value={this.props.email}
          onChangeText={this.onEmailChange.bind(this)}
          placeholder="email@gmail.com"
          name='user'
        />
        <Inputs
          secureTextEntry
          value={this.props.password}
          onChangeText={this.onPasswordChange.bind(this)}
          placeholder="password"
          name='lock'
        />
        <Text style={textContent}>Create Account</Text>
        <Text style={errorTextStyle}>
          {this.props.error}
        </Text>
        {this.renderButton()}
      </View>
    );
  }
}

const styles = {
  signinConatainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  errorTextStyle: {
    fontSize: 20,
    color: 'red'
  },

  singUpContainer: {
    flex: 1,
    paddingTop: 15,
    flexDirection: 'row'

  },
  textContent: {
    color: '#172F51',
    backgroundColor: 'transparent',
  },

};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
