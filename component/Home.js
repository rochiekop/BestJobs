import React, { useState } from 'react';
import { useEffect } from 'react';
import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import jobIcon from '../assets/icon/science.png';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const referenceJobs = database().ref('job');

const Home = ({navigation}) => {
  const [user, setUser] = useState(auth().currentUser);
  const [jobs, setJobs] = useState({});
  const [jobsKey, setJobsKey] = useState([]);
  async function getJobs(){
    await referenceJobs.once('value')
    .then(snapshot => {
      let data = snapshot.val();
      let jobItem = {...data};
      setJobs(jobItem);
      setJobsKey(Object.keys(jobItem));
      console.log(jobsKey.length);
    });
  }
  useEffect(()=>{
    getJobs();
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrap}>
          <Text style={styles.greetings}>
            Selamat Datang <Text style={styles.descColorYellow}>{user != null ? user.displayName : ''}</Text>{' '}
            !
          </Text>
          <View style={styles.profileWrap}>
            <View style={styles.profile}>
              <Image
                source={require('../assets/img/boy.png')}
                style={styles.imgProfile}
              />
            </View>
            <View style={styles.desc}>
              <Text style={styles.name}>{user != null ? user.displayName : ''}</Text>
              <Text style={styles.age}>{user.email}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.contentWrap}>
          <Text style={styles.opening}>
            Pekerjaan yang paling menjanjikan 2020 di
          </Text>
          <Text style={styles.linkedin}>Linkedin</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
          {jobsKey.length > 0 ? (
                jobsKey.map((key) => (
                <TouchableOpacity style={styles.jobWrap} 
                key={key}
                onPress={()=>{
                  navigation.navigate('JobsByName', {
                    screen: 'FindJobsByNameResultTrue',
                    params: {
                      nama_job : `${jobs[key].nama}`,
                    }
                  });
                }}
                >
                    <Image source={jobIcon} style={styles.jobIcon} />
                    <View style={styles.jobDesc}>
                      <Text style={styles.jobName}>{jobs[key].nama}</Text>
                      <Text style={styles.jobSalary}>Gaji rata-rata : $ {jobs[key].gaji}</Text>
                    </View>
                </TouchableOpacity>
                ))
            ) : (
                <Text>Pekerjaan Tidak Ditemukan</Text>
            )}
          </ScrollView>
        </View>
      </View>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFDFD',
    flex: 1,
  },
  header: {
    height: 150,
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
  },
  profileWrap: {
    backgroundColor: '#FFC93C',
    width: 300,
    borderRadius: 15,
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  greetings: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  main: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  profile: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    backgroundColor: '#A0C1B8',
    marginLeft: 15,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descColorYellow: {
    color: '#FFC93C',
    fontWeight: 'bold',
  },
  imgProfile: {
    height: 45,
    width: 35,
    position: 'absolute',
  },
  desc: {
    marginLeft: 5,
  },
  name: {
    color: '#F5F5F5',
    fontWeight: 'bold',
    fontSize: 22,
  },
  age: {
    color: '#F5F5F5',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentWrap: {
    marginHorizontal: 19,
    alignItems: 'center',
    flex: 1,
    marginTop: 30,
  },
  opening: {
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  linkedin: {
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  jobWrap: {
    height: 80,
    width: 322,
    backgroundColor: '#FDFDFD',
    flexDirection: 'row',
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  jobIcon: {
    height: 45,
    width: 45,
    marginLeft: 25,
  },
  jobDesc: {
    marginLeft: 20,
  },
  jobName: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
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
