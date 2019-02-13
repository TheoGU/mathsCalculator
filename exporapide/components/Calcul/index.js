import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

import Tableau from '../Tableau';
import TextInputCustom from '../TextInputCustom';


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
          <TextInputCustom
            action={(number) => this.setState({number})}
          />

        <Text>Puissance :</Text>
          <TextInputCustom
            action={(puissance) => this.setState({puissance})}
          />

        <Text>Modulo : </Text>
          <TextInputCustom
            action={(mod) => this.setState({mod})}
          />

      <Text style={{textAlign: 'center'}}>{resp(parseInt(this.state.number),parseInt(this.state.mod),parseInt(this.state.puissance))[2]}</Text>
        <Tableau ai={resp(parseInt(this.state.number),parseInt(this.state.mod),parseInt(this.state.puissance))[1]} alpha={resp(parseInt(this.state.number),parseInt(this.state.mod),parseInt(this.state.puissance))[0]}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, paddingTop: 0, backgroundColor: 'orange' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
