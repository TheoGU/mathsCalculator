import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Image } from 'react-native';


const Setting = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
    <Image
      source={require('./view.png')}
      style={{width: 50, height: 50}}
    />
    </TouchableOpacity>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {position: 'absolute', top: 0, right: 0, margin: 10}
});
