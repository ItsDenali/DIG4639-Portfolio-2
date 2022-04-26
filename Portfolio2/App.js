import { SafeAreaView, Button, Pressable, Text, TextInput, View } from "react-native";
import { useCallback, useState } from 'react'
import LoginSystem from './LoginSystem.js'
import { StatusBar } from "expo-status-bar";

export default function App(){
  return (
  <SafeAreaView style={{flex:1, borderColor:"Black",borderWidth: 1, backgroundColor:"#191919"}}>

    <View style={{flex:1}}>
      
      <LoginSystem/>

      <StatusBar style="auto" />

    </View>
    
  </SafeAreaView>
  )
}