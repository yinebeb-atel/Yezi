import React from 'react';
import { SearchBar } from 'react-native-elements';


const searchBar = () => {
  return (
    <SearchBar
      placeholder="Type Here..."
      lightTheme
      round
      showLoading //redux

      clearIcon //redux
      //onClear local method
      cancelButtonTitle //ios only || canceIcon --logic to identify os

    // onChangeText={someMethod}
    // onClear={someMethod}
    />
  );
};

export { searchBar };
