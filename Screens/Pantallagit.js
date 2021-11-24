  import React  from 'react'
import { Text, View, StyleSheet,Button, Image } from 'react-native'

const Pantallagit =({navigation}) => {
  
        return (
            <View style={[styles.container]}>
                <Image
          style={styles.logo}
          source={{ uri:"https://cdn-icons-png.flaticon.com/512/25/25231.png" }}
          />
          <Text> @mpaez04</Text>
            </View>
        )
}
export default Pantallagit  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EECCEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  }
  });
  