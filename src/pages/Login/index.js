import react, { useState } from "react";
import {View,Text,Button,TextInput, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/Styles'
import StylesLocal from './StylesLocal'


export default function LoginScreen({navigation}){
    const [] = useState("")
    const []
    return(
        <View style={Styles.container}>
            
            <Text>email</Text>
            <TextInput style={Styles.Inputs} placeholder="email" />
            <Text>senha</Text>
            <TextInput style={Styles.Inputs}  placeholder="senha..." />
            <TouchableOpacity style={StylesLocal.LoginOpacity} onPress={()=> navigation.navigate('Home')}> 
                <Text style={StylesLocal.LoginText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate('Sign')}> 
                <Text style={StylesLocal.TextCriarConta}>ainda não tem conta? crie sua conta</Text>
                
            </TouchableOpacity>
        </View>
    );
}

