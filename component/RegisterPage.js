import React from 'react';
import {StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';

const LoginPage = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.roundsUp}>
          <Text />
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.titleReg}>Registrasi</Text>
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
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Nama Lengkap" style={styles.input} />
          <TextInput placeholder="Kata Sandi" style={styles.input} />
          <TextInput placeholder="Kata Sandi Ulang" style={styles.input} />
        </View>
        <View style={styles.btnWrap}>
          <View style={styles.btnMasuk}>
            <Text style={{fontWeight: 'bold'}}>Daftar</Text>
          </View>
          <Text style={styles.regis}>
            Belum Punya akun ? silakan{' '}
            <Text style={styles.descColorYellow}>Daftar</Text> disini !
          </Text>
        </View>
        <View style={styles.roundsDown}>
          <Text />
        </View>
      </ScrollView>
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
