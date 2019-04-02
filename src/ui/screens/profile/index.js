import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ paddingTop: 30 }}>
        <Text>Profile Screen</Text>
        <TouchableOpacity onPress={navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
