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
  },
  titleStyle: {
    fontWeight: '700',
    color: '#172F51'
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 0,
    width: 200,
    borderColor: 'black',

  },
  loadingProps: {
    size: 'large',
    color: 'rgba(111, 202, 186, 1)'
  },
};

export { Buttons };
