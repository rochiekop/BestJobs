import React, { useState } from 'react';
import { Dimensions, Text, View, StyleSheet, Alert, Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {BlurView} from '@react-native-community/blur';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';

const referenceJobs = database().ref('job');
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
function FindJobsByName({navigation}) {
    const [searchJob, setSearchJob] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [showBlur, setShowBlur] = useState(false);
    const [jobsKey, setJobsKey] = useState([]);
    async function getJobs(search){
      await referenceJobs.orderByChild('nama').equalTo(search).once('value')
      .then(snapshot => {
        let data = snapshot.val();
        let jobItem = {...data};
        setJobsKey(Object.keys(jobItem));
        console.log(jobsKey.length);
      });
    }
    return (
        <View style={styles.container}>
 
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={{
              flex:1,
              justifyContent: "center",
              alignItems: "center",
            }}>
              <View style={{
                width:'90%',
                height:'50%',
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.1)",
                
               
              }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}
                >Apakah Kamu Sudah Yakin ?</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}
                >Dengan apa yang kamu isi</Text>
                <TouchableOpacity
                style={styles.btnMasuk}
                onPress={()=>{
                // let jobs=['android developer','data scientist','back-end developer','front-end developer','product designer'];
                if(searchJob == 'Android Developer'){
                  setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsByName', {
                      screen: 'FindJobsByNameResultTrue',
                      params:{
                        nama_job: searchJob
                      }
                    })
                  
                }else if(searchJob == 'Front-end Developer'){
                    setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsByName', {
                      screen: 'FindJobsByNameResultTrue',
                      params:{
                        nama_job: searchJob
                      }
                    })
                }else if(searchJob == 'Back-end Developer'){
                  setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsByName', {
                      screen: 'FindJobsByNameResultTrue',
                      params:{
                        nama_job: searchJob
                      }
                    })
                }else if(searchJob == 'Data Scientist'){
                  setModalVisible(false);
                  setShowBlur(false);
                  navigation.navigate('JobsByName', {
                    screen: 'FindJobsByNameResultTrue',
                    params:{
                      nama_job: searchJob
                    }
                  })
                }else if(searchJob == 'Fullstack Developer'){
                  setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsByName', {
                      screen: 'FindJobsByNameResultTrue',
                      params:{
                        nama_job: 'FullStack Developer'
                      }
                    })
                }else{
                    setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsByName', {screen: 'FindJobsByNameResultFalse'})
                }

                }}
                >
                  <Text style={{fontWeight: 'bold'}}>Sudah</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.btnCancel}
                onPress={()=>{
                  setModalVisible(false);
                  setShowBlur(false);
                }}
                >
                  <Text style={{fontWeight: 'bold'}}>Belum</Text>
                </TouchableOpacity>
              </View>
        </View>
          </Modal>
          

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
               setModalVisible(true);
               setShowBlur(true);
               }}
                >
                    <Text style={styles.textButton}>Search</Text>
                </TouchableOpacity>  
            {showBlur ? (
            <BlurView
            style={{
              position: "absolute",
              top: -10,
              left: -10,
              bottom: -10,
              right: -10,
            }}
            
            blurType="light"
            blurAmount={1} //max 25
            blurRadius={5} //seberapa blur
            downsampleFactor={25}
            />
          ) : (
            <Text></Text>
          )}
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
        elevation:10,
        width:(window.width * 0.9),
        height:'60%',
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
    btnMasuk: {
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC93C',
        height: 35,
        width: 100,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      btnCancel: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3F3F',
        height: 35,
        width: 100,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
})
export default FindJobsByName;