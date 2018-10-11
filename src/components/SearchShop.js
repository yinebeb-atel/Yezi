import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { View, ListView } from 'react-native';
import BusinessDetail from './BusinessDetail';

const URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json'
const API_KEY = 'AIzaSyDvRAroyj65Jdpy0nYxqiOffyNIxEmgpxw';
const LATITUDE = '47.6077';
const LONGTUDE = '-122.335167';
const INPUT = 'coffee';
const FILTER = 'shop';
const FIELDS = 'photos,formatted_address,name,opening_hours,rating';

class SearchShop extends Component {

  componentWillMount() { //redux
    axios.get(`${URL}?input=${INPUT}%20${FILTER}&inputtype=textquery&fields=${FIELDS}&locationbias=circle:2000@${LATITUDE},${LONGTUDE}&key=${API_KEY}`)
      .then(shop => this.createDataSource(shop));
  }

  createDataSource({ shop }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(shop);
  }

  renderRow(shop) {
    return <BusinessDetail shop={shop} />;
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <SearchBar
          placeholder="Type Here..."
          lightTheme
          round
          showLoading={false}//redux
          clearIcon //redux
          cancelButtonTitle
          containerStyle={this.SearchBarStyle}

        />
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />


      </View>
    );
  }
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 50
  },
  SearchBarStyle: {
    backgroundColor: null,
  }
};


export default SearchShop;

//places API
// 

//Geolocation requests
https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDvRAroyj65Jdpy0nYxqiOffyNIxEmgpxw