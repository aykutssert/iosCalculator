import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,TouchableOpacity,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryPage from './components/EntryPage';
import Calculator from './components/Calculator';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  header:{
    backgroundColor:"green",
    
  }
});

export default function App() {
  const dizi = [1,2,3];
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EntryPage" screenOptions={{headerShown: false,}}>

        <Stack.Screen name="EntryPage" component={EntryPage} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}


