import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


const CommonButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3299FF',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    color: '#fff',
  },
});

export default CommonButton;
