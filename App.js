import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TinderCardScreen from './src/screens/TinderCardScreen';
import HomeScreen from './src/screens/HomeScreen';
import MovingBallScreen from './src/screens/MovingBallScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Moving Ball" component={MovingBallScreen} />
        <Stack.Screen name="Tinder Card" component={TinderCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
