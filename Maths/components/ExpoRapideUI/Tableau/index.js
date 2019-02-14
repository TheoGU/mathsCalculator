import React from 'react';
import { StyleSheet,ScrollView, View } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import {Button} from 'react-native-elements';

import {APP_COLORS} from '../../Style/Colors';

export default class Tableau extends React.Component {
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

        <Button
          title="Generate"
          onPress={this.creation}
          buttonStyle={{
            backgroundColor: APP_COLORS.button
          }}
          />


      <ScrollView>
        <Table>

          <Row data={this.state.tableHead} textStyle={styles.text}/>
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
  container: { flex: 2, padding: 5, paddingTop: 5, backgroundColor: 'yellow'},
  text: { margin: 6 }
});
