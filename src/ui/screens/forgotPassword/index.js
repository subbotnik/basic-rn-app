import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '~/ui/components/MainContainer';


class ForgotPassword extends Component {
  static navigationOptions = {
    title: 'ForgotPassword',
  };

  render() {
    return (
      <Container>
        <Text>Forgot Password Screen</Text>
      </Container>
    );
  }
}

export default ForgotPassword;
