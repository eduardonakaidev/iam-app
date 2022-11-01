import react from "react";
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import Styles from '../Styles/Styles'

export default function Welcome({ navigation }) {
    return (
        <View style={Styles.container}>
            <Text>Welcome you app</Text>
            <Button title="Login" onPress={() => navigation.navigate('Login')}/>
        
            <Button title="criar conta" onPress={() => navigation.navigate('Sign')} />

        </View>
    );

   
    

}

