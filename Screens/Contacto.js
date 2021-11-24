import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import  Constants  from 'expo-constants';

const Contacto =({navigation}) => {
 
        return (
            <View style={styles.container}>
                <Text style={styles.container}> contacto #1</Text>
            </View>
        )
    }
export default Contacto
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#CCCCFF',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });
  