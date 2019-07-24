import React from 'react';
import { View, StyleSheet } from 'react-native';


const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Container;
