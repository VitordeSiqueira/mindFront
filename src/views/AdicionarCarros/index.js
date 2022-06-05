import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Titulo } from '../../components/styled/Texto'
import { StyledButton, StyledMessageButton } from '../../components/styled/Botao';


export default () => {
    const navigation = useNavigation()
    // const handleSaveButtonClick = async () => {
    //     if (marcaField && modeloField && anoField && corField && descricaoField) {
    //       let res = await Api.signIn(emailField, senhaField)
    //       if (res.access_token) {
    //         await AsyncStorage.setItem('token', res.access_token)
    //         navigation.dispatch(
    //           CommonActions.reset({
    //             index: 0,
    //             routes: [
    //               { name: 'PreLoad' },
    //             ],
    //           })
    //         )
    //       } else {
    //         Platform.OS === 'web' ? alert(`‼️Erro: ${res.errors[0].msg}`) : Alert.alert("‼️Erro", res.errors[0].msg)
    //       }
    //     } else {
    //       Platform.OS === 'web' ? alert(`‼️Atenção: Preencha todos os campos`) : Alert.alert("‼️Atenção", 'Preencha todos os campos')
    //     }
    //   }
    return (
        <View style={styles.container}>
            <Titulo>
                Adicionar Carro
            </Titulo>

            <View style={styles.boxInput}>
            <Text> Marca</Text>
                <TextInput
                   style={styles.input}
                //    value={marcaField}
                />
            </View>

            <View style={styles.boxInput}>
            <Text> Modelo</Text>
                <TextInput
                   style={styles.input}
                //    value={modeloField}
                />
            </View>

            <View style={styles.boxInput}>
            <Text> Ano </Text>
                <TextInput
                   style={styles.input}
                //    value={anoField}
                   keyboardType='numeric'
                />
            </View>

            <View style={styles.boxInput}>
            <Text> Cor </Text>
                <TextInput
                   style={styles.input}
                //    value={corField}
                />
            </View>

            <View style={styles.boxInput}>
            <Text> Descrição</Text>
                <TextInput
                   style={styles.input}
                //    value={descricaoField}
                />
            </View>

            <StyledButton
                onPress={() => navigation.navigate('MidiasRecentes')}
                icon="login"
                text="Salvar" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxInput: {
        width: '80%',
        marginTop: '16px',
        textAlign: 'center'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });