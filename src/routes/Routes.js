import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/HomeScreen'
import Login from '../pages/LoginScreen'
import Sign from '../pages/SignScreen'
import Welcome from '../pages/WelcomeScreen'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome"  >
                <Stack.Screen options={{ headerShown: true, }} name="Welcome" component={Welcome} />
                <Stack.Screen options={{ headerShown: true, }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: true, }} name="Sign" component={Sign} />
                <Stack.Screen options={{ headerShown: true, }} name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}