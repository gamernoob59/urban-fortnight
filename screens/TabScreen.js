import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {View} from 'react-native'
import BottomTabNavigator from '../navigations/TabNavigation'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default class TabScreen extends React.Component{
  render(){
    return(
      <NavigationContainer><BottomTabNavigator/></NavigationContainer>
    )}}