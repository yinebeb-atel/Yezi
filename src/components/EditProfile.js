import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import {
  updateUserProfile,
  userUpdate,
  userFetch,
  firstNameChanged,
  lastNameChanged,
  phoneChanged,
} from '../actions';
import { Buttons, Inputs } from './common';

class EditProfile extends Component {

  // componentWillMount() {
  //   _.each(this.props.employee, (value, prop) => {
  //     this.props.userUpdate({ prop, value });
  //   });
  // }
  componentWillMount() {
    this.props.userFetch();

    // this.createDataSource(this.props);
  }
  onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastNameChanged(text);
  }

  onPhoneChange(text) {
    this.props.phoneChanged(text);
  }

  onButtonPress() {
    const { firstname, lastname, phone } = this.props;
    this.props.updateUserProfile({ firstname, lastname, phone });
  }

  render() {
    const { signupConatainer, errorTextStyle } = styles;
    const { firstname, lastname, phone } = this.props;
    return (
      <View style={signupConatainer}>
        <Inputs
          value={firstname}
          onChangeText={this.onFirstNameChange.bind(this)}
          style={{ marginTop: 70 }}
          placeholder={firstname || 'Firstname'}
        />
        <Inputs
          value={lastname}
          onChangeText={this.onLastNameChange.bind(this)}
          placeholder={firstname || 'Lastname'}
        />
        <Inputs
          value={phone}
          onChangeText={this.onPhoneChange.bind(this)}
          placeholder={phone || '555-555-555'}
        />
        <Text style={errorTextStyle}>
          {this.props.error}
        </Text>
        <Buttons
          title="Save"
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
  },

  errorTextStyle: {
    fontSize: 20,
    color: 'red'
  },
};

const mapStateToProps = (state) => {
  const { firstname, lastname, phone, loading, error } = state;

  return { firstname, lastname, phone, loading, error };
};

export default connect(mapStateToProps, {
  updateUserProfile,
  userUpdate,
  userFetch,
  firstNameChanged,
  lastNameChanged,
  phoneChanged,
})(EditProfile);
