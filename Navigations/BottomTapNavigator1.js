import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Acercade from '../Screens/Acercade';
import Pantallagit from '../Screens/Pantallagit';
import Programar from '../Navigations/StackNavigations1';
import Pantallainicio from '../Screens/Pantallainicio'; 
import Contacto1Screen from '../Screens/Contacto1';

const Tab = createBottomTabNavigator();

export default function BottomTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName= "Inicio"
            tabBarOptions={{
                activeTintColor:"#008000",
                inactiveTintColor: "#060606",
                showLabel:true,
                LabelStyle:{
                    fontSize:12
                },
                Style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }
            }}
        >
            <Tab.Screen 
                name= "Inicio"
                component= {Pantallainicio}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon: ({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color} />
                    ),
                    headerShown:false
                    
                }}
            />
            <Tab.Screen 
                name= "GitHub"
                component= {Pantallagit}
                options={{
                    tabBarLabel:"GitHub",
                    tabBarIcon: ({color})=>(
                        <Ionicons name={"logo-github"} size={20} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name= "Programar"
                component= {Programar}
                options={{
                    tabBarLabel:"Programar",
                    tabBarIcon: ({color})=>(
                        <Ionicons name={"logo-android"} size={20} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name= "Contacto"
                component= {Contacto1Screen}
                options={{
                    tabBarLabel:"Contacto",
                    tabBarIcon: ({color})=>(
                        <Ionicons name={"people-outline"} size={20} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name= "Acerca de"
                component= {Acercade}
                options={{
                    tabBarLabel:"Acerca de",
                    tabBarIcon: ({color})=>(
                        <Ionicons name={"md-help-circle"} size={20} color={color} />
                    ),
                    headerShown:false
                }}
            />
        </Tab.Navigator>
    )
}