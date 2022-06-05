import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { Titulo } from '../../components/styled/Texto'
import { StyledButton, StyledMessageButton } from '../../components/styled/Botao';

export default () => {
    const navigation = useNavigation()

    return (
        <View>
            <Titulo>
                Carros 
                <StyledButton
                    onPress={() => navigation.navigate('AdicionarCarros')}
                    text="Adicionar" 
                />
            </Titulo>
        </View>
    );
}