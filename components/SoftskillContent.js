
import React from 'react';
import { Dimensions, Text, View, StyleSheet,ImageBackground,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';
import { useState } from 'react';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function SoftskillContent({navigation,route}) {
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
                <Text style={styles.textTitleHeader}>The Soft Skills  </Text>
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
            <View style={[styles.containerContent,{
               backgroundColor:'rgba(255, 255, 255, 0.85)', borderWidth:1,borderColor:'#e5e5e5'
                }]}>

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
        

            {softskillsKey.length > 0 ? (
                softskillsKey.map((key, index) =>{
                    if(index == 0){
                        return <View style={{
                            width:'100%',
                            height:'5%',
                           
                            flexDirection:'row-reverse',
                            marginTop:'5%'
                        }}
                        key={key}
                        >
                            
                            <View style={[styles.circle,{
                                marginRight:'23%'
                            }]}></View>
                            <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('JobsResult', {
                                    screen:'SoftskillContentDetail',
                                    params:{
                                        id_job:idJob
                                    }
                                })
                            }}
                            >
                            <Text style={{
                                fontSize:20, fontWeight:"bold", color:'black', marginRight:'5%'
                            }}>{(softskillsKey[index]).charAt(0).toUpperCase() + (softskillsKey[index]).slice(1)}</Text>
                            </TouchableOpacity>
                            
                        </View>
                    }else{
                        return <View style={{
                            width:'100%',
                            height:'5%',
                            
                            flexDirection:'row-reverse',
                            marginTop:'5%'
                        }}
                        key={key}
                        >
                            
                            <View style={[styles.circle,{
                                marginRight:'23%'
                            }]}></View>
                            <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('JobsResult', {
                                    screen:'SoftskillContentDetail',
                                    params:{
                                        id_job:idJob
                                    }
                                })
                            }}
                            >
                            <Text style={{
                                fontSize:20, fontWeight:"bold", color:'black', marginRight:'5%'
                            }}>{
                                (softskillsKey[index]).charAt(0).toUpperCase() + (softskillsKey[index]).slice(1)
                            }</Text>
                            </TouchableOpacity>
                            
                        </View>
                    }
                }   
                )
            ) : (
                <Text> .... </Text>
            )}
           
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
        width:'90%',
        height: '100%',
        borderRadius:20,
        alignItems:"center"
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
        fontSize:12,
        
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

export default SoftskillContent;