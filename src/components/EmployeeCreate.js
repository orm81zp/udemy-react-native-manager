import React, { Component } from 'react';
import { Picker, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button  } from './common';

class EmployeeCreate extends Component {
  render() {
    const { employeeUpdate, name, phone, shift } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={(value) => employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={(value) => employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={{ minHeight: 100 }}
            selectedValue={shift}
            onValueChange={(value) => employeeUpdate({ prop: 'shift', value})}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 5,
  }
})

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return {
    name,
    phone,
    shift
  }
};

export default connect(
  mapStateToProps,
  { employeeUpdate })
(EmployeeCreate);
