import react from "react";
import {View,Text,Button,TextInput, TouchableOpacity} from 'react-native';
import Styles from '../styles/StylesLogin';


export default function LoginScreen({navigation}){
    return(
        <View style={Styles.containerLogin}>
            <TextInput placeholder="usuario" style={Styles.Inputs}/>
            <TextInput placeholder="senha..." style={Styles.Inputs}/>
            <Button title="login" onPress={()=> navigation.navigate('Home')}/>
                
            
                
        
           
        </View>
    );
}