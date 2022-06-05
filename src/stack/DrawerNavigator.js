import React from 'react'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import PreLoad from '../views/PreLoad'
import SignIn from '../views/SignIn/index'
import SignUp from '../views/SignUp/index'
import MidiasRecentes from '../views/MidiasRecentes'
import AdicionarCarros from '../views/AdicionarCarros'

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
}
export default function DrawerNavigator() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="PreLoad" drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="PreLoad" component={PreLoad} />
                <Drawer.Screen name="SignIn" component={SignIn} />
                <Drawer.Screen name="SignUp" component={SignUp} />
                <Drawer.Screen name="MidiasRecentes" component={MidiasRecentes} />
                <Drawer.Screen name="AdicionarCarros" component={AdicionarCarros} />
            </Drawer.Navigator>
        </NavigationContainer>

    )

}