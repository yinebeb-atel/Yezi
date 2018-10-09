import React from 'react';
import { Input } from 'react-native-elements';

const Inputs = ({ value, onChangeText, placeholder, secureTextEntry, name }) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <Input
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      inputStyle={inputStyle}
      placeholder={placeholder}
      inputContainerStyle={containerStyle}
      leftIcon={{ type: 'font-awesome', name, color: 'grey' }}
    />
  );
};

const styles = {
  inputStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: 'black',
    flex: 1,

  },
  containerStyle: {
    marginTop: 20,
    borderBottomWidth: 0,
  }
};

export { Inputs };
