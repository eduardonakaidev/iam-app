import react from "react";
import { View, Text, Image, Button, TouchableOpacity,StyleSheet } from 'react-native';

export default function Welcome({ navigation }) {
    return (
        <View style={StyleSheet.create({flex:1,alignItems:'center',justifyContent:'center'})}>
            <Text>Welcome you app</Text>
            <Button title="Login" onPress={() => navigation.navigate('Login')} style={StyleSheet.create({})}/>
        
            <Button title="criar conta" onPress={() => navigation.navigate('Sign')} />

        </View>
    );

   
    

}

