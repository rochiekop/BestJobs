import React, { useState } from 'react';
import { Dimensions, Text, View, StyleSheet, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';



const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
function FindJobsByName({navigation}) {
    const [searchJob, setSearchJob] = useState('');
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
                <Text style={styles.textTitleHeader}>Penasaran apa saja yang  </Text>
                <Text style={styles.textTitleHeader}>Dibutuhkan untuk  <Text style={{color:'#FFC93C'}}>Pekerjaan</Text> Ini ?</Text>
                <Text style={{
                    fontSize:12
                }}>Tapi Sebelumnya, Isi dulu Data Berikut</Text>
            </View>

            <View style={styles.containerContent}>
                
                    <TextInput style={[styles.textInput,{
                        marginTop:'40%',padding:10
                    }]}
                        placeholder="Nama Pekerjaan .."
                        placeholderTextColor="#676767"
                        onChangeText={text => setSearchJob(text)}
                    />
                
                <TouchableOpacity style={[styles.touchButton,{marginTop:'10%'}]}
               onPress={()=> {
                Alert.alert('Warning', 'Apakah Sudah Yakin ?',[
                    { 
                        text: "OK", onPress: () => {
                            if(searchJob != "Android Developer"){
                                navigation.replace('FindJobsByNameResultFalse');
                                // navigation.replace('FindJobsBySkillsResultFalse');
                               }else{
                                navigation.replace('FindJobsByNameResultTrue');
                                // navigation.replace('FindJobsBySkillsResultTrueDetail');
                               }
                        }
                    }
                ]);
               }}
                >
                    <Text style={styles.textButton}>Search</Text>
                </TouchableOpacity>  
            </View>
        </View>
    );
}
function handleSearch (){
   
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
        borderColor: '#676767', borderRadius: 5,
         
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
export default FindJobsByName;