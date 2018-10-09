import React from 'react';
import { Input } from 'react-native-elements';

const Inputs = ({ value, onChangeText, placeholder, secureTextEntry, style }) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <Input
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      inputStyle={inputStyle}
      placeholder={placeholder}
      inputContainerStyle={[containerStyle, style]}
    />
  );
};

const styles = {
  inputStyle: {
    backgroundColor: '#001f3f',
    marginHorizontal: 20,
    paddingLeft: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    color: 'white',
    flex: 1,
    borderColor: 'white'

  },
  containerStyle: {
    marginTop: 20,
    borderBottomWidth: 0,
  }
};

export { Inputs };
