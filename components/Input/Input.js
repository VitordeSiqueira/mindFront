import React from 'react'
import { StyleSheet,  TextInput} from 'react-native'


export function Input(props) {
    return (

        <TextInput
            secureTextEntry={props.password}
            style={styles.input}
            placeholder={props.placeholder}
        />

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '78%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: '5px'
      },

})