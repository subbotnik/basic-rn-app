import React, { Component } from 'react';
import { Text } from 'react-native';
import CommonButton from '~/ui/components/CommonButton';
import Container from '~/ui/components/MainContainer';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <CommonButton
          onPress={() => navigation.navigate('Overview')}
          text="Log out"
        />
      ),
    };
  };

  render() {
    const { data, clickCounter } = this.props;
    return (
      <Container>
        <Text>Home Screen</Text>
        <CommonButton onPress={clickCounter} text={`Click ${data}`} />
      </Container>
    );
  }
}

export default Home;
