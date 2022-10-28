import react from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/HomeScreen/HomeScreen';
import Login from './src/pages/LoginScreen/LoginScreen'
import Sign from './src/pages/SignScreen/SignScreen'
import Welcome from './src/pages/WelcomeScreen/WelcomeScreen'

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Sign" component={Sign}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}