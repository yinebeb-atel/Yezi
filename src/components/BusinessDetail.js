import React, { Component } from 'react';
import { ListItem, Rating } from 'react-native-elements';
import { Text, View, TouchableOpacity } from 'react-native';
import { CircularProgress } from './common';

class BusinessDetail extends Component {

  showProgress = (percentage) => {
    return (<CircularProgress percentage={percentage}>
      <View>
        <Text>{percentage}</Text>
      </View>
    </CircularProgress>
    );
  };

  showRatings = () => {
    return (
      <Rating

        type="star"
        fractions={1}
        startingValue={3.6}
        imageSize={10}
        onFinishRating={this.ratingCompleted}
        style={styles.ratingStyle}
      />
    );
  };

  badgeStyle = (v = 4) => {
    return {
      value: v,
      textStyle: { color: 'white' },
      containerStyle: { marginTop: -20, backgroundColor: '#E0E0E0' }
    };
  }
  render() {
    const thumbnailImage = 'https://i.imgur.com/K3KJ3w4h.jpg';
    const { name } = this.props.employee;
    return (
      <ListItem
        key={name} // uid
        //onPress
        //onLongPress
        component={TouchableOpacity}
        leftAvatar={{ source: { uri: thumbnailImage } }}
        title={name}
        subtitle={'artist'}
        rightSubtitle={this.showRatings()}
        // badge={this.badgeStyle()}
        containerStyle={styles.containerStyle}
        rightElement={this.showProgress()}

      />

    );
  }

}

const styles = {
  containerStyle: {
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: '#E0E0E0',
    borderRadius: 10,
  },
  ratingStyle: {
    padding: 1,
    margin: 1,

  }
};

export default BusinessDetail;
