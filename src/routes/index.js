import react from "react";
import { NavigationContainer ,} from '@react-navigation/native'
import Log from './Log'
import App from './App'

export default function Routes() {
    return (
      
        <NavigationContainer>
            <App />
        </NavigationContainer>
    )
}