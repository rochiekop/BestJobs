import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
const Profile = ({navigation}) => {
  const [user, setUser] = useState(auth().currentUser);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrap}>
          <View style={styles.profile}>
            <Image
              source={require('../assets/img/boy.png')}
              style={styles.imgProfile}
            />
          </View>
          <Text style={styles.name}>{user != null ? user.displayName : ''}</Text>
          <Text style={styles.age}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.menuProfile}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Ubah Nama
            </Text>
          </View>
        </View>
        <View style={styles.menuProfile}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Ganti Password
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.menuProfile}
        onPress={()=>{
          auth()
          .signOut()
          .then(() => {
            console.log('User signed out!')
            navigation.replace('Auth', {screen : 'LoginPage'});
          });
        }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFDFD',
    flex: 1,
  },
  header: {
    height: 150,
    backgroundColor: '#FFC93C',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  headerWrap: {
    alignItems: 'center',
  },

  main: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    backgroundColor: '#A0C1B8',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgProfile: {
    height: 70,
    width: 55,
    position: 'absolute',
  },
  menuProfile: {
    backgroundColor: '#FFC93C',
    height: 50,
    width: 250,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginVertical: 10,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  age: {
    color: 'black',
    fontSize: 13,
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
});
