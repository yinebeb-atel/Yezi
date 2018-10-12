import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TabIcon extends Component {
  render() {
    const { selected, title } = this.props;
    const color = selected ? '#00f240' : '#301c2a';
    return (
      <View style={styles.containeStyle}>
        <Icon
          color={color}
          name={title}
          size={18}
          color='#E0E0E0'
        />
      </View>
    );
  }
}

const styles = {
  containeStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },

};

export { TabIcon };
