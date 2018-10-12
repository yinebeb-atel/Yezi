import _ from 'lodash';
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { View, ListView } from 'react-native';
import { businessListFetch, subscribedFetch } from '../actions';
import BusinessDetail from './BusinessDetail';


class BusinessList extends Component {
  componentWillMount() {
    // const { title } = this.props;
    // const page = title || 'home';
    // console.log('Tttllll', title);
    // if (page === 'Add') {
    //   this.props.subscribedFetch();
    // } else {
    //   this.props.businessListFetch();
    // }
    console.log("HOMEEEEEEEEE");
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
    return <BusinessDetail employee={employee} page='add' />;
  }

  render() {
    console.log('Actions.currentScene Business', Actions.currentScene);
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
  //console.log('homepage', state.homepage);
  return { employees };
};


export default connect(mapStateToProps, { businessListFetch, subscribedFetch })(BusinessList);
