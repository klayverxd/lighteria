import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import { DATA } from '../../utils/data'

import { Item } from './componentes/Produto'
import Cabecalho from './componentes/Cabecalho'

const ListaProdutos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        key={'_'}
        numColumns={2}
        data={DATA}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Cabecalho />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
})

export default ListaProdutos
