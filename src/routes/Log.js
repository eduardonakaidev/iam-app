import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login'
import Sign from '../pages/Sign'
import Welcome from '../pages/Welcome'



const Stack = createNativeStackNavigator();


export default function ShowLoginStack () {
    return (
      
            <Stack.Navigator initialRouteName="Welcome"  >
                <Stack.Screen options={{ headerShown: true, }} name="Welcome" component={Welcome} />
                <Stack.Screen options={{ headerShown: true, }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: true, }} name="Sign" component={Sign} />
                
            </Stack.Navigator>
   
    )
} 
