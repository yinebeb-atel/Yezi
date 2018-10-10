import React from 'react';
import { Input } from 'react-native-elements';

const Inputs = ({ value, onChangeText, placeholder, secureTextEntry, style, label }) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <Input
      label={label || null}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      inputStyle={inputStyle}
      placeholder={placeholder}
      inputContainerStyle={[containerStyle, style]}
      autoCapitalize={'none'}
      autoCorrect={false}
      placeholderTextColor="gray"
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
    borderColor: 'gray',
    height: 30,

  },
  containerStyle: {
    marginTop: 20,
    borderBottomWidth: 0,
  },
  labelStyle: {
    marginTop: 0,
    marginBottom: 0,
  }
};

export { Inputs };
