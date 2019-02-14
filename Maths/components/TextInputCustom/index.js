import React from 'react'
import {Text, View,TextInput } from 'react-native';
import {APP_COLORS} from '../../Style/Colors';

const TextInputCustom = ({action, label}) => {
  return (
    <View>
    <Text style={{color: APP_COLORS.text}}>{label}</Text>
    <TextInput
      style={{height: 40, borderColor: APP_COLORS.border, borderWidth: 1,borderRadius: 5, paddingLeft: 8}}
      keyboardType="numeric"
      onChangeText={action}
    />
    </View>
  )
}

export default TextInputCustom
