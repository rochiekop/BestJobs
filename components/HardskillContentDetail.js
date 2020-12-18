import React, { useState } from 'react';
import {Image, ImageBackground, Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
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
              <ScrollView 
                horizontal={true}
                indicatorStyle="black">

              
              {hardskillsKey.length > 0 ? (
                hardskillsKey.map((key, index) =>{
                    if(index == 0){
                      return <View style={[styles.BackgroundDalam,{
                        marginLeft:20,
                      }]}
                      key={key}
                      >
                      <View style={styles.tombolTarik} />
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../assets/icon/science.png')}
                          style={{marginTop: 35, marginLeft: 33, marginRight: 20}}
                        />
                        <View style={{marginTop: 34}}>
                          {(key.includes('_') ? (
                            <View>
                            <Text
                            style={{
                              fontFamily: 'Mont Bold',
                              fontWeight: 'bold',
                              fontSize: 26,
                              color: '#23120b',
                            }}>{(key.split('_')[0]).charAt(0).toUpperCase() +(key.split('_')[0].slice(1))}</Text>
                           <Text
                            style={{
                              fontFamily: 'Mont Bold',
                              fontWeight: 'bold',
                              fontSize: 26,
                              color: '#23120b',
                            }}>{(key.split('_')[1]).charAt(0).toUpperCase() +(key.split('_')[1].slice(1))}</Text>
                            </View>
                            
                          ): (
                            
                            <Text
                            style={{
                              fontFamily: 'Mont Bold',
                              fontWeight: 'bold',
                              fontSize: 26,
                              color: '#23120b',
                            }}>{((key).charAt(0).toUpperCase() + (key).slice(1))}</Text>
                          ))}
                          
                        </View>
                      </View>
                      <View style={[styles.backgroundVideo,{
                        alignItems:'center'
                      }]}>
                            <View style={{
                              marginTop:'5%',
                              alignItems:'center'
                              
                            }}>
                              <Text style={{
                                fontFamily: 'Mont Bold',
                                fontWeight: 'bold',
                                fontSize: 20,
                                color: '#23120b',
                              }}>Video lengkap</Text>
                            </View>
                            <View style={{
                              marginTop:'5%',
                              width:'85%',
                              height:'65%',
                              backgroundColor:'black',
                              
                            }}>
                            <WebView
                                  
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: jobs.hardskills[key] }}
                            />
                            </View>
              
                          <TouchableOpacity style={[styles.btmNotWork,{
                            marginTop:'3%'
                          }]}
                          onPress={()=>{
                            Linking.openURL( jobs.hardskills[key].replace('/embed/videoseries','/playlist'));
                          }}
                          >
                          <Text
                            style={{
                              fontFamily: 'Mont Bold',
                              fontSize: 14,
                              color: '#F5F5F5',
                              fontWeight: 'bold',
                            }}>
                            Tonton di Youtube ?
                          </Text>
                        </TouchableOpacity>
              
                      </View>
                    </View>
                    }else{
                      return <View style={[styles.BackgroundDalam,{
                        marginLeft:20,
                        marginRight:20
                      }]}
                      key={key}
                      >
                      <View style={styles.tombolTarik} />
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../assets/icon/science.png')}
                          style={{marginTop: 35, marginLeft: 33, marginRight: 20}}
                        />
                        <View style={{marginTop: 34}}>
                          {(key.includes('_') ? (
                            <View>
                            <Text
                            style={{
                              fontFamily: 'Mont Bold',
                              fontWeight: 'bold',
                              fontSize: 26,
                              color: '#23120b',
                            }}>{(key.split('_')[0]).charAt(0).toUpperCase() +(key.split('_')[0].slice(1))}</Text>
                           <Text
                            style={{
                              fontFamily: 'Mont Bold',
                              fontWeight: 'bold',
                              fontSize: 26,
                              color: '#23120b',
                            }}>{(key.split('_')[1]).charAt(0).toUpperCase() +(key.split('_')[1].slice(1))}</Text>
                            </View>
                            
                          ): (
                            
                            <Text
                            style={{
                              fontFamily: 'Mont Bold',
                              fontWeight: 'bold',
                              fontSize: 26,
                              color: '#23120b',
                            }}>{((key).charAt(0).toUpperCase() + (key).slice(1))}</Text>
                          ))}
                          
                        </View>
                      </View>
                      <View style={[styles.backgroundVideo,{
                        alignItems:'center'
                      }]}>
                            <View style={{
                              marginTop:'5%',
                              alignItems:'center'
                              
                            }}>
                              <Text style={{
                                fontFamily: 'Mont Bold',
                                fontWeight: 'bold',
                                fontSize: 20,
                                color: '#23120b',
                              }}>Video lengkap</Text>
                            </View>
                            <View style={{
                              marginTop:'5%',
                              width:'85%',
                              height:'65%',
                              backgroundColor:'black',
                              
                            }}>
                            <WebView
                                  
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: jobs.hardskills[key] }}
                            />
                            </View>
              
                          <TouchableOpacity style={[styles.btmNotWork,{
                            marginTop:'3%'
                          }]}
                          onPress={()=>{
                            Linking.openURL( jobs.hardskills[key].replace('/embed/videoseries','/playlist'));
                          }}
                          >
                          <Text
                            style={{
                              fontFamily: 'Mont Bold',
                              fontSize: 14,
                              color: '#F5F5F5',
                              fontWeight: 'bold',
                            }}>
                            Tonton di Youtube ?
                          </Text>
                        </TouchableOpacity>
              
                      </View>
                    </View>
                    }
                }   
                )
            ) : (
                <Text> .... </Text>
            )}
          </ScrollView>
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
  topContainer: {
    backgroundColor: '#FDFDFD',
    width: 411,
    height: 63,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackgroundDalam: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    width: 351,
    height: 500,
    marginTop: 28,
    
    borderRadius: 15,
  },
  tombolTarik: {
    backgroundColor: '#C4C4C4',
    borderRadius: 4,
    height: 6,
    width: 80,
    marginLeft: 130,
    marginTop: 1,
  },
  backgroundVideo: {
    backgroundColor: '#FFC93C',
    borderRadius: 15,
    height: 318,
    width: '80%',
    marginLeft: 38,
    marginTop: 10,
  },
  btmNotWork: {
    backgroundColor: '#FF3F3F',
    height: 35,
    width: 208,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',

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
});
