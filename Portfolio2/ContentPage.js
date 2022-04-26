import { Button, Pressable, Text, TextInput, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { useCallback, useState } from 'react'

export default function ContentPage() {

    var width = Dimensions.get('window')
    
    return(

        <View>
            {/* Intro Message */}
            <Text style={{fontSize:20, fontWeight:"200", textAlign:"center", color:"white", paddingBottom: 5}}>
                Try out today's featured tracks!
            </Text>
            <Text style={{fontSize:20, fontWeight:"200", textAlign:"center", color:"white", paddingBottom: 20}}>
                Due to technical issues, in-app audio is currently unavailable. Please use provided links instead. 
            </Text>

            {/* First line of songs */}
            <View style={{width:width, flexDirection:'row',justifyContent:'space-between'}}>

                <View style={{paddingBottom: 35}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Image
                        style={{width:350,height:350,padding:20,borderColor:"#191919",borderWidth:5}}
                        source={require('./assets/covers/1.jpg')}
                        /></View><View>

                        <a
                        href="https://www.youtube.com/watch?v=QOew3U_xNlE"
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            fontSize:30,
                            fontWeight: 600,
                            textAlign:"center",
                            color:"#1E90FF",
                            padding: 2,
                            fontFamily: "sans-serif",
                            textDecoration: "none"
                        }}>
                        Vantage
                        </a>
                        <Text style={{fontSize:17, fontWeight:"500", textAlign:"center", color:"white", padding: 2}}>When You Land Here, It's Time To Return</Text>
                        <Text style={{fontSize:20, fontWeight:"400", textAlign:"center", color:"white", padding: 2}}>Flake Music</Text>    
                    </View>
                </View>


                <View style={{paddingBottom: 35}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Image
                        style={{width:350,height:350,padding:20,borderColor:"#191919",borderWidth:5}}
                        source={require('./assets/covers/2.jpg')}
                        /></View><View>

                        <a
                        href="https://www.youtube.com/watch?v=gxgxzP9AzNM"
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            fontSize:30,
                            fontWeight: 600,
                            textAlign:"center",
                            color:"#1E90FF",
                            padding: 2,
                            fontFamily: "sans-serif",
                            textDecoration: "none"
                        }}>
                        Not Dead Yet
                        </a>                        
                        <Text style={{fontSize:20, fontWeight:"500", textAlign:"center", color:"white", padding: 2}}>Long Lost</Text>
                        <Text style={{fontSize:20, fontWeight:"400", textAlign:"center", color:"white", padding: 2}}>Lord Huron</Text>    
                    </View>
                </View>

                <View style={{paddingBottom: 35}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Image
                        style={{width:350,height:350,padding:20,borderColor:"#191919",borderWidth:5}}
                        source={require('./assets/covers/3.jpg')}
                        /></View><View>

                        <a
                        href="https://www.youtube.com/watch?v=n3TQKEUne5Q"
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            fontSize:30,
                            fontWeight: 600,
                            textAlign:"center",
                            color:"#1E90FF",
                            padding: 2,
                            fontFamily: "sans-serif",
                            textDecoration: "none"
                        }}>
                        Way It Goes
                        </a>                        
                        <Text style={{fontSize:20, fontWeight:"500", textAlign:"center", color:"white", padding: 2}}>Landmark</Text>
                        <Text style={{fontSize:20, fontWeight:"400", textAlign:"center", color:"white", padding: 2}}>Hippo Campus</Text>    
                    </View>
                </View>

            </View>

            {/* Second Line of songs */}
            <View style={{width:width, flexDirection:'row',justifyContent:'space-between'}}>

                <View style={{paddingBottom: 35}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Image
                        style={{width:350,height:350,padding:20,borderColor:"#191919",borderWidth:5}}
                        source={require('./assets/covers/4.jpg')}
                        /></View><View>
                        
                        <a
                        href="https://www.youtube.com/watch?v=NHPXXphhiBc"
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            fontSize:30,
                            fontWeight: 600,
                            textAlign:"center",
                            color:"#1E90FF",
                            padding: 2,
                            fontFamily: "sans-serif",
                            textDecoration: "none"
                        }}>
                        Heart It Races
                        </a>                           
                        <Text style={{fontSize:20, fontWeight:"500", textAlign:"center", color:"white", padding: 2}}>Heart It Races</Text>
                        <Text style={{fontSize:20, fontWeight:"400", textAlign:"center", color:"white", padding: 2}}>Dr. Dog</Text>    
                    </View>
                </View>


                <View style={{paddingBottom: 35}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between', width:"40%" }}>
                        <Image
                        style={{width:350,height:350,padding:20,borderColor:"#191919",borderWidth:5}}
                        source={require('./assets/covers/5.jpg')}
                        /></View><View>

                        <a
                        href="https://www.youtube.com/watch?v=NHPXXphhiBc"
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            fontSize:30,
                            fontWeight: 600,
                            textAlign:"center",
                            color:"#1E90FF",
                            padding: 2,
                            fontFamily: "sans-serif",
                            textDecoration: "none"
                        }}>
                        New Slang
                        </a>  
                        <Text style={{fontSize:20, fontWeight:"500", textAlign:"center", color:"white", padding: 2}}>Oh, Inverted World</Text>
                        <Text style={{fontSize:20, fontWeight:"400", textAlign:"center", color:"white", padding: 2}}>The Shins</Text>    
                    </View>
                </View>

                <View style={{paddingBottom: 35}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between', width:"40%" }}>
                        <Image
                        style={{width:350,height:350,padding:20,borderColor:"#191919",borderWidth:5}}
                        source={require('./assets/covers/6.jpg')}
                        /></View><View>

                        <a
                        href="https://www.youtube.com/watch?v=Esit0k1NE4I"
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            fontSize:30,
                            fontWeight: 600,
                            textAlign:"center",
                            color:"#1E90FF",
                            padding: 2,
                            fontFamily: "sans-serif",
                            textDecoration: "none"
                        }}>
                        Snow Days
                        </a> 
                        <Text style={{fontSize:20, fontWeight:"500", textAlign:"center", color:"white", padding: 2}}>Real Estate</Text>
                        <Text style={{fontSize:20, fontWeight:"400", textAlign:"center", color:"white", padding: 2}}>Real Estate</Text>    
                    </View>
                </View>

            </View>

        </View>
    )

}