import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, } from "react-native";
import { TextInput } from "react-native";
import layout from "../constantes/layout";
import Keyboardwrapper from "../constantes/keybord";

const Login = ()=> {

    return(
       // <Keyboardwrapper>
        <View style={style.root}>
            <View style={style.title}>
                <Text style={style.title_text}>log</Text>
                <Text style={[style.title_text, style.title_color]}>In</Text>
            </View>
            <View style={style.input_group}>
                <Text>Email</Text>
                <View style={style.input_container}>
                    <TextInput secureTextEntry={false} placeholder='Votre Email'/>
                </View>
            </View>        
            <View style={style.input_group}>
                <Text>Mots de Passe</Text>
                <View style={style.input_container}>
                    <TextInput secureTextEntry={true} placeholder='Votre Mots de Passe'/>
                </View>
            </View>        
            <TouchableOpacity style={style.button}>
                <Text style={[style.text, style.button_text]}>Me connecter</Text>
            </TouchableOpacity>
        </View>
       // </Keyboardwrapper>
    )
}

export default Login;

const style= StyleSheet.create({
    root:{
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: layout.paddingHorizontale,
        paddingVertical: layout.paddingVertical,
        backgroundColor: layout.bgColor,
        backgroundColor: '#40e0d0'

    },

    input_container:{
        borderWidth: 1,
        borderColor: layout.primary,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff'

    },

    input:{
        padding: 10,

    },

    text:{
        
    },

    button: {
        backgroundColor: '#048b94',
        padding: 15,
        borderRadius: 10,
        
    },

    button_text:{
        textAlign: 'center',
        color: 'white',
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    title_text:{
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 25,

    },

    title_color: {
        color: '#048b94',
        fontWeight: 'bold'
    },

    input_group: {
        marginBottom: 10,
    }

})