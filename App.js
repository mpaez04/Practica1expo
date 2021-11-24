import React  from 'react';
import { StyleSheet,  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTapNavigator1 from './Navigations/BottomTapNavigator1';

export default function App() {
  
    return (
          <NavigationContainer>
            <BottomTapNavigator1/>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

