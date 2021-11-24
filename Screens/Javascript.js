import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import  Constants  from 'expo-constants';

const Javascript =({navigation}) => {
  
    return (
      <View  style={styles.container}>
          <Image
          style={styles.logo}
          source={{ uri:"https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png" }}
          />
      </View>
  );
}
export default Javascript
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
  logo: {
    width: 230,
    height: 230,
  }
});
