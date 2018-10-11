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
    marginTop: 15
  },

  titleStyle: {
    fontWeight: '700',
    color: '#fff'
  },

  buttonStyle: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    borderWidth: 0.5,
    width: 200,
    height: 40,
    borderColor: '#fff',

  },
  loadingProps: {
    size: 'large',
    color: '#fff'
  },
};

export { Buttons };
