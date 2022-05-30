import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Botao } from '../Botao/Botao.js'
import { Input } from '../Input/Input.js';

export default function Entrar() {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login</Text>
      
      <Input 
        password={false}
        placeholder="Nome ou e-mail"
      />

      <Input 
        password={true}
        placeholder="Senha"
      />

      <Botao 
        texto="Entrar"
      />

      <Text style={styles.criarConta}>Ainda não tem uma conta?  <Text style={styles.link}>Criar Conta</Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  login: {
    fontSize: 62,
    marginBottom: 24
  },
  criarConta: {
    marginTop: 80,
    fontSize: 12
  },
  link: {
    color: 'blue'
  }
});
