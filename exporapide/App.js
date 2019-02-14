import React from 'react';
import { StyleSheet, Button,Text, View, StatusBar } from 'react-native';

import { createDrawerNavigator, createAppContainer } from "react-navigation";

import Calcul from './components/Calcul'
import Tableau from './components/Tableau'
import PgcdCalcul from './components/PgcdCalcul'

class Home extends React.Component {
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

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
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
