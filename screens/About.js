import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class About extends React.Component{
  render(){
    return(
  <View style={styles.container}>
    <Text>About Screen</Text>
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
