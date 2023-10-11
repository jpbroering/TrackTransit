import 'react'
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text, Svg } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function SignIn(){
    const navigation = useNavigation()
    return(
        <View style={ styles.container } >
            <View style={ styles.containerHeader }>
                <Image source={require('../../assets/tLogo.png')} />
            </View>
            <View style={ styles.containerForm }>
                <TextInput placeholder='nome' style={styles.input}/>
                <TextInput placeholder='email' style={styles.input}/>
                <TextInput placeholder='senha' secureTextEntry={true} style={styles.input}/>
                <TextInput placeholder='repita sua senha' secureTextEntry={true} style={styles.input}/>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Criar</Text>
                </TouchableOpacity>
            </View>
            <View style={ styles.containerBottom}>
                <Text style={styles.message}>ou continue com</Text>
                <View style={styles.containerCollumn}>
                  <View style={styles.containerButton}>
                    <TouchableOpacity>
                      <Image style={styles.icon} source={require('../../assets/googleIcon.png')}/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.containerButton}>
                    <TouchableOpacity >
                      <Image style={styles.icon} source={require('../../assets/facebookIcon.png')}/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.containerButton}>
                    <TouchableOpacity >
                      <Image style={styles.icon} source={require('../../assets/appleIcon.png')}/>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity>
                <Text style={styles.registerText}>Ainda não tem conta? <Text style={styles.textBold}>Cadastre-se</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    containerHeader: {
        alignItems: 'center'
    },
    containerForm: {
      alignItems: 'center'
    },
    containerBottom: {

    },
    containerCollumn: {
      display: 'flex',
      flexDirection: 'row',
      padding: 12,
      justifyContent: 'center',
    },
    button: {
        backgroundColor: '#fff',
        width: '30%',
        borderRadius: 20,
        paddingVertical: 8,
        marginTop: '5%',
        alignItems: 'center'
      },
    buttonText: {
      color: '#000000',
      fontSize: 18,
      fontWeight: 'bold'
    },
      registerText: {
        color: '#fff',
        textAlign: 'center'
      },
      textBold: {
        fontWeight: 'bold'
      },
      message: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
      },
      input: {
        marginTop: '3%',
        backgroundColor: '#fff',
        fontSize: 16,
        width: '70%',
        paddingLeft: 20,
        paddingRight: 20,
        height: 35,
        borderRadius: 50,
      },
      icon: {
        width: 36,
        height: 44,
        borderRadius: 5
      },
      containerButton: {
        alignItems: 'center',
        marginRight: '5%',
        marginLeft: '5%'
      }
})