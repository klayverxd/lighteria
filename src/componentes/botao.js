import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { LIGHTBLUE, FONT_SIZE_MEDIUM, WHITE } from '../styles/styles.js'

export const Botao = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botaoContainer: {
    backgroundColor: LIGHTBLUE,
    padding: 20,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  },
})
