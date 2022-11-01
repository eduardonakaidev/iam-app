import react from "react";
import {View,Text,Button,TextInput, TouchableOpacity } from 'react-native';
import Styles from '../Styles/Styles'



export default function LoginScreen({navigation}){
    return(
        <View style={Styles.container}>
            
            <Text>email</Text>
            <TextInput style={Styles.Inputs} placeholder="email" />
            <Text>senha</Text>
            <TextInput style={Styles.Inputs}  placeholder="senha..." />
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}> 
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('Sign')}>
                <Text>ainda não tem conta?</Text>
            </TouchableOpacity>
        </View>
    );
}

