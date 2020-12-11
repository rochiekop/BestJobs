
import React from 'react';
import { Dimensions, Text, View, StyleSheet,ImageBackground,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
function FindJobsByNameResultTrue({navigation,route}) {
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
            
            <Text style={{marginTop:'5%',fontSize:14, fontWeight:'bold'}}>Selamat, Berikut Merupakan</Text>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Hasil Rekomendasi Kami</Text>
            <Image
                style={{width:'20%',height:'15%',  resizeMode: 'contain', marginTop:'5%',}}
                source={require('../assets/icon/science.png')}
            />
            <Text style={{
                marginTop:'2%',fontSize:36, fontWeight:"bold", color:'#FFC93C'
            }}>Android</Text>
            <Text style={{
                marginTop:'-3%',fontSize:36, fontWeight:"bold", color:'black'
            }}>Developer</Text>

            <View style={{width:'80%', marginTop:'5%'}}> 
                <Text style={styles.textDesc}>
                Android Developer adalah orang yang bertanggung jawab untuk mengembangkan dan membangun perangkat lunak berbasis mobile menggunakan sistem operasi Android. 
                </Text>
            </View>

            <TouchableOpacity style={[styles.touchButton,{marginTop:'10%'}]}
               onPress={()=>{
                navigation.replace('FindJobsByName');
               }}
                >
                    <Text style={styles.textButton}>Kembali</Text>
                </TouchableOpacity> 
            <TouchableOpacity style={[styles.touchButton,{marginTop:'5%'}]}
               onPress={()=>{
                   navigation.navigate('DetailJobsByName');
               }}
                >
                    <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>  

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
        height:36,
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
    textDesc:{
        textAlign:'justify',
        fontSize:12,
        
    }
})

export default FindJobsByNameResultTrue;