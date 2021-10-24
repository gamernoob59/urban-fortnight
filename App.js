import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import HomeScreen from './screens/HomeScreen'
import About from './screens/About'
import Suggest from './screens/Suggest'
import TabScreen from './screens/TabScreen'


export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  TabScreen: TabScreen,
  About:About,
  Suggest:Suggest,

})

const AppContainer = createAppContainer(AppNavigator)