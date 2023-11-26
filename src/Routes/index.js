import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Login from '../pages/Login'
import HomePage from '../pages/HomePage'
import Map from '../pages/Map'
import QrcodePage from '../pages/QrcodePage'
import PaymentPage from '../pages/PaymentPage'
import Perfil from '../pages/Perfil'
import DriverPage from '../pages/DriverPage'
import DriverMap from '../pages/DriverMap'
import DriverPerfil from '../pages/DriverPerfil'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component= { Welcome }
            options= { { headerShown: false} }
            />
        <Stack.Screen
            name="SignIn"
            component= { SignIn }
            options= { { headerShown: false} }
            />
        <Stack.Screen
            name="Login"
            component= { Login }
            options= { { headerShown: false} }
            />
        <Stack.Screen
            name="HomePage"
            component= { HomePage }
            options= { { headerShown: false} }
        />
        <Stack.Screen
            name="DriverPage"
            component= { DriverPage }
            options= { { headerShown: false} }
        />
        <Stack.Screen
            name="Map"
            component= { Map }
            options= { { headerShown: false} }
        />
        <Stack.Screen
            name="Perfil"
            component= { Perfil }
            options= { { headerShown: false} }
        />
        <Stack.Screen
            name="QrcodePage"
            component= { QrcodePage }
            options= { { headerShown: false} }
        />
        <Stack.Screen
            name="PaymentPage"
            component= { PaymentPage }
            options= { { headerShown: false} }
        />
        <Stack.Screen
            name="DriverMap"
            component= { DriverMap }
            options= { { headerShown: false} }
        />
        <Stack.Screen
            name="DriverPerfil"
            component= { DriverPerfil }
            options= { { headerShown: false} }
        />
    </Stack.Navigator>
    )
}