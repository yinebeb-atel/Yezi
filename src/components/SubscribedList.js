import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { View, ListView } from 'react-native';
import { subscribedFetch } from '../actions';
import BusinessDetail from './BusinessDetail';


class SubscribedList extends Component {
  componentWillMount() {
    this.props.subscribedFetch();

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

export default connect(mapStateToProps, { subscribedFetch })(SubscribedList);