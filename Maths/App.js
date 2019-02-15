
import React from 'react';
import { StyleSheet, Text, View, StatusBar,Dimensions } from 'react-native';

import Gradient from 'react-native-css-gradient';


import { createDrawerNavigator, createAppContainer } from "react-navigation";

import ExpoUICalcul from './components/ExpoRapideUI/Calcul'
import PgcdUI from './components/PgcdUI/Calcul'

import GradientCustom from './components/Gradient/GradientCustom';




class ExpoRapide extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Exponetiel Rapide',
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ExpoUICalcul />
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
        <PgcdUI />
    );
  }
}
class Calculatrice extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Calculatrice',
  };

  render() {
    const {width, height} = Dimensions.get('window');

    return (
      <View>
      <Gradient
          gradient="linear-gradient(120deg, #54a0ff 0%, #00d2d3 100%)"
          style={{width,height}}
        >
        <Text>Calculette</Text>
        </Gradient>
      </View>
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
  Pgcd: {
    screen: Pgcd,
  },
},
{
  initialRouteName: 'Calculatrice',
  drawerType: 'front',

  contentOptions:{
  activeTintColor: '#1dd1a1',
  inactiveTintColor: '#48dbfb',
  activeBackgroundColor:'#222'
},
drawerBackgroundColor: '#333',
 drawerWidth: 210
});

const App = createAppContainer(MyDrawerNavigator);


const styles = StyleSheet.create({
  container: { flex: 1, padding: 1, paddingTop: 5 },
});


export default App
