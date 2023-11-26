import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function DriverMap(){
    const navigation = useNavigation()
    const [stop, setStop] = React.useState({
        tarifa: '5.50',
        paradas: ['R. Koesa','R. José Gonzaga Regina lima','R. Caetano josé Ferreira'
    ]})
    return(
            <ImageBackground source={require('../../assets/map.png')} style={styles.imageBg}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity onPress={()=>navigation.navigate('DriverPage')}>
                        <Icon size={20} name="arrow-left"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('DriverPerfil')}>
                        <Icon size={20} name="list-ul"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerInfoBody}>
                    <View style={styles.containerInfo}>
                        <View style={styles.containerTittle}>
                            <Text style={styles.tittleText}>Próximas Paradas</Text>
                        </View>
                        <View style={styles.containerStops}>
                            <View style={styles.boxRow}>
                                <Text style={styles.stopText}>{stop.paradas[0]}</Text>
                            </View>
                            <View style={styles.boxRow}>
                                <Text style={styles.stopText}>{stop.paradas[1]}</Text>
                            </View>
                            <View style={styles.boxRow}>
                                <Text style={styles.stopText}>{stop.paradas[2]}</Text>
                            </View>
                        </View>
                        <View style={styles.containerPayment}>
                            <Text style={styles.priceText}>R${stop.tarifa}</Text>
                        </View>
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
    containerHeader: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerInfoBody: {
        backgroundColor: '#282931',
        height: '45%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        justifyContent: 'space-between',
    },
    containerInfo: {
        backgroundColor: '#fff',
        height: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        padding: 25,
        justifyContent: 'space-between'
    },
    busImage: {
        width: '45%',
        height: '30%'
    },
    containerInfoHeader: {
        padding: 25,
        height: '28%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    tittleBus: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    distanceText: {
        color: '#fff',
        fontSize: 16,

    },
    buttonExit: {
        backgroundColor: '#44454B',
        width: 30,
        height: 30,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText: {
        justifyContent: 'space-between',
    },
    tittleText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    containerStops: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerPayment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boxRow: {
        borderColor: '#E8E8E8',
        borderWidth: 1.25,
        width: 110,
        height: 90,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center'
    },
    stopText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    priceText: {
        fontSize: 30,
        fontWeight: '900'
    },
})