import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeCreate({ employee: this.props.employee });
  }

  render() {
    const { name, uid } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default ListItem;
