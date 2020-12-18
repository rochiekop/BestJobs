import React, { useState } from 'react';
import { Dimensions, Text, View, StyleSheet , Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';


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
                {/* <Text style={{
                    fontSize:12
                }}>Tapi Sebelumnya, Isi dulu Data Berikut</Text> */}
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
                navigation.pop()
               }}
                >
                    <Text style={styles.textButton}>Kembali</Text>
            </TouchableOpacity>    
            </View>
            <View style={[styles.btnNavigation,{
                marginTop:'8%'
            }]}>
                <View style={styles.iconNavPosition}>
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('Home', { screen: 'Home' });
                }}
                >
                <Icon name="home-outline" color={'rgba(0,0,0,0.5)'} size={25} />
                </TouchableOpacity>
                </View>
                <View style={styles.iconNavPosition}>
                <Icon name="briefcase" color={'black'} size={25} />
                </View>
                <View style={styles.iconNavPosition}>
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('Home', { screen: 'Profile' });
                }}
                >
                <IconFA name="user-o" color={'rgba(0,0,0,0.5)'} size={25} />
                </TouchableOpacity>
                </View>
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
        fontSize:19,
        color:'black',
        fontFamily:'Roboto',
        fontWeight:"bold",
    },
    containerContent:{
        marginTop:'10%',
        backgroundColor:'white',
        elevation:1,
        width:'90%',
        height:'60%',
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
    },
    btnNavigation: {
      height: 49,
      backgroundColor: '#FDFDFD',
      flexDirection: 'row',
    },
    iconBtnNavigation: {
      width: 27,
      height: 26,
    },
    iconNavPosition: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
})
export default FindJobsBySkillsResultFalse;