import React from 'react';
import { StyleSheet, View } from 'react-native';

const Ball = () => {
  return <View style={styles.ball} />;
};

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'black',
  },
});

export default Ball;
