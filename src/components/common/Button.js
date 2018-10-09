import React from 'react';
import { Button } from 'react-native-elements';

const Buttons = ({ onPress, title, loading }) => {
  const { loadingProps, titleStyle, buttonStyle, buttoncontainerStyle } = styles;

  return (
    <Button
      title={title}
      loading={loading}
      loadingProps={loadingProps}
      titleStyle={titleStyle}
      onPress={onPress}
      buttonStyle={buttonStyle}
      containerStyle={buttoncontainerStyle}
    />

  );
};

const styles = {
  buttoncontainerStyle: {
    flex: 1,
    marginTop: 10
  },
  titleStyle: {
    fontWeight: '700',
    color: '#0074D9'
  },

  buttonStyle: {
    backgroundColor: '#001f3f',
    borderRadius: 10,
    borderWidth: 0.5,
    width: 200,
    borderColor: 'white',

  },
  loadingProps: {
    size: 'large',
    color: '#0074D9'
  },
};

export { Buttons };