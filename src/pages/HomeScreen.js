import react from "react";
import {View,Text,Button ,StyleSheet} from 'react-native';

export default function Home(){
    return(
        <View style={Styles.container}>
            <Text>
                Home screen
            </Text>
        </View>

    );
}

const Styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }

})