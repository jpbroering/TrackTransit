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
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <TouchableOpacity>

                </TouchableOpacity>
                
            </View>
            <View style={ styles.containerBottom}>
                <Text style={styles.message}>ou continue com</Text>
                <View style={styles.containerCollumn}>
                    
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

    },
    containerBottom: {

    },
    containerCollumn: {

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
        paddingLeft: '20%',
        paddingRight: '10%'
      },
})