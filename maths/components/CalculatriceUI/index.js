//NATIVE IMPORT
import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { Calculator } from 'react-native-calculator'
import Gradient from 'react-native-css-gradient';


//STYLE
import {APP_COLORS} from '../../Style/Colors'




export default class CalculatriceUI extends React.Component {
  render() {
    const {width, height} = Dimensions.get('window');

    return (
      <View style={styles.container}>

        <Calculator
          style={{ flex:2 }}
          displayBackgroundColor="#333333"

          calcButtonBackgroundColor="#333"
          calcButtonColor="#1dd1a1"

          numericButtonBackgroundColor="#333"
          numericButtonColor="#54a0ff"

          actionButtonColor="#00d2d3"
          actionButtonBackgroundColor="#333"

          borderColor="rgba(255,255,255,0.1)"

        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
});
