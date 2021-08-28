import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import ListaProdutos from './src/views/ListaProdutos'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <ListaProdutos />
      </SafeAreaView>
    </NavigationContainer>
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
    fontWeight: 'bold',
    color: '#a1a5aa',
  },
})
