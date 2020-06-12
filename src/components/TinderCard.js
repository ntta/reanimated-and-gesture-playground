import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TinderCard = () => {
  return (
    <View style={styles.container}>
      <Text>This is a tinder card</Text>
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

export default TinderCard;
