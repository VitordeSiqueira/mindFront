import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../views/SignIn/index'
import SignUp from '../views/SignUp/index'
import MidiasRecentes from '../views/MidiasRecentes'
import PreLoad from '../views/PreLoad'
import DrawerNavigator from './DrawerNavigator'

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PreLoad"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Preload" component={PreLoad} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="MidiasRecentes" component={MidiasRecentes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}