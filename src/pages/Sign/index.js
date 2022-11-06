import react from "react";
import {View,Text,Button, TextInput,TouchableOpacity} from 'react-native';
import Styles from "../../Styles/Styles";
import StylesLocal from './StylesLocal'
import firebase from '../../config/firebase'
    


export default function SignScreen({navigation}){
    return(
        <View style={Styles.container}>
            <Text>Email</Text>
            <TextInput style={Styles.Inputs}  placeholder="email"/>
            <Text>Nome Completo</Text>
            <TextInput style={Styles.Inputs} placeholder="nome"/>
            <Text>Senha</Text>
            <TextInput style={Styles.Inputs} secureTextEntry={true}  placeholder="senha"/>
            <TouchableOpacity style={StylesLocal.CriarContaButton}  onPress={()=> navigation.navigate('Login')}>
                <Text style={StylesLocal.TextCriarContaButton}>Criar conta</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text> ja possui uma conta ? faça Login</Text>
                
            </TouchableOpacity>
        </View>
    );
}