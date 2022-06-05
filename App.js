import React from 'react'
import { StyleSheet, View } from 'react-native';
import Navigation from './src/stack/Navigation'
import DrawerNavigator from './src/stack/DrawerNavigator';
export default function App() {
  return (
    <View>
      <DrawerNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%'
  },
});
