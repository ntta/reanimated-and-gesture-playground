import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationButton from '../components/NavigationButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationButton navName="Moving Ball" btnName="Moving Ball Screen" />
      <NavigationButton navName="Tinder Card" btnName="Tinder Card Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default HomeScreen;
