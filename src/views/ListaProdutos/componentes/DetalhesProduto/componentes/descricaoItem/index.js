import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  FONT_SIZE_MEDIUM,
  FONT_SIZE_X_LARGE,
  FONT_SIZE_SMALL,
  WHITE,
  BLACK,
  FONT_SIZE_LARGE,
  LIGHTERGRAY,
  LIGHTGRAY,
} from '../../../../../../styles/styles'

import { Botao } from '../../../../../../componentes/botao'
import { formataValor } from '../../../../../../utils/utils'

export const DescricaoItem = ({
  imagem,
  estudio,
  itemDesc,
  titulo,
  itemName,
  preco,
  id,
}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.headerPosicao}>
            <View>
              <Text style={styles.textSuperior}>{estudio}</Text>
              <Text style={styles.textMedio}>{itemName}</Text>
              <Text style={styles.textInferior}>{titulo}</Text>
            </View>
            <Image source={imagem} style={styles.imageItem} />
          </View>
          <View>
            <Text style={styles.textoDescricao}>{itemDesc}</Text>
          </View>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{formataValor(preco)}</Text>
            <Botao
              titulo={'COMPRAR'}
              onPress={() => navigation.push('Checkout')}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60,
  },
  itemPosicao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  headerPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSuperior: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 4,
  },
  textMedio: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_X_LARGE,
    marginBottom: 4,
  },
  textInferior: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTGRAY,
    marginBottom: 12,
  },
  imageItem: {
    width: 32,
    height: 72,
  },
  textoDescricao: {
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTERGRAY,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  moeda: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_LARGE,
    marginTop: 10,
    color: BLACK,
  },
})
