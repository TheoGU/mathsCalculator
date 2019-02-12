import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Calcul from './components/Calcul'
import Tableau from './components/Tableau'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden />
        <Calcul />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 1, paddingTop: 1, backgroundColor: 'white' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
