import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { createDrawerNavigator, createAppContainer } from "react-navigation";

import Calcul from './components/ExpoRapideCalcul/Calcul'
import Tableau from './components/ExpoRapideCalcul/Tableau'
import PgcdCalcul from './components/PgcdCalcul'

class ExpoRapide extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Exponetiel Rapide',
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Calcul />
      </View>
    );
  }
}

class Pgcd extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Pgcd',
  };

  render() {
    return (
      <PgcdCalcul />
    );
  }
}
class Calculatrice extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Calculatrice',
  };

  render() {
    return (
      <Text>calculette</Text>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Calculatrice: {
    screen: Calculatrice,
  },
  ExpoRapide: {
    screen: ExpoRapide,
  },
  Notifications: {
    screen: Pgcd,
  },

});

const App = createAppContainer(MyDrawerNavigator);


const styles = StyleSheet.create({
  container: { flex: 1, padding: 1, paddingTop: 5, backgroundColor: 'red' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});


export default App
