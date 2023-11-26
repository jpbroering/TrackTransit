import React from "react";

import { View, StyleSheet, ImageBackground, TouchableOpacity, Text, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function QrcodePage(){
    const navigation = useNavigation()
    return(
        <ImageBackground source={require('../../assets/map.png')} style={styles.imageBg}>
                <View style={styles.containerTop}>
                    <TouchableOpacity>
                        <Icon size={20} name="list-ul"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerInfoBody}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.tittle}>Aproxime no leitor</Text>
                        <Text style={styles.subTittle}>Aproxime o qr code no leitor do ônibus</Text>
                    </View>
                    <View style={styles.containerQr}>
                        <TouchableOpacity onPress={()=>navigation.navigate('PaymentPage')}>
                        <Image style={styles.qrcodeImage} source={require('../../assets/qrCode.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBg: {
        flex: 1,
        justifyContent: 'space-between'
    },
    containerTop: {
        padding: 20,
        alignItems: 'flex-end'
    },
    containerHeader: {
        padding: 20,
        alignItems: 'center'
        
    },
    containerInfoBody: {
        backgroundColor: '#fff',
        height: '60%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 25
    },
    qrcodeImage: {
        width: 250,
        height: 250
    },
    containerQr: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tittle: {
        fontSize: 30,
        fontWeight: '900'
    },
    subTittle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
        color: '#B9B9B9'
    }
})