import react from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/HomeScreen'
import Login from '../pages/LoginScreen'
import Sign from '../pages/SignScreen'
import Welcome from '../pages/WelcomeScreen'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator   initialRouteName="Welcome"  >
            <Stack.Screen options={{headerShown: false,}} name="Welcome" component={Welcome}  />
            <Stack.Screen options={{headerShown: false,}}name="Login" component={Login}/>
            <Stack.Screen options={{headerShown: false,}} name="Sign" component={Sign}/>
            <Stack.Screen options={{headerShown: false,}} name="Home" component={Home}/>
        </Stack.Navigator>
    )
}