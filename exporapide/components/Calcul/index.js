import React from 'react';
import { StyleSheet,Text, View,TextInput } from 'react-native';
import { Button,Input } from 'react-native-elements';

import Tableau from '../Tableau';


export default class Calcul extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    number: 0,
    mod: 0,
    puissance: 0,
    tab: []

  };

}

  render() {

    function resp(number,modulo,puissance){
      const tab = [number];
      let calc = 1;

      const binaire = (puissance).toString(2);
      const binaireReverse  = binaire.split('').reverse().join('');

      tab.push();
      for (var i = 0; i < binaire.length-1; i++) {
        tab.push(tab[i]*tab[i] % modulo);
      }

        for (var i = 0; i < binaireReverse.length; i++) {
          if (binaireReverse[i] == 1) {
            calc *= tab[i];
          }
        }
      calc %= modulo;
      const response = `${calc} mod ${modulo}`;
      var resultat =  [tab, binaireReverse, response]
      return resultat;
    }


    const state = this.state;
    return (

      <View style={styles.container}>

        <Text>Nombre :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(number) => this.setState({number})}
          keyboardType="numeric"
        />

        <Text>Puissance :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(puissance) => this.setState({puissance})}
          keyboardType="numeric"
        />

        <Text>Modulo : </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(mod) => this.setState({mod})}
          keyboardType="numeric"
        />
      <Text style={{textAlign: 'center'}}>{resp(parseInt(this.state.number),parseInt(this.state.mod),parseInt(this.state.puissance))[2]}</Text>
        <Tableau i="" ai={resp(parseInt(this.state.number),parseInt(this.state.mod),parseInt(this.state.puissance))[1]} alpha={resp(parseInt(this.state.number),parseInt(this.state.mod),parseInt(this.state.puissance))[0]}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, paddingTop: 0, backgroundColor: 'white' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
