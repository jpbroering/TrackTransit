import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function PaymentPage(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.containerOptions}>
                <TouchableOpacity onPress={()=>navigation.navigate('HomePage')}>
                    <Icon size={20} name="arrow-left"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Perfil')}>
                    <Icon size={20} name="list-ul"/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerBody}>
                <Text style={styles.tittlePage}>Pagamento</Text>
                <Text style={styles.tittleRoute}>Serraria/Forquilhinhas</Text>
                <Image source={require('../../assets/cartão.png')}/>
                <Text style={styles.textValue}>Valor: R$5,50</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Map')} style={styles.buttonPay}>
                    <Text style={styles.buttonPayText}>Pagar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerWallet}>
                <View>
                    <Text style={styles.walletTittle}>Carteira</Text>
                    <Text style={styles.walletCash}>R$610,20</Text>
                </View>
                <TouchableOpacity style={styles.buttonWallet}>
                    <Text style={styles.buttonWalletText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 60
    },
    containerOptions: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerWallet: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 60,
        height: '12%',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center'
    },
    walletCash: {
        fontSize: 20,
        fontWeight: '900'
    },
    walletTittle: {
        fontSize: 14,
        color: '#AEAEB3'
    }, 
    buttonWallet: {
        borderWidth: 1.5,
        width: '35%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#AEAEB3'
    },
    containerBody: {
        padding: 30
    },
    tittlePage: {
        color: '#242736B2',
    },
    tittleRoute: {
        fontSize: 24,
        fontWeight: '700'
    },
    buttonPay: {
        backgroundColor: '#000',
        width: '40%',
        height: '11%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: 20
    },
    buttonPayText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
        
    },
    textValue: {
        fontSize: 40,
        fontWeight: '800',
        alignSelf: 'center'
    }
})