import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import { Spinner } from './common';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  render() {
    const { employees } = this.props;

    if (employees.length === 0) {
      return <Spinner />;
    }

    return (
      <FlatList
        keyExtractor={(employee) => employee.uid}
        renderItem={({ item }) => <ListItem employee={item} />}
        data={employees}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }))
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch })
(EmployeeList);
