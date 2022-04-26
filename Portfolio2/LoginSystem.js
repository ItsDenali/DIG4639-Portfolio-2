import { Button, Pressable, Text, TextInput, Image, View } from "react-native";
import { useCallback, useState } from 'react'
import ContentPage from './ContentPage.js'

export default function LoginSystem() {
  
    var [appState, setAppState] = useState(false)
    var [username, setUsername] = useState("")
    var [password, setPassword] = useState("")
    var [errorMessage, setErrorMessage] = useState("")


    var doLogin = useCallback(() => {

      if(password === "Music")  {
        setAppState(true)
      }
      else{
        setAppState(false)
        setErrorMessage("Wrong password!")
      }
    },[username, password])
    
    

    return(

      appState ?

          <View style={{
            color: "gray",
            flex: 1,
            flexDirection: "column",
            height: 100,
            padding: 20,
            fontSize: "Large",
            alignItems:"center",
            justifyContent:"center"}}>

            <Text style={{fontSize:20, fontWeight:"200", textAlign:"center", color:"white", padding: 5}}
            >
            Welcome, {username}, thank you for logging in!
            </Text>
            <br/>
            <ContentPage/>

          </View>
        
        :
        
          <View style={{
            color: "white",
            flex: 1,
            flexDirection: "column",
            height: 100,
            padding: 20,
            fontSize: "Large",
            alignItems:"center",
            justifyContent:"center"}}
            >
          
            <Text style={{fontSize: 30, color:"white"}}>Please log in to listen to some music!</Text><br/>  
            <Text style={{fontSize: 15, color:"white"}}>Any username works, and the password is:</Text><br/>          
            <Text style={{fontSize: 15, color:"white"}}><i>Music</i></Text>                        
            
        <br/>

          <TextInput 
          autoFocus={true}
          style={{height: 40, margin: 20, borderWidth: 1, backgroundColor: "white", padding: 10, color:"black"}}
          placeholder="Username"
          label="username"
          onChangeText={setUsername}
          ></TextInput>     
          
          <TextInput
          secureTextEntry={true}
          style={{height: 40, margin: 20, borderWidth: 1, backgroundColor: "white",  padding: 10, color:"black"}}
          placeholder="Password"
          label="password"
          onChangeText={setPassword}
          ></TextInput>

          <Text style={{color: "red", padding: 10, fontSize: 20}}>{errorMessage}</Text>             
          
        <Button
        title= "Login"
        onPress={doLogin}
        ></Button>
        <Text style={{fontSize: 15, color:"white", paddingTop: 30, textAlign:"center"}}>
          <i>
            <b>Notice:</b> Google Chrome users may get a security alert
            <br/>
            on this page because of the simple password used here.
            <br/>
            It's just a system reaction and nothing to worry about.
          </i>
        </Text>                        


        </View>
    )
}