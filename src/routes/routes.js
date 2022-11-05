import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home'
import Login from '../pages/Login'
import Sign from '../pages/Sign'
import Welcome from '../pages/Welcome'
import Profile from '../pages/Profile'
import Marketplace from '../pages/Marketplace'
import Treino from '../pages/Treino'


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome"  >
                <Stack.Screen options={{ headerShown: true, }} name="Welcome" component={Welcome} />
                <Stack.Screen options={{ headerShown: true, }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: true, }} name="Sign" component={Sign} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
} 