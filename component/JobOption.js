import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const JobOption = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrap}>
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
        <View style={styles.jobWrap}>
          <Image
            source={require('../assets/icon/science.png')}
            style={styles.jobIcon}
          />
          <View style={styles.jobDesc}>
            <Text style={styles.jobName}>Cari Pekerjaan Sesuai</Text>
            <Text style={styles.jobName}>Skill dan Minat</Text>
          </View>
        </View>
        <View style={styles.jobWrap}>
          <View style={styles.jobDesc}>
            <Text style={styles.jobNameLeft}>Cari Tahu Tentang</Text>
            <Text style={styles.jobNameLeft}>Pekerjaan</Text>
          </View>
          <Image
            source={require('../assets/icon/science.png')}
            style={styles.jobIconRight}
          />
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

export default JobOption;

const styles = StyleSheet.create({
  // Pattern
  container: {
    backgroundColor: '#FDFDFD',
    flex: 1,
  },
  main: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  //
  header: {
    height: 125,
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
    paddingTop: 20,
  },
  profileWrap: {
    backgroundColor: '#FFC93C',
    width: 300,
    borderRadius: 15,
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
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
  jobIconRight: {
    height: 45,
    width: 45,
    marginLeft: 20,
  },
  jobDesc: {
    marginLeft: 20,
  },
  jobName: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  jobNameLeft: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginLeft: 70,
  },
});
