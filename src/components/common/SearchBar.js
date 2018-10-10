import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';


const SearchBars = () => {
  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        showLoading //redux
        clearIcon //redux
        cancelButtonTitle

      />
    </View>

  );
};

export { SearchBars };

//onClear local method
// onChangeText={someMethod}
// onClear={someMethod}
