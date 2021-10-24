import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default class NatureTab extends React.Component{
  playSound1 = async()=>{
    const soundObject = await Audio.Sound.createAsync(
      {uri: 'http://soundbible.com/grab.php?id=1079&type=mp3'},
      { shouldPlay: true })
  }

  render(){
    return(
  <View>
      <Text style={styles.sfxText}>Splat</Text>
        <TouchableOpacity onPress={this.playSound1} style={styles.sfxButton1}>Play</TouchableOpacity>
        <TouchableOpacity onPress={this.dnldSound1} style={styles.sfxButton2}>Download</TouchableOpacity>
  </View>
    )}
}


const styles = StyleSheet.create({
  sfxText:{
    textAlign: 'center',
    fontSize: 20,
  },
  sfxButton1:{
    textAlign: 'center',
    backgroundColor: '#3ac3e9',
    fontFamily: "arial",
    marginLeft: '20%',
    marginRight: '20%',
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  sfxButton2:{
    textAlign: 'center',
    backgroundColor: '#1fd0a7',
    fontFamily: "arial",
    marginLeft: '20%',
    marginRight: '20%',
    paddingTop: '15px',
    paddingBottom: '15px',
    marginBottom: '5%'
  }
})
