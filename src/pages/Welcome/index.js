import react from "react";
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/Styles'
import StylesLocal from './StylesLocal'

export default function Welcome({ navigation }) {
    return (
        <View style={Styles.container}>
            <Text>bem vindo ao app</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>

            </TouchableOpacity>
        
            <TouchableOpacity onPress={() => navigation.navigate('Sign')} >
                <Text>Crie sua conta</Text>
            </TouchableOpacity>

        </View>
    );

   
    

}

