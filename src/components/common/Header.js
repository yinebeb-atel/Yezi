import React from 'react';
import { Header, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Headers = () => {
  const { outerContainerStyles } = styles;
  const addNew = () => {
    return (
      <Icon
        name='add'
        color='#E0E0E0'
        onPress={() => Actions.suggested()}
      />
    );
  };

  return (
    <Header
      centerComponent={{
        text: 'Yezi',
        fontSize: 20,
        color: '#fff'
      }}
      rightComponent={addNew()}
      backgroundColor='#fff'
      outerContainerStyles={outerContainerStyles}
    />
  );
};

const styles = {
  outerContainerStyles: {
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

// Make the component available to other parts of the app
export { Headers };

