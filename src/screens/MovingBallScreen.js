import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ball from '../components/Ball';

const MovingBallScreen = () => {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MovingBallScreen;
