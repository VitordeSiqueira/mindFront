import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'


export function Botao(props) {
    return (
        <View style={styles.container}>     
            <TouchableOpacity style={styles.button}>
                <Text style={styles.txtButton}>{props.texto}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#4F3AAF",
        width: 180,
        justifyContent: 'center',
        borderRadius: '15px',
        marginTop: 42
      },
      txtButton: {
        color: '#fff',
        marginBottom: '15px',
        marginTop: '15px'
      }

})