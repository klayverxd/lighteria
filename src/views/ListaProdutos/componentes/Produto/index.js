import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Produto = ({ imagem, titulo }) => {
  return (
    <View style={styles.containerItem}>
      <Image source={imagem} style={styles.image} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: '#fff',
    borderRadius: 10,

    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 8,
  },
  texto: {
    marginTop: 8,
    fontSize: 14,
    color: '#848486',
  },
  imagem: {
    height: 84,
  },
})

export default Produto
