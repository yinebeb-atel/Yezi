import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';
import { CircularProgress } from './common';
import {
  userSubscribed,
  removeFromSuggested,
  userUnSubscribed,
  removeFromSubscribed
} from '../actions';


class BusinessDetail extends Component {


  mapType = (type) => {
    switch (type) {
      case 'coffee':
        return 'local-cafe';
      case 'restaurant':
        return 'local-dining';
      case 'bar':
        return 'local-bar';
      default:
        return 'local-dining';//TODO: default image og logo
    }
  }

  showProgress = (percentage) => {
    return (<CircularProgress percentage={percentage} />
    );
  };

  showRatings = (rating) => {
    return (
      <Rating
        type="star"
        fractions={1}
        startingValue={rating}
        imageSize={10}
        onFinishRating={this.ratingCompleted}
        style={styles.ratingStyle}
      />
    );
  };


  onSubscribe = (uid, page) => {
    const show = page || 'home';
    if (show === 'add') {
      this.props.userSubscribed(this.props.employee);
      this.props.removeFromSuggested(uid);
    } else {
      this.props.userUnSubscribed(this.props.employee);
      this.props.removeFromSubscribed(uid);
    }
  }

  render() {
    const { name, hours, type, count, rating, uid } = this.props.employee;
    const percentage = count === 0 ? 0 : (count / 10) * 100;
    return (
      <ListItem
        key={uid}
        //onPress
        onLongPress={() => this.onSubscribe(uid, this.props.page)}
        component={TouchableOpacity}
        leftIcon={{ name: this.mapType(type) }}
        title={name}
        subtitle={hours}
        rightSubtitle={this.showRatings(rating)}
        containerStyle={styles.containerStyle}
        rightElement={this.showProgress(percentage)}
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

export default connect(null, {
  userSubscribed,
  removeFromSuggested,
  userUnSubscribed,
  removeFromSubscribed
})(BusinessDetail);
