import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function Perfil(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.tittleText}>Perfil</Text>
            </View>
            <View style={styles.containerImage}>
                <ImageBackground source={require('../../assets/person.png')} style={styles.perfilImage}>
                    <TouchableOpacity style={styles.editButton}>
                        <Icon size={20} name='edit'/>
                    </TouchableOpacity>
                </ImageBackground>
                <Text style={styles.nameText}>Usuário</Text>
            </View>
            <View style={styles.containerOptions}>
                <TouchableOpacity style={styles.containerRow}>
                    <Text style={styles.optionText}><Icon size={18} name='user'/> Usuário</Text>
                        <Icon size={20} name='chevron-right'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerRow}>
                    <Text style={styles.optionText}><Icon size={18} name='map-marker'/> Minha localização</Text>
                        <Icon size={20} name='chevron-right'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerRow}>
                    <Text style={styles.optionText}><Icon size={18} name='money'/> Formas de Pagamento</Text>
                        <Icon size={20} name='chevron-right'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerRow}>
                    <Text style={styles.optionText}><Icon size={18} name='archive'/> Histórico de Pagamento</Text>
                        <Icon size={20} name='chevron-right'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerRow}>
                    <Text style={styles.optionText}><Icon size={18} name='bell-o'/> Notificação</Text>
                        <Icon size={20} name='chevron-right'/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerExit}>
                <TouchableOpacity style={styles.containerRow} onPress={()=>navigation.navigate('HomePage')}>
                        <Text style={styles.optionText}><Icon size={18} name='arrow-circle-o-left'/> Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15
    },
    containerHeader: {
        width: '80%',
        height: '6%',
        backgroundColor: '#D9D9D930',
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 10
    },
    optionText: {
        fontSize: 18,
        fontWeight: '600'
    },
    containerExit: {
        marginBottom: 20
    },
    tittleText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    containerImage: {
        backgroundColor: '#D9D9D930',
        width: '70%',
        height: '40%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 20,
        justifyContent: 'center',
    },
    perfilImage: {
        width: '100%',
        height: '80%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    nameText: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
    },
    editButton: {
        backgroundColor: '#FFFC00',
        padding: 12.5,
        width: '18%',
        borderRadius: 20,
        marginEnd: 20,
        marginBottom: 10
    }
})