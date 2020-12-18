import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {BlurView} from '@react-native-community/blur';

const FindJobs = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [skills1, setSkills1] = useState('');
  const [skills2, setSkills2] = useState('');
  const [showBlur, setShowBlur] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrap}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>
            Mari Kita Carikan{' '}
            <Text style={styles.descColorYellow}>Pekerjaan</Text>
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>
            yang sesuai dengan <Text style={styles.descColorYellow}>Skill</Text>{' '}
            mu !
          </Text>
        </View>
      </View>
      <View style={[styles.main]}
      >
        
        <View style={styles.content}>
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
                  let skill1 = skills1.toLowerCase();
                  let skill2 = skills2.toLowerCase();
                  if(skill1 == 'java' && skill2 == 'sql' || skill1=='sql' && skill2=='java'){
                    //android developer
                    setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsByName', {
                      screen: 'FindJobsByNameResultTrue',
                      params:{
                        nama_job: 'Android Developer'
                      }
                    });
                  }else if(skill1 == 'nodejs' && skill2 == 'mongodb' || skill1=='mongodb' && skill2=='nodejs'){
                    //backend developer
                    setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsByName', {
                      screen: 'FindJobsByNameResultTrue',
                      params:{
                        nama_job: 'Back-end Developer'
                      }
                    });
                  }else if(skill1 == 'css' && skill2 == 'css framework' || skill1=='css framework' && skill2=='html'){
                    //frontend developer
                    setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsByName', {
                      screen: 'FindJobsByNameResultTrue',
                      params:{
                        nama_job: 'Front-end Developer'
                      }
                    });
                  }else if(skill1 == 'python' && skill2 == 'data science' || skill1=='data science' && skill2=='python'){
                    //data scientist
                    setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsByName', {
                      screen: 'FindJobsByNameResultTrue',
                      params:{
                        nama_job: 'Data Scientist'
                      }
                    });
                  }else if(skill1 == 'nodejs' && skill2 == 'api' || skill1=='api' && skill2=='nodejs'){
                    //product designer
                    setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsByName', {
                      screen: 'FindJobsByNameResultTrue',
                      params:{
                        nama_job: 'FullStack Developer'
                      }
                    });
                  }else{
                    setModalVisible(false);
                    setShowBlur(false);
                    navigation.navigate('JobsBySkill', {screen: 'FindJobsBySkillsResultFalse'})
                  }
                
                  // if(skills == 'Java'){
                  //   setModalVisible(false);
                  //   setShowBlur(false);
                  //   navigation.navigate( 'JobsBySkill', {screen:'FindJobsBySkillsResultTrue'});
                  // }else{
                  //   setModalVisible(false);
                  //   setShowBlur(false);
                  //   navigation.navigate('JobsBySkill', {screen: 'FindJobsBySkillsResultFalse'})
                  // }
                }}
                >
                  <Text style={{fontWeight: 'bold'}}>Sudah</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.btnCancel}
                onPress={()=>{
                  setModalVisible(false)
                  setShowBlur(false);
                }}
                >
                  <Text style={{fontWeight: 'bold'}}>Belum</Text>
                </TouchableOpacity>
              </View>
        </View>
          </Modal>
          <ScrollView>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginVertical: 10,
                alignItems: 'center',
              }}>
              <Text style={styles.descColorYellow}>Isi Form Berikut</Text>
            </Text>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder="Pendidikan Terakhir"
                style={styles.input}
              />
              <TextInput
                placeholder="Skills yang dikuasai"
                style={styles.input}
                onChangeText={text => setSkills1(text)}
              />
              <TextInput
                placeholder="Skills yang dikuasai"
                style={styles.input}
                onChangeText={text => setSkills2(text)}
              />
              <TextInput placeholder="Bakat" style={styles.input} />
            </View>
            <View style={styles.btnWrap}>
              <TouchableOpacity style={styles.btnMasuk}
              onPress={() => {
                setModalVisible(true);
                setShowBlur(true);
              }}
              >
                <Text style={{fontWeight: 'bold'}}>Cari</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {showBlur ? (
            <BlurView
            style={{
              position: "absolute",
              top: -10,
              left: -10,
              bottom: 0,
              right: -10,
            }}
            
            blurType="light"
            blurAmount={1} //max 25
            blurRadius={5} //seberapa blur
            downsampleFactor={25}
            />
          ) : (
            null
          )}
        </View>
      </View>
      <View style={styles.btnNavigation}>
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
};

export default FindJobs;

const styles = StyleSheet.create({
  // Pattern
  container: {
    backgroundColor: '#FDFDFD',
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: '#FDFDFD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  headerWrap: {
    alignItems: 'center',
    paddingVertical: 25,
  },
  main: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
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
  //
  descColorYellow: {
    color: '#FFC93C',
    fontWeight: 'bold',
  },
  content: {
    marginTop: 35,
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    alignItems: 'center',
    elevation: 3,
    paddingTop: 10,
  },
  input: {
    marginTop: 15,
    borderColor: '#676767',
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    width: 230,
    paddingHorizontal: 10,
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
  btnWrap: {
    alignItems: 'center',
  },
});
