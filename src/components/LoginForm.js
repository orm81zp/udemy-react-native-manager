import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange = (email) => {
    this.props.emailChange(email);
  };

  onPasswordChange = (password) => {
    this.props.passwordChange(password);
  };

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };

  renderError = () => {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner />;
    }

    return <Button onPress={this.onButtonPress}>Log in</Button>;
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.props.email}
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            value={this.props.password}
            placeholder="password"
            onChangeText={this.onPasswordChange}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
})

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading
  };
};

export default connect(
  mapStateToProps,
  { emailChange, passwordChange, loginUser })
(LoginForm);
