import React, {useState} from 'react'
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text, Svg } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function SignIn(){
    const navigation = useNavigation()
    const [visibility, setVisibility] = React.useState(true)
    const [repeatVisibility, setRepeatVisibility] = React.useState(true)
    const togglePasswordVisibility = ()=>{
      setVisibility(!visibility)
    }
    const togglePasswordRepeatVisibility = ()=>{
      setRepeatVisibility(!repeatVisibility)
    }
    return(
        <View style={ styles.container } >
            <View style={ styles.containerHeader }>
                <Image source={require('../../assets/tLogo.png')} />
            </View>
            <View style={ styles.containerForm }>
                <View style={styles.containerInput}>
                <TextInput placeholder='nome' style={styles.input}/>
                </View>
                <View style={styles.containerInput}>
                <TextInput 
                  placeholder='email' 
                  style={styles.input}
                />
                </View>
              <View style={styles.containerInputPassword}> 
                <TextInput 
                  id='inputPassword' 
                  placeholder='senha' 
                  secureTextEntry={visibility} 
                  style={styles.inputPassword}
                />
                <Icon.Button
                  name={visibility ? "eye" : "eye-slash"}
                  onPress={togglePasswordVisibility}
                  backgroundColor={'#fff'}
                  color={'black'}
                  borderRadius={50}
                  >
                  </Icon.Button>
              </View> 
              <View style={styles.containerInputRepeatPassword}> 
                <TextInput 
                  id='inputPassword' 
                  placeholder='senha' 
                  secureTextEntry={repeatVisibility} 
                  style={styles.inputPassword}
                />
                <Icon.Button
                  name={repeatVisibility ? "eye" : "eye-slash"}
                  onPress={togglePasswordRepeatVisibility}
                  backgroundColor={'#fff'}
                  color={'black'}
                  borderRadius={50}
                  >
                  </Icon.Button>
              </View> 
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.button}>
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
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.registerText}>Já possui uma conta? <Text style={styles.textBold}>Entrar</Text></Text>
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
        backgroundColor: '#fff',
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        height: 35,
        borderRadius: 50,
        width: '85%'
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
      },
      containerInput: {
        width: '80%',
        marginTop: '3%',
        backgroundColor: '#fff',
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
      },
      containerInputPassword: {
        width: '80%',
        marginTop: '3%',
        backgroundColor: '#fff',
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
      },
      inputPassword: {
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        height: 35,
        width: '85%'
      },
      containerInputRepeatPassword: {
        width: '80%',
        marginTop: '3%',
        backgroundColor: '#fff',
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
      },
})