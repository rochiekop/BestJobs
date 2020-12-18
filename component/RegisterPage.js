import React from 'react';
import {StyleSheet, Text, TextInput, View, ScrollView, Modal, ActivityIndicator, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';
import {BlurView} from '@react-native-community/blur';

const referenceUsers = database().ref('/users');

const RegisterPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [namaLengkap, setnamaLengkap] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [errorCode, setErrorCode]= useState('');

  async function doRegister(){
    await auth()
          .createUserWithEmailAndPassword(email,password)
          .then(async function() {
              await auth().currentUser.updateProfile({
                displayName: namaLengkap
              }).then(()=>{
                console.log('simpan nama sukses');
              }).catch((e)=>console.log(e));
            })
            
            .then(()=>{
              setLoading(false);
            })
            .catch((error)=>{
              setIsError(true);
              setMessageError(error.message);
              setErrorCode(error.code);
              setModalVisible(false);
              setShowBlur(false);           
            });
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
                  setModalVisible(false);
                  setShowBlur(false);
                }}
                >{loading ? 'Sedang Memproses':'Silahkan Melanjutkan'}</Text>
                {loading ? (
                  null
                ) : (
               <TouchableOpacity
                  style={[styles.btnMasuk,{marginTop:'10%'}]}
                  onPress={()=>{
                    setModalVisible(false)
                    setShowBlur(false);
                    navigation.replace('Home');
                  }}
                  >
                    <Text style={{fontWeight: 'bold'}}>Continue</Text>
                  </TouchableOpacity>
                )}
                <ActivityIndicator size={50} color="#FFC93C"
                style={{marginTop:'10%'}}
                animating={loading}
                />

                
              </View>
        </View>
          </Modal>
      <ScrollView>
        <View style={styles.roundsUp}>
          <Text />
        </View>
        <View style={[styles.wrapText,{
          fontFamily:'Montserrat-Regular.ttf'
        }]}>
          <Text style={styles.titleReg}
          onPress={()=>{
            setModalVisible(true);
            setShowBlur(true);
          }}
          >Registrasi</Text>
          <Text style={styles.titleDk}>dulu kuy !</Text>
          <View style={styles.wrapDesc}>
            <Text style={styles.desc}>
              Cukup <Text style={styles.descColorYellow}>isikan</Text> data pada
              kolom ini dan kamu akan siap untuk
              <Text style={styles.descColorYellow}>menggunakan</Text> aplikasi
              ini !
            </Text>
          </View>
        </View>
        <View style={styles.inputWrap}>
          {isError ? (
            <Text style={{color:'red'}}>Oops, {messageError.split(']')[1]}</Text>
          ) : null}
          <TextInput placeholder="Email" style={styles.input}
          onChangeText={(text) => setEmail(text)}
          />
          <TextInput placeholder="Nama Lengkap" style={styles.input} 
           onChangeText={(text) => setnamaLengkap(text)}
          />
          <TextInput placeholder="Kata Sandi" style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          />
          <TextInput placeholder="Kata Sandi Ulang" style={styles.input} 
          secureTextEntry={true}
          onChangeText={(text) => setPassword2(text)}
          />
        </View>
        <View style={styles.btnWrap}>
          <TouchableOpacity style={styles.btnMasuk}
          onPress={() => {
            setModalVisible(true);
            setShowBlur(true);
            //apakah kosong
            if(email.length > 0 && namaLengkap.length > 0 && password.length > 0 && password2.length > 0){
              //apa password 6 karakter
              if(password.length >= 6){
                //apa password sama
                if(password === password2){
                  //registrasi
                  console.log('bisa registrasi');
                  doRegister();
                }else{
                  setIsError(true);
                  setMessageError(']Password is not match !');
                  console.log('Password tidak match');
                  setModalVisible(false);
                  setShowBlur(false);
                }
              }else{
                setIsError(true);
                  setMessageError(']Password length minimal is 6 !');
                console.log('Panjang Password Min 6 Karakter');
                setModalVisible(false);
                  setShowBlur(false);
              }
            }else{
              setIsError(true);
              setMessageError(']Fill out the data !');
              console.log('Isi data dengan lengkap');
              setModalVisible(false);
              setShowBlur(false);
            }
          }}
          >
            
            <Text style={{fontWeight: 'bold'}}>Daftar</Text>
          </TouchableOpacity>
          <Text style={styles.regis}>
            Sudah Punya akun ? silakan{' '}
            <Text style={styles.descColorYellow}
            onPress={() => {
              navigation.replace('Auth', {screen:'LoginPage'});
            }}
            >Login</Text> disini !
          </Text>
        </View>
        <View style={styles.roundsDown}>
          <Text />
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
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  roundsUp: {
    width: 270 / 2,
    height: 240 / 2,
    alignSelf: 'flex-end',
    backgroundColor: '#FFC93C',
    borderBottomLeftRadius: 360 / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  wrapText: {
    // backgroundColor: 'pink',
    paddingHorizontal: 50,
    position: 'absolute',
    marginTop: 50,
  },
  titleReg: {
    fontSize: 32,
    fontFamily: 'Mont-Bold',
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  titleDk: {
    fontSize: 32,
    fontFamily: 'Mont-Bold',
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginTop: -5,
    marginBottom: 5,
  },
  descColorYellow: {
    color: '#FFC93C',
    fontWeight: 'bold',
  },
  wrapDesc: {
    width: 300,
  },
  desc: {
    marginBottom: 0,
    fontSize: 14,
  },
  input: {
    marginTop: 15,
    borderColor: '#676767',
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    paddingLeft: 10,
  },
  inputWrap: {
    paddingTop: 55,
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
    elevation: 5,
  },
  btnWrap: {
    alignItems: 'center',
  },
  regis: {
    fontSize: 12,
  },
  roundsDown: {
    width: 150 / 2,
    height: 143 / 2,
    backgroundColor: '#FFC93C',
    borderTopRightRadius: 500 / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
