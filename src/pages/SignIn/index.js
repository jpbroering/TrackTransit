import { StatusBar } from 'react';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image style={styles.logo} source={require('../../assets/tLogo.png')} ></Image>
      </View>
      <View style={styles.containerForm}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register}>
          <Text style={styles.registerText}>Ainda não tem conta? <Text style={styles.textBold}>Cadastre-se</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  containerHeader: {
    flex: 1,
    display: 'flex',
    marginTop: '40%'
  },
  containerForm: {
    flex: 1,
    marginTop: '40%',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    flexShrink: 0
  },
  register: {
    marginTop: 14,
    alignItems: 'center'
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#fff',
    width: '30%',
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 14,
    alignItems: 'center'
  },
  registerText: {
    color: '#fff'
  },
  textBold: {
    fontWeight: 'bold'
  }
});
