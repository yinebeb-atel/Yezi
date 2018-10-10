// Import libraries for making a component
import React from 'react';
import { Header, SearchBar } from 'react-native-elements';
// Make a component
const Headers = () => {
  const { textStyle, outerContainerStyles } = styles;

  const searchBar = () => {
    return (<SearchBar placeholder="Type Here..." lightTheme round />);
  };

  return (
    <Header
      // leftComponent={{ icon: 'home', color: 'blue' }}
      centerComponent={{ text: 'Yezi', style: { textStyle } }}
      rightComponent={{ icon: 'settings', color: 'blue' }}
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
  },
  textStyle: {
    fontSize: 20,
    color: '#fff'
  }
};

// Make the component available to other parts of the app
export { Headers };
