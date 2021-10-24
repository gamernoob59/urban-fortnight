import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';



export default class HomeScreen extends React.Component{
  goToTabScreen=()=> {
      this.props.navigation.navigate('TabScreen')
    }
    goToAboutScreen=()=> {
      this.props.navigation.navigate('About')
    }
    goToSuggestScreen=()=> {
      this.props.navigation.navigate('Suggest')
    }

  render(){
    return(
  <View style={styles.container}>
    <Text style={styles.title}>Sound App</Text>
    <TouchableOpacity style={styles.buttons} onPress={this.goToTabScreen}>Start </TouchableOpacity>
    <TouchableOpacity style={styles.buttons} onPress={this.goToAboutScreen}>About </TouchableOpacity>
    <TouchableOpacity style={styles.buttons} onPress={this.goToSuggestScreen}>Suggest A Sound </TouchableOpacity>
  </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Comic Sans MS",
  },
  title:{
    fontSize:40,
    alignItems: "top"
  },
  buttons:{
    marginBottom:10,
    backgroundColor:"gray",
    padding: 10,

  }
});
