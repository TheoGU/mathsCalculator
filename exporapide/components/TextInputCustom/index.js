import React from 'react'
import {Text, View,TextInput } from 'react-native';

const TextInputCustom = ({action}) => {
  return (
    <View>
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1,borderRadius: 5, paddingLeft: 8}}
      keyboardType="numeric"
      onChangeText={action}
    />
    </View>
  )
}

export default TextInputCustom
