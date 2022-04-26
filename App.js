import { StatusBar } from 'expo-status-bar';
import *as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import { Header } from 'react-native-elements';

export default function App (){

  getWord = (word) => {
    var searchKeyword = word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json"
    //Console.log(url)
    return fetch(url)
    .then((data) => {

      if(data.status === 200){
        return data.json()
      }
      else{
        return null 
      }
    })
  }

  return (
    <View style={styles.container}>
     <Header/>
       <TextInput 
       style ={styles.inputBox}
       onChangeText ={text => {
         this.setState({
          text: text,
          isSearchPressed: false,
          word : "Loading...",
          lexicalCategory :'',
          examples : [],
          definition : ""
       });
      }}
      value = {this.state.text}
    />
      <TouchableOpacity
      
      >


      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems:"center",
    justifyContent:'center'
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
  },
});
