import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import ElectronicTab from '../tabs/ElectronicTab'
import GameTab from '../tabs/GameTab'
import HumanTab from '../tabs/HumanTab'
import MusicTab from '../tabs/MusicTab'
import NatureTab from '../tabs/NatureTab'

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
    return(
      <Tab.Navigator
        labeled={false}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "ElectronicTab") {
              iconName = focused ? "tablet-portrait" : "tablet-portrait-outline";
            }
            else if (route.name === "GameTab") {
              iconName = focused ? "rocket" : "rocket-outline";
            }
            else if (route.name === "HumanTab") {
              iconName = focused ? "person" : "person-outline";
            }
            else if (route.name === "MusicTab") {
              iconName = focused ? "musical-notes" : "musical-notes-outline";
            }
            else if (route.name === "NatureTab") {
              iconName = focused ? "leaf" : "leaf-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(15)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"#00FFFF"}
        inactiveColor={"gray"}
      >
        <Tab.Screen name="ElectronicTab" component={ElectronicTab} />
        <Tab.Screen name="GameTab" component={GameTab} />
        <Tab.Screen name="HumanTab" component={HumanTab} />
        <Tab.Screen name="MusicTab" component={MusicTab} />
        <Tab.Screen name="NatureTab" component={NatureTab} />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  bottomTabStyleLight: {
    backgroundColor: "#eaeaea",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(20),
    height: RFValue(30)
  }
});