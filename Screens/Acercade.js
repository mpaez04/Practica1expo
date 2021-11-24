import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import  Constants  from 'expo-constants';

const Acercade =({navigation}) => {
    
        return (
            <View style={[styles.container]}>
                <Text> Acerca de...</Text>
            </View>
        )
    }
export default Acercade
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#EEAAEE',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });
  