import React from 'react'
import { StyleSheet, View } from 'react-native';
import Cadastro from './components/Cadastro/Cadastro.js';
import  Entrar  from './components/Entrar/Entrar.js';

export default function App() {
  return (
    <View style={styles.container}>
     <Cadastro></Cadastro>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%'
  },
});
