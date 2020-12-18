import React from 'react';
import { Dimensions, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import { useEffect, useState } from 'react';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
function DetailJobsByName({navigation,route}) {
    const [jobs, setJobs] = useState({});
    const idJob = route.params.id_job;
    const referenceJobs = database().ref(`job/${idJob}`);
    async function getJobs(){
        await referenceJobs.once('value')
        .then(snapshot => {
            console.log(Object.keys(snapshot.val()));
            let data = snapshot.val();
            let jobItem = {...data};
            setJobs(jobItem);
        }).then(console.log(jobs));
    }
    useEffect(()=>{
        getJobs();
    },[]);
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
                height: '77%',
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
               <View style={{
                   marginTop:'5%',
                   marginLeft:'10%',
                   alignSelf:'flex-start',
                  
               }}>
                <Text style={[styles.textTitle,{
                    color:'#FFC93C'
                }]}>{(Object.keys(jobs).length === 0 && jobs.constructor === Object) ? '' : jobs.nama.split(' ')[0]}</Text>
               <Text style={[styles.textTitle,{
                    color:'black'
                }]}>{(Object.keys(jobs).length === 0 && jobs.constructor === Object) ? '' : jobs.nama.split(' ')[1]}</Text>
               </View>

               <View style={{
                   alignSelf:'flex-start',
                   flexDirection:'row',
                   marginTop:'5%',
                   marginLeft:'10%',
                  
               }}>
                  <TouchableOpacity style={[styles.touchButton]}
                  onPress={()=>{
                    navigation.navigate('JobsResult', {
                        screen: 'WhyContent',
                        params:{
                            id_job:idJob
                        }
                    })
                  }}
                   >
                   <Text style={styles.textButton}>Why ?</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.touchButton,{
                        marginLeft:'10%',
                        marginTop:'10%'
                    }]}
                    onPress={()=>{
                        navigation.navigate('JobsResult', {
                            screen: 'HardskillContent',
                            params:{
                                id_job:idJob
                            }
                        })
                    }}
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
                  onPress={()=>{
                    navigation.navigate('JobsResult', {
                        screen: 'SoftskillContent',
                        params:{
                            id_job:idJob
                        }
                    })
                }}
                   >
                   <Text style={styles.textButton}>SoftSkill</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.touchButton,{
                        marginLeft:'10%',
                        marginTop:'10%'
                    }]}
                    onPress={()=>{
                        navigation.navigate('JobsResult', {
                            screen: 'BottomLineContent',
                            params:{
                                id_job:idJob
                            }
                        })
                    }}
                   >
                   <Text style={styles.textButton}>Bottom</Text>
                   <Text style={styles.textButton}>Line</Text>
                    </TouchableOpacity> 

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
        fontFamily:'Roboto',
        fontWeight:"bold",
    },
    containerContent:{
        marginTop:'10%',
        
        width:(window.width * 0.9),
        height: '90%',
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
export default DetailJobsByName;