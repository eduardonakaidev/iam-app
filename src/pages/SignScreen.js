import react from "react";
import {View,Text,Button, TextInput} from 'react-native';
import Styles from "../Styles/Styles";

    


export default function SignScreen({navigation}){
    return(
        <View style={Styles.container}>
            <TextInput style={Styles.Inputs}  placeholder="email"/>
            <TextInput style={Styles.Inputs} placeholder="nome"/>
            <TextInput style={Styles.Inputs} secureTextEntry={true}  placeholder="senha"/>
            <Button title="criar conta" onPress={()=> navigation.navigate('Login')}/>
        </View>
    );
}