import React from 'react';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
// import { Text, View, Image, Linking } from 'react-native';
// import { Card, Buttons, CardSection } from './common';

const BusinessDetail = (props) => {
  const { name } = props.employee;
  const thumbnailImage = 'https://i.imgur.com/K3KJ3w4h.jpg';

  const {
    containerStyle,
    badgestyle,
  } = styles;

  return (
    <ListItem
      key={name} // uid
      //onPress
      //onLongPress
      component={TouchableOpacity}
      leftAvatar={{ source: { uri: thumbnailImage } }}
      title={name}
      subtitle={'artist'}
      badge={badgestyle}
      containerStyle={containerStyle}
    />
  );
};

const styles = {

  badgestyle: {
    value: 3,
    textStyle: { color: 'white' },
    containerStyle: {
      marginTop: -20, backgroundColor: '#E0E0E0'
    }

  },
  bottomDivider: {
    borderWidth: 2,
    borderColor: 'red'
  },
  containerStyle: {
    // borderBottomWidth: 4,
    marginBottom: 5,
    borderBottomColor: '#E0E0E0',
    borderRadius: 10,
  }
};

export default BusinessDetail;

