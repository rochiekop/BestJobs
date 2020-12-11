import React, { useState } from 'react';
import { Dimensions, Text, View, StyleSheet , Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';



const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
function FindJobsBySkillsResultFalse({navigation,route}) {
   
    return (
        <View style={styles.container}>
            <View style={{
                width:window.width,
                height: (window.width * 0.3),
                backgroundColor:'white',
                alignItems:"center",
                justifyContent:"center",
                elevation:10
            }}>
                <Text style={styles.textTitleHeader}>Mari Kita Carikan <Text style={{color:'#FFC93C'}}>Pekerjaan</Text> </Text>
                <Text style={styles.textTitleHeader}>Yang Sesuai dengan <Text style={{color:'#FFC93C'}}>Skill</Text> Mu</Text>
                <Text style={{
                    fontSize:12
                }}>Tapi Sebelumnya, Isi dulu Data Berikut</Text>
            </View>

            <View style={styles.containerContent}>
            <Image
                style={{width:'50%',  resizeMode: 'contain', marginTop:'-5%'}}
                source={require('../assets/icon/not_found.png')}
            />
            <Text style={{ fontSize:16, fontWeight:'bold'}}>Aduh ! Sepertinya ada kesalahan teknis, </Text>
            <Text style={{ fontSize:16, fontWeight:'bold'}}>silahkan coba kembali beberapa saat.</Text>
            
                
            <TouchableOpacity style={[styles.touchButton,{marginTop:'10%'}]}
               onPress={()=>{
                navigation.replace('FindJobsByName');
               }}
                >
                    <Text style={styles.textButton}>Kembali</Text>
                </TouchableOpacity>    
            </View>
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
        backgroundColor:'white',
        elevation:10,
        width:(window.width * 0.9),
        height: (window.height * 0.65),
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
        height:48,
        width:(window.width * 0.4),
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#FFC93C',
        borderRadius:(48/2)
    },
    textButton:{
        fontSize:14,
        fontWeight: 'bold', 
    }
})
export default FindJobsBySkillsResultFalse;