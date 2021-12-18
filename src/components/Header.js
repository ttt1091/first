import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: '1rem',
    backgroundColor: 'lightblue',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;