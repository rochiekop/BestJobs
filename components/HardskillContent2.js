import React, { useState } from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';

export default function HardSkillContent({navigation,route}) {
    const [jobs, setJobs] = useState({});
    const [hardskillsKey, setHardskillsKey] = useState([]);
    const idJob = route.params.id_job;
    const referenceJobs = database().ref(`job/${idJob}`);
    async function getJobs(){
        await referenceJobs.once('value')
        .then(snapshot => {
            let data = snapshot.val();
            let jobItem = {...data};
            let hardskillsItem = jobItem.hardskills;
            setJobs(jobItem);
            // setJobsKey(Object.keys(jobItem));
            setHardskillsKey(Object.keys(hardskillsItem));
        }).then(console.log(hardskillsKey));
    }
    useEffect(()=>{
        getJobs();
    },[]);
    
  return (
    <View style={{flex:1,backgroundColor: '#F5F5F5'}}>
    <View
        style={{
          backgroundColor: '#FDFDFD',
          width: '100%',
          height: 63,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          elevation:10
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          Hard Skill
        </Text>
      </View>
        <ImageBackground source={require('../assets/icon/success.png')}  
            style={{
                alignItems:'center',
                width: "100%",
                height: '82%',
                overflow: 'hidden' 
                }}
                imageStyle={{
                    resizeMode: "cover",
                    height: 250,
                    top:'30%'
                }}
        >
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.85)',
          width: '90%',
          height: '95%',
          marginTop: '5%',

          borderRadius: 15,
        }}>
        <View />
        <View
          style={{
            backgroundColor: '#C4C4C4',
            borderRadius: 4,
            height: 6,
            width: 80,
            marginLeft: 130,
            marginTop: 1,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/icon/science.png')}
            style={{marginTop: 35, marginLeft: 33, marginRight: 20}}
          />
          <View style={{marginTop: 34}}>
            <Text style={{fontWeight: 'bold', fontSize: 30, color: '#FFC93C'}}>
            {(Object.keys(jobs).length === 0 && jobs.constructor === Object) ? '..' : jobs.nama.split(' ')[0]}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 30, color: '#23120b'}}>
            {(Object.keys(jobs).length === 0 && jobs.constructor === Object) ? '..' : jobs.nama.split(' ')[1]}
            </Text>
          </View>
        </View>
          <View style={{marginTop:'10%'}}>
          {hardskillsKey.length > 0 ? (
                hardskillsKey.map((key, index) =>{
                    if(index % 2 == 0){
                        return <View
                        key={key}
                        style={{
                         
                          height: 100,
                          width: 100,
                          marginTop: -20,
                          marginLeft: 60,
                        }}>
                        <TouchableOpacity style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            backgroundColor: '#FFC93C',
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation:2
                        }}
                        onPress={()=>{
                            navigation.navigate('JobsResult',{
                              screen:'HardskillContentDetail',
                              params :{
                                id_job: idJob
                              }
                            });
                        }}
                        >
                        <Text style={{fontSize: 14, fontWeight: 'bold' , textAlign:'center'}}>{
                            (hardskillsKey[index].includes('_')) ? (hardskillsKey[index].replace('_',' ').toUpperCase()) : hardskillsKey[index].toUpperCase()
                        }
                        </Text>
                        </TouchableOpacity>
                      </View>
                    }else{
                        return <View
                        key={key}
                        style={{
                          height: 100,
                          width: 100,
                          marginTop: -40,
                          marginLeft: 180,
                        }}>
                        <TouchableOpacity style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            backgroundColor: '#FFC93C',
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation:2
                        }}
                        onPress={()=>{
                            navigation.navigate('JobsResult',{screen:'HardskillContentDetail'});
                        }}
                        >
                        <Text style={{fontSize: 14, fontWeight: 'bold' , textAlign:'center'}}>{
                            (hardskillsKey[index].includes('_')) ? (hardskillsKey[index].replace('_',' ').toUpperCase()) : hardskillsKey[index].toUpperCase()
                        }
                        </Text>
                        </TouchableOpacity>
                      </View>
                    }
                }   
                )
            ) : (
                <Text> .... </Text>
            )}
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
});
