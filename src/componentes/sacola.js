import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

export const Sacola = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.containerSacola}
      onPress={() => navigation.push('Checkout')}
    >
      <Image
        source={require('../assets/images/icone-sacola.png')}
        style={styles.imagem}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
  imagem: {
    height: 30,
    width: 30,
  },
})
