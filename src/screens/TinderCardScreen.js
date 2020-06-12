import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TinderCard from '../components/TinderCard';

const TinderCardScreen = () => {
  return (
    <View style={styles.container}>
      <TinderCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TinderCardScreen;
