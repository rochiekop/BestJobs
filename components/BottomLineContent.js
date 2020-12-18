
import React from 'react';
import { Dimensions, Text, View, StyleSheet,ImageBackground,Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';
import { useState } from 'react';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function BottomLineContent({navigation,route}) {
    const [jobs, setJobs] = useState({});
    const [softskillsKey, setSoftskillsKey] = useState([]);
    const idJob = route.params.id_job;
    const referenceJobs = database().ref(`job/${idJob}`);
    async function getJobs(){
        await referenceJobs.once('value')
        .then(snapshot => {
            let data = snapshot.val();
            let jobItem = {...data};
            let softskillsItem = jobItem.softskills;
            setJobs(jobItem);
            // setJobsKey(Object.keys(jobItem));
            setSoftskillsKey(Object.keys(softskillsItem));
        }).then(console.log(softskillsKey));
    }
    useEffect(()=>{
        getJobs();
    },[]);
    return (
        <View style={{
            flex:1,
            alignItems:'center',  
            backgroundColor:'#F5F5F5'
        }}>
            <View style={{
                width:'100%',
                height: '10%',
                backgroundColor:'white',
                alignItems:"center",
                justifyContent:"center",
                elevation:10
                }}>
                <Text style={styles.textTitleHeader}>Bottom Line </Text>
           </View>
            
           <ImageBackground source={require('../assets/icon/success.png')}  
            style={{
                alignItems:'center',
                width: "100%",
                height: '83%',
                overflow: 'hidden' 
                }}
                imageStyle={{
                    resizeMode: "cover",
                    height: 250,
                    top:'30%'
                }}
        >
<View style={{
                        backgroundColor: 'rgba(255,255,255,0.85)',
                        width: 351,
                        height: '100%',
                        marginTop: 28,
                        borderRadius: 15,
                        alignItems:'center',
                
                      }}
                      
                      >
                      <View style={{
                          backgroundColor: '#C4C4C4',
                          borderRadius: 4,
                          height: 6,
                          width: 80,
                          marginTop: 1,
                      }} />
                    <View style={{
                        width:'100%',
                        height:'30%',    
                        flexDirection:'row-reverse',
                    }}>
                        <View style={{
                            width:'60%',
                            height:'100%',
                            
                            justifyContent:'center'
                        }}>
                            <Text style={{
                                fontSize:36, fontWeight:"bold", color:'#FFC93C'
                            }}>{(Object.keys(jobs).length === 0 && jobs.constructor === Object) ? '..' : jobs.nama.split(' ')[0]}</Text>
                            <Text style={{
                                marginTop:'-5%',fontSize:36, fontWeight:"bold", color:'black'
                            }}>{(Object.keys(jobs).length === 0 && jobs.constructor === Object) ? '..' : jobs.nama.split(' ')[1]}</Text>
                        </View>
                        <View style={{
                            width:'40%',
                            height:'100%',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <Image
                                style={{width:'50%',height:'50%',  resizeMode: 'contain'}}
                                source={require('../assets/icon/science.png')}
                            />
                        </View>
                    </View>
                    {/*  bagian text softskill*/}
                      <View style={{
                        alignItems:'center',
                        backgroundColor: '#FFC93C',
                        borderRadius: 15,
                        height: '55%',
                        width: '90%',
                        marginTop: 10,
                      }}>
                            <View style={{
                              marginTop:'20%',
                              width:'80%',
                             
                            }}>
                    <Text style={styles.textDesc}>
                    {(Object.keys(jobs).length === 0 && jobs.constructor === Object) ? (
                        'Sedang memproses'
                    ) : jobs.bottom_line}
                    </Text>
                            </View>
              
                          
              
                      </View>
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
        fontSize:18,
        color:'black',
        fontFamily:'Monsterrat',
        fontWeight:"bold",
    },
    containerContent:{
        marginTop:'10%',
        height:'90%',
        width:'90%',
        borderRadius:20,
        
       
    },

    containerContentDetails:{
        marginTop:'10%',
        width:(window.width * 0.75),
        height: (window.height * 0.4),
        borderRadius:20,
        alignItems:"center"
    },
    textInput:{
        height: 48,
        width: '80%',
        borderWidth:1,
        borderColor: '#e3e3e3', borderRadius: 5,  
    },
    swipeBtn: {
        height:20,
        width:'40',
        borderRadius:20,
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
        fontSize:14,
        
    },
    circle: {
        width: 25,
        height: 25,
        backgroundColor: "#FFC93C",
        borderRadius: (25/2),
    },
    btnNavigation: {
        height: 50,
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

export default BottomLineContent;