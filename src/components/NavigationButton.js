import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { withNavigation } from '@react-navigation/compat';

const NavigationButton = ({ navigation, navName, btnName }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(navName);
        }}
      >
        <Text style={styles.btnText}>{btnName}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginVertical: 20,
  },
  btnText: {
    fontSize: 20,
  },
});

export default withNavigation(NavigationButton);
