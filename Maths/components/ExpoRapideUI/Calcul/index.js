import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

import Tableau from '../Tableau';
import TextInputCustom from '../../TextInputCustom';

import {APP_COLORS} from '../../../Style/Colors';


export default class Calcul extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    number: 0,
    mod: 0,
    puissance: 0,
    tab: [],
    result: false

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

    return (

      <View style={styles.container}>

          <TextInputCustom
            action={(number) => this.setState({number})}
            label="Nombre"
          />

          <TextInputCustom
            action={(puissance) => this.setState({puissance})}
            label="Puissance"
          />

          <TextInputCustom
            action={(mod) => this.setState({mod})}
            label="Modulo"
          />
        <Text style={{textAlign: 'center'}}>
          {
            this.state.number == 0 ? 'Entrer des valeurs' : resp(parseInt(this.state.number),parseInt(this.state.mod),parseInt(this.state.puissance))[2]
          }
        </Text>
        <Tableau ai={resp(parseInt(this.state.number),parseInt(this.state.mod),parseInt(this.state.puissance))[1]} alpha={resp(parseInt(this.state.number),parseInt(this.state.mod),parseInt(this.state.puissance))[0]}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, paddingTop: 0, backgroundColor: 'orange' },
});
