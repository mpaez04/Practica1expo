import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import  Constants  from 'expo-constants';

const Pantallainicio =({navigation}) => {
  
    return (
      <View style={styles.container}>
        <Text>Bienvenido</Text>
          <Image
          style={styles.logo}
          source={{ uri:"https://pbs.twimg.com/media/EU9M2eLXgAE-q8i.jpg" }}
          />
      </View>
  );
}
export default Pantallainicio
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 230,
    height: 230,
  },
});

