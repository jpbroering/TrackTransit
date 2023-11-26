import React from "react";

import { Text, View, StyleSheet, TextInput, Image, Touchable, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function DriverPage(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerStar} onPress={()=>navigation.navigate('DriverMap')}>
                <Text style={styles.tittleStar}>Iniciar Rota</Text>
                <View style={styles.containerImgBus}>
                    <Image style={styles.imgBus} source={require("../../assets/bus.png")}/>
                </View>
                <Text style={styles.routeText}>Serraleria/Forquilinhas</Text>
                <View style={styles.containerRowStar}>
                    <Text style={styles.distanceText}><Icon name='location-arrow'/> {">"} 3km</Text>
                    <Text style={styles.valueText}>R$5,50</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.containerRow}>
                <TouchableOpacity onPress={()=>navigation.navigate('DriverPerfil')} style={styles.containerProfile}>
                    <View style={styles.containerImgPerson}>
                        <Image style={styles.imgPerson} source={require("../../assets/person.png")}/>
                    </View>
                    <View style={styles.containerRowProfile}>
                        <Text style={styles.tittleProfille}>Motorista</Text>
                        <Text style={styles.subtittleProfille}>Fora de rota</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.containerMap}>
                    <Image style={styles.imgMap} source={require('../../assets/map.png')}/>
                </View>
            </View>
            <View style={styles.containerLog}>
                <View style={styles.containerRowLog}>
                    <Text style={styles.logText}>{"Boka’s"}</Text>
                    <TouchableOpacity>
                    <Icon color={"#787878"} size={25} name="ellipsis-h"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerRowLog}>
                    <View style={styles.containerStreet}>
                        <Text style={styles.logTittle}>Rua Koesa</Text>
                        <Text style={styles.logText}>{">"} 3km</Text>
                    </View>
                    <TouchableOpacity style={styles.logButton}>
                        <Icon size={15} name="arrow-right"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
                <View style={styles.containerRowLog}>
                    <View style={styles.containerStreet}>
                        <Text style={styles.logTittle}>R. José Gonzaga Regina Lima</Text>
                        <Text style={styles.logText}>{">"} 450m</Text>
                    </View>
                    <TouchableOpacity style={styles.logButton}>
                        <Icon size={15} name="arrow-right"/>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerSearch: {
        backgroundColor: '#F3F3F3',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 42,
        borderRadius: 20,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerStar: {
        backgroundColor: '#F3F3F3',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 42,
        borderRadius: 20,
        height: '33%',
        padding: 22
    },
    containerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '20%',
        width: '100%',
        paddingLeft: 24,
        paddingRight: 24
    },
    containerProfile: {
        backgroundColor: '#F3F3F3',
        marginTop: 22,
        borderRadius: 20,
        height: '100%',
        width: '45%',
        padding: 22,
        justifyContent: 'center',
    },
    containerMap: {
        backgroundColor: '#F3F3F3',
        marginTop: 22,
        borderRadius: 20,
        height: '100%',
        width: '45%',
        
    },
    containerLog: {
        backgroundColor: '#282931',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 42,
        borderRadius: 20,
        height: '22%',
        padding: 22
    },
    inputSearch: {
        paddingLeft: 10
    },
    imgPerson: {
        width: 100,
        height: 100
    },
    containerImgPerson: {
        alignItems: 'center'
    },
    containerRowStar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tittleProfille: {
        textAlign: 'center',
        fontSize: 18
    },
    subtittleProfille: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    imgBus: {
        width: '69%',
        height: '76%'
    },
    containerImgBus: {
        alignItems:'center'
    },
    tittleStar: {
        color: '#787878',
        fontSize: 16
    },
    routeText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    distanceText: {

    },
    valueText: {
        fontWeight: 'bold'
    },
    imgMap: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    containerRowLog: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 7
    },
    logTittle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    logText: {
        color: '#fff',
        fontWeight: '200'
    },
    logButton: {
        backgroundColor: '#fff',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    line: {
        backgroundColor: '#4B4B4B',
        height: 1.5,
        marginBottom: 7,
        backgroundColor: '#fff'
    }
})