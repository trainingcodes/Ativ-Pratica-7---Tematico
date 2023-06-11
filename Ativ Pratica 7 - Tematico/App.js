import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import Tab from './src/components/Tab';

import Tela1 from './src/views/Tela1';
import Tela2 from './src/views/Tela2';
import Tela3 from './src/views/Tela3';
import Tela4 from './src/views/Tela4';
import Tela5 from './src/views/Tela5';
import PassoStack from './src/components/PassoStack';


export default () => (
  <NavigationContainer>
    <SafeAreaView style={{flex: 1}}>
      <Tab />
    </SafeAreaView>
  </NavigationContainer>
)