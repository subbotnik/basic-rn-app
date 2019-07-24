import React, { Component } from 'react';
import { Text } from 'react-native';
import CommonButton from '~/ui/components/CommonButton';
import Container from '~/ui/components/MainContainer';

class Overview extends Component {
  static navigationOptions = {
    title: 'Overview',
  };

  _onSignIn = () => {
    this.props.navigation.navigate('SignIn');
  }

  _onSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <Container>
        <Text>Overview Screen</Text>
        <CommonButton onPress={this._onSignIn} text={'Sign In'} />
        <CommonButton onPress={this._onSignUp} text={'Sign Up'} />
      </Container>
    );
  }
}

export default Overview;
