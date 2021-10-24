import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Suggest extends React.Component{
  render(){
    return(
  <View style={styles.container}>
    <Text>Suggest Screen</Text>
  </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
