import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const LoginPage = () => {
  return (
    <View>
      <View style={styles.roundsUp}>
        <Text />
      </View>
      <View style={styles.wrapText}>
        <Text style={styles.titleBest}>Best</Text>
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
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </View>
      <View style={styles.btnWrap}>
        <View style={styles.btnMasuk}>
          <Text style={{fontWeight: 'bold'}}>Masuk</Text>
        </View>
        <Text style={styles.regis}>
          Belum Punya akun ? silakan{' '}
          <Text style={styles.descColorYellow}>Daftar</Text> disini !
        </Text>
      </View>
      <View style={styles.roundsDown}>
        <Text />
      </View>
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
    elevation: 8,
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
    elevation: 5,
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
