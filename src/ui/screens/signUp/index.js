import React, { Component } from 'react';
import { Text } from 'react-native';
import CommonButton from '~/ui/components/CommonButton';
import Container from '~/ui/components/MainContainer';

class SignUp extends Component {
  static navigationOptions = {
    title: 'SignUp',
  };

  _onSignUp = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Container>
        <Text>Sign up Screen</Text>
        <CommonButton onPress={this._onSignUp} text={'Sign Up'} />
      </Container>
    );
  }
}

export default SignUp;
