import React, { Component } from 'react';
import { Text } from 'react-native';
import CommonButton from '~/ui/components/CommonButton';
import Container from '~/ui/components/MainContainer';

class SignIn extends Component {
  static navigationOptions = {
    title: 'Sign In',
  };

  _onForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  }

  _onSignIn = () => {
    this.props.navigation.navigate('Home'); // HomeNavigator
  }

  render() {
    return (
      <Container>
        <Text>Sign in Screen</Text>
        <CommonButton
          onPress={this._onForgotPassword}
          text={'Forgot Password'}
        />
        <CommonButton onPress={this._onSignIn} text={'Sign In'} />
      </Container>
    );
  }
}

export default SignIn;
