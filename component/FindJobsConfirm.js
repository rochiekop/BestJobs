import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

const FindJobsConfirm = () => {
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
      <View style={styles.main}>
        <View style={styles.content}>
          <ScrollView>
            <Text
              style={{fontWeight: 'bold', fontSize: 16, marginVertical: 10}}>
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
              />
              <TextInput
                placeholder="Skills yang dikuasai"
                style={styles.input}
              />
              <TextInput placeholder="Bakat" style={styles.input} />
            </View>
          </ScrollView>
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: 'white-smoke',
              opacity: 0.7,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
            }}
          />
          <View style={{position: 'absolute', paddingVertical: 120}}>
            <Text>Apakah kamu sudah yakin</Text>
            <Text>dengan apa yang kamu isi ?</Text>
            <View style={styles.btnWrap}>
              <View style={styles.btnMasuk}>
                <Text style={{fontWeight: 'bold'}}>Yakin</Text>
              </View>
              <View style={styles.btnCancel}>
                <Text style={{fontWeight: 'bold'}}>Belum</Text>
              </View>
            </View>
          </View>
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

export default FindJobsConfirm;

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
