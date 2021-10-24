import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Audio } from 'expo-av';

export default class ElectronicTab extends React.Component{

  playSound1 = async()=>{
    const soundObject = await Audio.Sound.createAsync(
      {uri: 'http://soundbible.com/grab.php?id=1320&type=mp3'},
      { shouldPlay: true })
  }

  playSound2 = async() => {
    const soundObject = await Audio.Sound.createAsync(
      {uri: 'http://soundbible.com/grab.php?id=2213&type=mp3'},
      {shouldPlay: true}
    )
  }

  dnldSound1 = () => {
    
  }

  constructor(){
    super();
    this.state={
      sound: '',
    }
  }



  render(){
    return(
      <View>
        <Text style={styles.sfxText}>Short Circuit</Text>
        <TouchableOpacity onPress={this.playSound1} style={styles.sfxButton1}>Play</TouchableOpacity>
        <TouchableOpacity onPress={this.dnldSound1} style={styles.sfxButton2}>Download</TouchableOpacity>
        <Text style={styles.sfxText}>UFO</Text>
        <TouchableOpacity onPress={this.playSound2} style={styles.sfxButton1}>Play</TouchableOpacity>
        <TouchableOpacity onPress={this.dnldSound2} style={styles.sfxButton2}>Download</TouchableOpacity>
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