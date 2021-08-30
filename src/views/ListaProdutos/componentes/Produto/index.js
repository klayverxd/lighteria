import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export const Item = ({
  imagem,
  titulo,
  estudio,
  itemDesc,
  itemName,
  preco,
  id,
}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() =>
        navigation.push('DetalhesProduto', {
          itemDesc,
          imagem,
          estudio,
          titulo,
          preco,
          id,
          itemName,
        })
      }
    >
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  texto: {
    marginTop: 8,
    // fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#848486',
  },
  imagem: {
    height: 84,
  },
})
