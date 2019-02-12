import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Calcul from './components/Calcul'

export default class App extends React.Component {
  render() {
    return (
      <View>
      <StatusBar hidden />
        <Calcul />
      </View>
    );
  }
}
