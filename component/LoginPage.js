import React from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import {BlurView} from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';


const LoginPage = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [errorCode, setErrorCode]= useState('');
  
  async function doLogin() {
    await auth()
    .signInWithEmailAndPassword(email,password)
    .then(() => {
      console.log('success login'); 
    }).then(()=>{
      navigation.replace('Home');
    })
    .catch((error) => {
      setIsError(true);
      setMessageError(error.message);
      setErrorCode(error.code);
      setModalVisible(false);
      setShowBlur(false);
      console.log(error);
    })

  }
  return (
    <View>
      <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
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
                onPress={()=>{

                }}
                >Sedang Memproses...</Text>
                <ActivityIndicator size={50} color="#FFC93C"
                style={{marginTop:'10%'}}
                />
                
              </View>
        </View>
          </Modal>
      <View style={styles.roundsUp}>
        <Text />
      </View>
      <View style={styles.wrapText}>
        <Text style={styles.titleBest}
        >Best</Text>
        <Text style={styles.titleJobs}>Jobs</Text>
        <View style={styles.wrapDesc}>
          <Text style={styles.desc}>
            Temukan <Text style={styles.descColorYellow}>Pekerjaan</Text> yang
            sesuai dengan <Text style={styles.descColorYellow}>skillset</Text>{' '}
            mu disini !
          </Text>
        </View>
        
      </View>
      <View style={styles.inputWrap}>
      {isError ? (<Text  style={{color:'red', textAlign:'center', marginBottom:10}}>{messageError.split(']')[1]}</Text>) : null } 
        <TextInput placeholder="Email" style={styles.input} 
        onChangeText={(text) => setEmail(text) }
        />
        <TextInput placeholder="Password" style={styles.input} 
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text) }
        />
      </View>
      <View style={styles.btnWrap}>
      <TouchableOpacity style={styles.btnMasuk}
        onPress={()=> {
          setModalVisible(true);
          setShowBlur(true);
          doLogin();
          
        }}
        >
          <Text style={{fontWeight: 'bold'}}>Masuk</Text>
        </TouchableOpacity>
        <Text style={styles.regis}>
          Belum Punya akun ? silakan{' '}
          <Text style={styles.descColorYellow}
          onPress={()=>navigation.navigate('RegisterPage')}
          >Daftar</Text> disini !
        </Text>
      </View>
      
      <View style={styles.roundsDown}>
        <Text />
      </View>
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
    
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  roundsUp: {
    width: 240 / 2,
    height: 270 / 2,
    backgroundColor: '#FFC93C',
    borderBottomRightRadius: 360 / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 1,
  },
  wrapText: {
    alignItems: 'center',
  },
  titleBest: {
    fontSize: 38,
    fontFamily: 'Mont Bold',
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  titleJobs: {
    fontSize: 38,
    fontFamily: 'Mont Bold',
    fontWeight: 'bold',
    color: '#FFC93C',
    marginTop: -10,
    marginBottom: 10,
  },
  desc: {
    paddingLeft: 20,
  },
  descColorYellow: {
    color: '#FFC93C',
    fontWeight: 'bold',
  },
  wrapDesc: {
    marginBottom: 15,
    justifyContent: 'center',
    marginHorizontal: 60,
  },
  input: {
    marginTop: 15,
    borderColor: '#676767',
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 10,
  },
  inputWrap: {
    paddingHorizontal: 50,
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
   
  },
  btnWrap: {
    alignItems: 'center',
  },
  regis: {
    fontSize: 12,
  },
  roundsDown: {
    width: 200 / 2,
    height: 160 / 2,
    backgroundColor: '#FFC93C',
    borderTopLeftRadius: 500 / 2,
    alignSelf: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
