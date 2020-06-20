import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { CardSection, Card, Button, Confirm, Spinner } from './common'
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false, deleting: false };

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    })
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  };

  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is ${shift}`)
  };

  onAccept = () => {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
    this.setState({ showModal: false, deleting: true });
  };

  onDecline = () => {
    this.setState({ showModal: false });
  };

  render() {
    if (this.state.deleting) {
      return <Spinner />;
    }

     return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
     );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
}

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete })
(EmployeeEdit);
