
import React from 'react';
import { Dimensions, Text, View, StyleSheet,ImageBackground,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import { useEffect, useState } from 'react/cjs/react.development';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


function FindJobsByNameResultTrue({navigation,route}) {
    const [jobs, setJobs] = useState({});
    const [jobsKey, setJobsKey] = useState([]);
    const namaJob = route.params.nama_job;
    const referenceJobs = database().ref('job');
    async function getJobs(){
        await referenceJobs.orderByChild('nama').equalTo(namaJob).once('value')
        .then(snapshot => {
            console.log(snapshot.val().keys);
            let data = snapshot.val();
            let jobItem = {...data};
            setJobs(jobItem);
            setJobsKey(Object.keys(jobItem));
            console.log(jobsKey.length);
        }).then(console.log(jobs));
    }
    useEffect(()=>{
        getJobs();
        
    },[]);
    
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
           </View>
            
           <ImageBackground source={require('../assets/icon/success.png')}  
            style={{
            alignItems:'center',
            width: "100%",
            height: '71%',
            overflow: 'hidden' 
            }}
            imageStyle={{
                resizeMode: "cover",
                height: 250,
                top:'50%' 
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
            
            {jobsKey.length > 0 ? (
                jobsKey.map((key) => (
                <Text style={{
                        marginTop:'2%',fontSize:36, fontWeight:"bold", color:'#FFC93C'
                    }
                    }key={key}> 
                {(jobs[key].nama).split(' ')[0]}
                </Text>
                ))
            ) : 
            (
                <Text style={{
                    marginTop:'-3%',fontSize:36, fontWeight:"bold", color:'black'
                }} ></Text>
            )
            }
            
            
            {jobsKey.length > 0 ? (
                jobsKey.map((key) => (
                    <Text style={{
                        marginTop:'-3%',fontSize:36, fontWeight:"bold", color:'black'
                    }} key={key} >
                {(jobs[key].nama).split(' ')[1]}
                </Text>
                ))
            ) : (
            <Text style={{
                marginTop:'-3%',fontSize:36, fontWeight:"bold", color:'black'
            }} ></Text>
            )
            }

            <View style={{width:'80%', marginTop:'5%'}}>
            {jobsKey.length > 0 ? (
                jobsKey.map((key) => (
                <Text style={styles.textDesc} key={key}>
                {jobs[key].deskripsi_singkat}
                </Text>
                ))
            ) : (
                <Text style={styles.textDesc}>
                {}
                </Text>
            )}
                
            </View>

            <TouchableOpacity style={[styles.touchButton,{marginTop:'10%'}]}
               onPress={()=>{
                navigation.pop();
               }}
                >
                    <Text style={styles.textButton}>Kembali</Text>
                </TouchableOpacity> 
            <TouchableOpacity style={[styles.touchButton,{marginTop:'5%'}]}
               onPress={()=>{
                   navigation.navigate('JobsResult', {
                       screen: 'DetailJobs',
                       params:{
                           id_job:jobsKey[0]
                       }
                    });
               }}
                >
                    <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>  
           </View>
            </ImageBackground>
                      
            <View style={[styles.btnNavigation]}>
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
        marginTop:'5%',
        width:(window.width * 0.9),
        height: '95%',
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

export default FindJobsByNameResultTrue;