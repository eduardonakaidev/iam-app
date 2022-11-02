import react from "react";
import {View,Text,Button } from 'react-native';
import Styles from '../../Styles/Styles';
import StylesLocal from './StylesLocal'
export default function Home(){
    return(
        <View style={Styles.container} >
            <Text>
                Home screen
            </Text>
        </View>

    );
}
