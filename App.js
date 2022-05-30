import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome ou E-mail"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Senha"
      />

      <TouchableOpacity style={styles.button}>
          <Text style={styles.txtButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  input: {
    height: 40,
    width: '78%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#4F3AAF",
    width: 100,
    justifyContent: 'center',
  },
  txtButton: {
    color: '#fff',
  }
});
