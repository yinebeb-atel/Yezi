import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements';

class TabIcon extends Component {
  render() {
    const { selected, title } = this.props;
    const color = selected ? '#00f240' : '#301c2a';
    console.log('Kkkkkkkkkkkkkkk:', title);
    return (
      <View style={styles.containeStyle}>
        <Icon
          style={styles.iconStyle}
          color={color}
          name={title}
          size={18}
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
  iconStyle: {
    height: 26,
    width: 26
  }
};

export { TabIcon };
