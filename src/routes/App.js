import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../pages/home'
import Profile from '../pages/Profile'
import Marketplace from '../pages/Marketplace'
import Treino from '../pages/Treino'

const Tab = createBottomTabNavigator();
export default function ShowBottomTabs() {
    return (
       
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Treino" component={Treino} />
                <Tab.Screen name="Marketplace" component={Marketplace} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
       
    );

}