import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Acercade from '../Screens/Acercade';
import Contacto from '../Screens/Contacto';
import Pantallagit from '../Screens/Pantallagit';
import Programar from '../Screens/Programar';
import Pantallainicio from '../Screens/Pantallainicio'; 
import Reactf from '../Screens/React';
import Javascriptf from "../Screens/Javascript";

const Stack = createStackNavigator();

export default function StackNavigations1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Programar" component={Programar}
                options={{headerShown:false}}
            />
            <Stack.Screen name="Reactf" component={Reactf}/>
            <Stack.Screen name="Javascriptf" component={Javascriptf}/>
            
        </Stack.Navigator>
    )
}

