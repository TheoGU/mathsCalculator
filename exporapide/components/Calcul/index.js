import React from 'react';
import { Text, View,TextInput } from 'react-native';
import { Button,Input } from 'react-native-elements';


export default class Calcul extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    number: 0,
    mod: 0,
    puissance: 0
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
      console.log(response);
      return response;
    }

    return (
      <View >

        <Text>Nombre :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(number) => this.setState({number})}
        />

        <Text>Puissance :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(puissance) => this.setState({puissance})}
        />

        <Text>Modulo :</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(mod) => this.setState({mod})}
        />
        <Text>{resp(parseInt(this.state.number),parseInt(this.state.mod),parseInt(this.state.puissance))}</Text>
      </View>
    );
  }
}
