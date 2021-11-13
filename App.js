import React from 'react';
import { StyleSheet, TabBarIOSItem, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BookTransactionScreen from './screens/BookTransactionScreen';
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createAppContainer} from 'react-navigation'

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Home:{screen:HomeScreen},
  Transaction:{screen:BookTransactionScreen}
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
