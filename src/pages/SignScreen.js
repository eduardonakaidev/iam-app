import react from "react";
import {View,Text,Button, TextInput} from 'react-native';
import Styles from '../styles/StylesLogin'
    


export default function SignScreen({navigation}){
    return(
        <View style={Styles.containerLogin}>
            <TextInput style={Styles.Inputs} placeholder="email"/>
            <TextInput style={Styles.Inputs} placeholder="nome"/>
            <TextInput secureTextEntry={true} style={Styles.Inputs} placeholder="senha"/>
            <Button title="criar conta" onPress={()=> navigation.navigate('Login')}/>
        </View>
    );
}