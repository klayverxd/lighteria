import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'

import { DetalhesProduto } from './src/views/DetalhesProduto'
import { ListaProdutos } from './src/views/ListaProdutos'
import { Checkout } from './src/views/Checkout'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { COR_DE_FUNDO, FONT_SIZE_XX_LARGE } from './src/styles/styles'

import Provider from './src/provider'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="ListaProdutos">
            <Stack.Screen
              name="ListaProdutos"
              component={ListaProdutos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetalhesProduto"
              component={DetalhesProduto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
  },
  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  titulo: {
    fontSize: FONT_SIZE_XX_LARGE,
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
    backgroundColor: COR_DE_FUNDO,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a1a5aa',
  },
})
