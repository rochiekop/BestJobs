import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import jobIcon from '../assets/icon/science.png';
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrap}>
          <Text style={styles.greetings}>
            Selamat Datang <Text style={styles.descColorYellow}>Jhon Doe</Text>{' '}
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
              <Text style={styles.name}>Jhon Doe</Text>
              <Text style={styles.age}>25 Tahun</Text>
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
            <View style={styles.jobWrap}>
              <Image source={jobIcon} style={styles.jobIcon} />
              <View style={styles.jobDesc}>
                <Text style={styles.jobName}>Data Scientist</Text>
                <Text style={styles.jobSalary}>Gaji rata-rata : $ 130.000</Text>
              </View>
            </View>
            <View style={styles.jobWrap}>
              <Image source={jobIcon} style={styles.jobIcon} />
              <View style={styles.jobDesc}>
                <Text style={styles.jobName}>Site Reliability Engineer</Text>
                <Text style={styles.jobSalary}>Gaji rata-rata : $ 200.000</Text>
              </View>
            </View>
            <View style={styles.jobWrap}>
              <Image source={jobIcon} style={styles.jobIcon} />
              <View style={styles.jobDesc}>
                <Text style={styles.jobName}>Software Engineer</Text>
                <Text style={styles.jobSalary}>
                  {' '}
                  Gaji rata-rata : $ 350.000
                </Text>
              </View>
            </View>
            <View style={styles.jobWrap}>
              <Image source={jobIcon} style={styles.jobIcon} />
              <View style={styles.jobDesc}>
                <Text style={styles.jobName}>Android Developer</Text>
                <Text style={styles.jobSalary}>
                  {' '}
                  Gaji rata-rata : $ 290.000
                </Text>
              </View>
            </View>
            <View style={styles.jobWrap}>
              <Image source={jobIcon} style={styles.jobIcon} />
              <View style={styles.jobDesc}>
                <Text style={styles.jobName}>Machine Learning Engineer</Text>
                <Text style={styles.jobSalary}>
                  {' '}
                  Gaji rata-rata : $ 330.000
                </Text>
              </View>
            </View>
            <View style={styles.jobWrap}>
              <Image source={jobIcon} style={styles.jobIcon} />
              <View style={styles.jobDesc}>
                <Text style={styles.jobName}>DevOps</Text>
                <Text style={styles.jobSalary}>
                  {' '}
                  Gaji rata-rata : $ 300.000
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.btnNavigation}>
        <View style={styles.iconNavPosition}>
          <Image
            source={require('../assets/icon/home.png')}
            style={styles.iconBtnNavigation}
          />
        </View>
        <View style={styles.iconNavPosition}>
          <Image
            source={require('../assets/icon/suitcase.png')}
            style={styles.iconBtnNavigation}
          />
        </View>
        <View style={styles.iconNavPosition}>
          <Image
            source={require('../assets/icon/user.png')}
            style={styles.iconBtnNavigation}
          />
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
