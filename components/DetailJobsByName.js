import React from 'react';
import { Dimensions, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
function DetailJobsByName({navigation,route}) {
    return (
        <View style={styles.container}>
            <View style={{
                width:window.width,
                height: (window.width * 0.2),
                backgroundColor:'white',
                alignItems:"center",
                justifyContent:"center",
                elevation:10
            }}>
                <Text style={styles.textTitleHeader}>Lalu apa saja yang kamu butuhkan ?</Text>
            </View>
           
            <ImageBackground source={require('../assets/icon/success.png')}  
            style={{
            alignItems:'center',
            width: "100%",
            height: '100%',
            overflow: 'hidden' 
            }}
            imageStyle={{
                resizeMode: "cover",
                height: 250,
                top:'40%' 
            }}
            >
                <View style={[styles.containerContent,{
               backgroundColor:'rgba(255, 255, 255, 0.85)', borderWidth:1,borderColor:'#e5e5e5'
           }]}>
               <View style={{
                   marginTop:'5%',
                   marginLeft:'10%',
                   alignSelf:'flex-start',
                  
               }}>
                <Text style={[styles.textTitle,{
                    color:'#FFC93C'
                }]}>Android</Text>
               <Text style={[styles.textTitle,{
                    color:'black'
                }]}>Developer</Text>
               </View>

               <View style={{
                   alignSelf:'flex-start',
                   flexDirection:'row',
                   marginTop:'10%',
                   marginLeft:'10%',
                  
               }}>
                  <TouchableOpacity style={[styles.touchButton]}
                   >
                   <Text style={styles.textButton}>Why ?</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.touchButton,{
                        marginLeft:'10%',
                        marginTop:'10%'
                    }]}
                   >
                   <Text style={styles.textButton}>HardSkill</Text>
                    </TouchableOpacity> 

               </View>
               
               <View style={{
                   alignSelf:'flex-start',
                   flexDirection:'row',
                   
                   marginLeft:'10%'
               }}>
                  <TouchableOpacity style={[styles.touchButton]}
                   >
                   <Text style={styles.textButton}>SoftSkill</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.touchButton,{
                        marginLeft:'10%',
                        marginTop:'10%'
                    }]}
                   >
                   <Text style={styles.textButton}>Tips</Text>
                    </TouchableOpacity> 

               </View>
           </View>


            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:window.width,
        height:window.height,
        alignItems:'center',  
        backgroundColor:'#F5F5F5'
    },
    textTitleHeader:{
        fontSize:18,
        color:'black',
        fontFamily:'Roboto',
        fontWeight:"bold",
    },
    containerContent:{
        marginTop:'10%',
        
        width:(window.width * 0.9),
        height: (window.height * 0.75),
        borderRadius:20,
        alignItems:"center"
    },
    textInput:{
        height: 48,
        width: '80%',
        borderWidth:1,
        borderColor: '#e3e3e3', borderRadius: 5,  
    },
    touchButton:{
        height:(window.width * 0.35),
        width:(window.width * 0.35),
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#FFC93C',
        borderRadius:(48/2)
    },
    textButton:{
        fontSize:24,
        fontWeight: 'bold',
        textShadowColor: 'rgba(255, 255, 255, 0.2)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
        color:'white'
    },
    textDesc:{
        textAlign:'justify',
        fontSize:12,
    },
    textTitle :{
        fontSize:36,
        fontWeight:'bold',
    }
})
export default DetailJobsByName;