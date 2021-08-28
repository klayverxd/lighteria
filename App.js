import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import ListaProdutos from './src/views/ListaProdutos'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutos />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f0f4',
  },
  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  titulo: {
    // fontFamily: 'OpenSans-ExtraBold',
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
    paddingHorizontal: 16,
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
    // fontFamily: 'OpenSans-ExtraBold',
    color: '#a1a5aa',
  },
})
