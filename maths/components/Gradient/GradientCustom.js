import React, { Component } from 'react';
import { Text, ScrollView, View, Image, Dimensions, StyleSheet, StatusBar} from 'react-native';
import Gradient from 'react-native-css-gradient';


export default class GradientCustom extends Component {

  render() {
    const {width, height} = Dimensions.get('window');

    return (
        <View>
            <Gradient
                gradient="linear-gradient(120deg, #54a0ff 0%, #00d2d3 100%)"
                style={{width,height}}
              >
              </Gradient>

          </View>

   );
  }
}
