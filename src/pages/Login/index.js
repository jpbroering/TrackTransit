import React, {useState} from 'react'
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text, Svg } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function Login(){
    const navigation = useNavigation()
    const [visability, setVisability] = React.useState(true)
    const home = ()=>navigation.navigate('HomePage')
    const driverHome = ()=>navigation.navigate('DriverPage')
    const togglePasswordVisability = ()=>{
      setVisability(!visability)
    }
    const [senha, setSenha] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [users, setUsers] = React.useState
    ([{
        id: 1,
        email: 'a',
        senha: 'ab',
        nome: 'joao',
        motorista: false
      },
      {
        id: 2,
        email: 'b',
        senha: 'bc',
        nome: 'motorista',
        motorista: true
      }])

    const verifyUser = (email, senha)=>{
      const mensagem = "email ou senha incorreta"
      for(i=0; i<users.length;i++){
        if(email == users[i].email){
          if(senha == users[i].senha && users[i].motorista === false){
            return home()
          }
          else if(senha === users[i].senha && users[i].motorista === true){
            return driverHome()
          }
          else{
            return alert(mensagem)
          }
        }
      }
    }
    return(
        <View style={ styles.container } >
            <View style={ styles.containerHeader }>
                <Image source={require('../../assets/tLogo.png')} />
            </View>
            
            <View style={ styles.containerForm }>
              <View style={styles.containerInput}>
                <TextInput 
                  value={email}
                  placeholder='email'
                  id='inputEmail'
                  style={styles.input}
                  onChangeText={(email)=>setEmail(email)}
                />
                </View>
              <View style={styles.containerInputPassword}> 
                <TextInput 
                  value={senha}
                  id='inputPassword' 
                  placeholder='senha' 
                  secureTextEntry={visability} 
                  style={styles.inputPassword}
                  onChangeText={(senha)=>setSenha(senha)}
                />
                <Icon.Button
                  name={visability ? "eye" : "eye-slash"}
                  onPress={togglePasswordVisability}
                  backgroundColor={'#fff'}
                  color={'black'}
                  borderRadius={50}
                  >
                  </Icon.Button>
              </View> 

              <TouchableOpacity onPress={()=>{verifyUser(email, senha)}} style={styles.button}>
                  <Text style={styles.buttonText}>Entrar </Text>
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
                    <TouchableOpacity>
                      <Image style={styles.icon} source={require('../../assets/appleIcon.png')}/>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("SignIn")}>
                <Text style={styles.registerText}>Não possui uma conta? <Text style={styles.textBold}>Cadastre-se</Text></Text>
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
      
})