import React, { Component } from 'react';
import { StyleSheet,ScrollView, View, Button } from 'react-native';
import { Table, Row } from 'react-native-table-component';

export default class Tableau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['i', 'ai', 'alpha'],
      tableBody: []
    }
  }


  creation = () =>{
    var nice = [];
    for (var i = 0; i < this.props.alpha.length; i++) {
      var top = [i,this.props.ai[i],this.props.alpha[i]]
      nice.push(top);
    }

    this.setState({
      tableBody: nice
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Button title="generate" onPress={this.creation}/>
        <ScrollView>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>

          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
            {
              this.state.tableBody.map((list,id) => (
                <Row key={id} data={list}/>
                ))
            }

        </Table>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 2, padding: 5, paddingTop: 4, backgroundColor: 'yellow' },
  text: { margin: 6 }
});
