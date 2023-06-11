import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

import Tela1 from "../views/Tela1";
import Tela2 from "../views/Tela2";
import Tela3 from "../views/Tela3";
import Tela4 from "../views/Tela4";
import Tela5 from "../views/Tela5";

const Tab = createBottomTabNavigator();

export default comp => (
  
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Tela1':
              iconName = focused ? 'home' : 'home-outline';
            break;

            case 'Tela2':
              iconName = focused ? 'book' : 'book-outline';
              break;

            case 'Tela3':
              iconName = focused ? 'game-controller' : 'game-controller-outline';
              break;

            case 'Tela4':
              iconName = focused ? 'fitness' : 'fitness-outline';
              break;

            case 'Tela5':
              iconName = focused ? 'people' : 'people-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        
        tabBarActiveTintColor: '#FFA500',
        tabBarInactiveTintColor: 'green',
        tabBarActiveBackgroundColor: '#add8e6',
        tabBarInactiveBackgroundColor: '#ffc0cb',
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 18 },
      })}
      initialRouteName="Tela1"
    >
      <Tab.Screen name='Tela1' component={Tela1}
        options={{title: 'Tela 1' }} />
      <Tab.Screen name='Tela2' component={Tela2}
        options={{title: 'Tela 2' }}  />
      <Tab.Screen name='Tela3' component={Tela3}
        options={{title: 'Tela 3' }}  />
      <Tab.Screen name='Tela4' component={Tela4}
        options={{title: 'Tela 4' }}  />
      <Tab.Screen name='Tela5' component={Tela5}
        options={{title: 'Tela 5' }}  />
    </Tab.Navigator>
  );

