import react, { useEffect, useState } from "react";
import {View,Text,Button,TextInput, TouchableOpacity ,KeyboardAvoidingView, Platform} from 'react-native';
import Styles from '../../Styles/Styles'
import StylesLocal from './StylesLocal'
import firebase from '../../config/firebase'


export default function LoginScreen({navigation}){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorLogin,setErrorLogin] = useState("");
    const loginFirebase = ()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

    }
    useEffect(()=>{

    },[]);
    return(
        <KeyboardAvoidingView style={Styles.container} behavior={Platform.OS === "ios"?"padding" : "height"}>
            
            <Text>email</Text>
            <TextInput style={Styles.Inputs} placeholder="email" onChangeText={(text)=> setEmail(text)} value={email} />
            <Text>senha</Text>
            <TextInput style={Styles.Inputs}  placeholder="senha..."secureTextEntry={true} onChangeText={(text)=> setPassword(text)} value={password} />
            <TouchableOpacity style={StylesLocal.LoginOpacity} onPress={loginFirebase}> 
                <Text style={StylesLocal.LoginText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate('Sign')} > 
                <Text style={StylesLocal.TextCriarConta}>ainda não tem conta? crie sua conta</Text>
                
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

