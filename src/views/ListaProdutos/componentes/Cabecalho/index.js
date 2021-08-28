import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <View style={styles.containerSacola}>
          <Image
            source={require('../../../../assets/images/icone-sacola.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.containerDescricao}>
        <View style={styles.separador} />
        <View style={styles.containerTexto}>
          <Text style={styles.textDescricao}>Categorias</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    PaddingHorizontal: 6,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  containerSacola: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
  image: {
    height: 30,
    width: 30,
  },
  containerDescricao: {
    // paddingHorizontal: 16,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#a1a5aa',
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textDescricao: {
    padding: 34,
    backgroundColor: '#f4f0f4',
    fontSize: 16,
    color: '#a1a5aa',
  },
})

export default Cabecalho
