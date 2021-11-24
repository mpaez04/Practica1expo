import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import  Constants  from 'expo-constants';

const Programar =({navigation}) => {
  
        return (
            <View style={[styles.container]}>
                 <View style={{flex:1}}>
                </View>
                <View style={{flex:1}}>
                <Button
              title="JAVASCRIPT"
              onPress={()=>navigation.navigate('Javascriptf')}
              />
                </View>
                <View style={{flex:1}}>
                </View>
                
              <View style={{flex:1}}>
                <Button
              title="REACT"
              onPress={()=>navigation.navigate('Reactf')}
              />
                </View>
            </View>
        )
    }
export default Programar
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#CCF6C3',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });
  