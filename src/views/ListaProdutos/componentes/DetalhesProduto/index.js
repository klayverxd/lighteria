import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Background } from './componentes/background'
import { DescricaoItem } from './componentes/descricaoItem'

export const DetalhesProduto = ({ route }) => {
  const { titulo, imagem, itemDesc, itemName, estudio, preco, id } =
    route.params

  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem
        imagem={imagem}
        estudio={estudio}
        itemDesc={itemDesc}
        itemName={itemName}
        titulo={titulo}
        preco={preco}
        id={id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
