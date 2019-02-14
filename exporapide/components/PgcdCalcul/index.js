//NATIVE IMPORT
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
//CUSTOM DEPENDENCES
import { Button, Input } from 'react-native-elements';
import { Table, Row } from 'react-native-table-component';
import TextInputCustom from '../TextInputCustom';

//STYLE
import {APP_COLORS} from '../../Style/Colors'




export default class PgcdCalcul extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      a: '',
      b: '',
      tabA: [],
      tabB: [],
      tabU: [],
      tabV: [],
      tabQ: [],
      tabR: [],
      tableHead: ['a', 'b', 'r', 'q', 'u', 'v'],
      tableBody: []

    }
  }


  pgcd = () =>{
    if(this.state.a != '' && this.state.b != ''){
      let a,b,r,q,u,v;
      let tabA = [];
      let tabB = [];
      let tabQ = [];
      let tabR = [];
      let tabV = [0];
      let tabU = [1];
      let i = 0;
      const val1 = parseInt(this.state.a);
      const val2 = parseInt(this.state.b);
      a = val1;
      b = val2;

      q = Math.floor(a/b);
      r = a-(q)*b;

      console.log('a\tb\tr\tq');
        do{
          q = Math.floor(a/b)
          r = a-(q)*b

          tabA.push(a);
          tabB.push(b);
          tabQ.push(q);
          tabR.push(r);
          console.log(`${tabA[i]}\t${tabB[i]}\t${tabR[i]}\t${tabQ[i]}`);
          a = b;
          b = r;
          i ++;

        }while(b != 0);
        tabA.push(a);
        tabB.push(b);
        console.log(`${tabA[tabA.length-1]}\t${tabB[tabB.length-1]}`);

        for (var g = 0; g < tabA.length; g++) {
          tabU.push(tabV[tabV.length-1])
          tabV.push(tabU[g] - (tabQ[tabQ.length-(g+1)] * tabU[g+1]));
        }

        tabV.reverse();
        tabU.reverse();
        console.log('\n\nu\tv');
        for (var j = 1; j < tabV.length; j++) {
          console.log(`${tabU[j]}\t${tabV[j]}`);
        }

        tabU.shift();
        tabV.shift();

        var one = []
        for (var i = 0; i < tabA.length; i++) {
          one.push([tabA[i],tabB[i],tabR[i],tabQ[i],tabU[i],tabV[i]])
        }


        this.setState({
          tabA: tabA,
          tabB: tabB,
          tabU: tabU,
          tabV: tabV,
          tabQ: tabQ,
          tabR: tabR,
          tableBody: one

        })
      }

        else{
          alert('erreur')
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <View>

        <TextInputCustom
          action={(a) => this.setState({a})}
          label="A"
        />
      <TextInputCustom
        action={(b) => this.setState({b})}
        label="B"
      />

      </View>
      <View style={{marginTop: 30}}>
        <Button
          raised
          title='Valider'
          onPress={this.pgcd}
          backgroundColor={APP_COLORS.buttonCustom}
          color={APP_COLORS.darkprimary}
          />
      </View>
        <View style={{marginTop: 20}}>
        <Table>
          <Row data={this.state.tableHead} style={tableStyle.head} textStyle={tableStyle.text}/>
          {
              this.state.tableBody.map((list,id) => (
                <Row key={id} data={list} textStyle={tableStyle.text}/>
              ))
          }
        </Table>
      </View>

      </View>
    );
  }
}
const tableStyle = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#333',color: 'white' },
  head: { height: 40, backgroundColor: APP_COLORS.darkprimary },
  text: { margin: 6, color:APP_COLORS.primary}
});
const styles = {
  input : {
    borderWidth: 1,
    borderColor: APP_COLORS.primary
  }
}
