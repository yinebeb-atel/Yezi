import _ from 'lodash';
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { View, ListView } from 'react-native';
import { businessListFetch } from '../actions';
import BusinessDetail from './BusinessDetail';
import temp from './temp';
// const URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json';
// const API_KEY = 'AIzaSyDvRAroyj65Jdpy0nYxqiOffyNIxEmgpxw';
// const LATITUDE = '47.6077';
// const LONGTUDE = '-122.335167';
// const INPUT = 'coffee';
// const FILTER = 'shop';
// const FIELDS = 'photos,formatted_address,name,opening_hours,rating';

// componentWillMount() {
//   axios.get(`${URL}?input=${INPUT}%20${FILTER}&inputtype=textquery&fields=${FIELDS}&locationbias=circle:2000@${LATITUDE},${LONGTUDE}&key=${API_KEY}`)
//     .then(shop => console.log('shop:', shop));
//     //.then(shop => this.createDataSource(shop));
// }

class BusinessList extends Component {

  componentWillMount() {
    this.props.businessListFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    console.log('employeeemployee', employee);

    return <BusinessDetail employee={employee} />;
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

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};


export default connect(mapStateToProps, { businessListFetch })(BusinessList);
