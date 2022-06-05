import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import themes from '../../themes'

const MessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 16px;
margin-bottom: 16px;
`
const MessageButtonText = styled.Text`
font-size: 16px;
`
const MessageButtonTextBold = styled.Text`
font-size: 16px;
color: ${themes.padrao.colors.brand.roxo};
font-weight: bold;
margin-left: 8px;
`
export const StyledMessageButton = ({ text, textBold, onPress }) => {
    return (
        <MessageButton
            onPress={onPress}>
            <MessageButtonText>{text}</MessageButtonText>
            <MessageButtonTextBold>{textBold}</MessageButtonTextBold>
        </MessageButton>
    )
}

const CustomButton = styled.TouchableOpacity`
flex-direction: row;
height: 50px;
background-color: ${themes.padrao.colors.brand.roxo};
margin-top: 16px;
border-radius: 10px;
justify-content: center;
align-items: center;
padding-horizontal: 10px;
`
const CustomButtonText = styled.Text`
margin-left: 16px;
font-size: 18px;
color: ${themes.padrao.colors.neutral.neutral_100};
`

export const StyledButton = ({ icon, text, onPress }) => {
    return (
        <CustomButton
            onPress={onPress}>
            <MaterialCommunityIcons name={icon} size={30} color={themes.padrao.colors.neutral.neutral_100} />
            <CustomButtonText>{text}</CustomButtonText>
        </CustomButton>
    )
}
