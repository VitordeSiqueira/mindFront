import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Botao } from '../Botao/Botao.js'
import { Input } from '../Input/Input.js';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Cadastra-se</Text>
      
      <Input 
        password={false}
        placeholder="Nome completo"
      />

      <Input 
        password={false}
        placeholder="Email"
      />

<Input 
        password={true}
        placeholder="Senha"
      />

      <Botao 
        texto="Criar sua conta"
      />

      <Text style={styles.criarConta}>Já tem uma conta?  <Text style={styles.link}>Entrar</Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  login: {
    fontSize: 32,
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
