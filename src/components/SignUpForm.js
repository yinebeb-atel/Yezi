import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Inputs, Buttons } from './common';

class SignUpForm extends Component {
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
        title="SignUp!"
        onPress={this.onButtonPress.bind(this)}
        loading={this.props.loading}
      />
    );
  }

  render() {
    const {
      signinConatainer
    } = styles;

    return (
      <View style={signinConatainer}>
        <Inputs
          secureTextEntry
          value={this.props.password}
          onChangeText={this.onPasswordChange.bind(this)}
          placeholder="First Name"
          name='lock'
        />
        <Inputs
          secureTextEntry
          value={this.props.password}
          onChangeText={this.onPasswordChange.bind(this)}
          placeholder="Last Name"
          name='lock'
        />
        <Inputs
          secureTextEntry
          value={this.props.password}
          onChangeText={this.onPasswordChange.bind(this)}
          placeholder="555-555-5555"
          name='lock'
        />
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
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(SignUpForm);
