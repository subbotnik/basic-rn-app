import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { data, clickCounter, navigation } = this.props;
    return (
      <View style={{ paddingTop: 30 }}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickCounter}>
          <Text>{`Click ${data}`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
