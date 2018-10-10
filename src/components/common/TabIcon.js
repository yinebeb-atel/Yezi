import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TabIcon extends Component {
  render() {
    const { selected, iconName } = this.props;
    const color = selected ? '#00f240' : '#301c2a';

    return (
      <View style={styles.containeStyle}>
        <Icon style={{ color }} name={iconName || 'circle'} size={18} />
        <Text style={{ color, fontSize: 12 }}>{this.props.title}</Text>
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
  }
};

export { TabIcon };
