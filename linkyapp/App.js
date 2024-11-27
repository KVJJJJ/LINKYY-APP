import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';          
import ProfileScreen from './screens/ProfileScreen';     
import Login from './screens/SingUp';                     

import RootStack from './Nav/RootStack';                  1
 

export const CountContext = createContext();

const Tab = createBottomTabNavigator();                 

export default function App() {
  const [count, setCount] = useState(0);                

  return (
    
    <CountContext.Provider value={{ count, setCount }}>   
      <RootStack /> 
      <NavigationContainer>                                     
      
        <Tab.Navigator>                                             
      
          <Tab.Screen name="Home" component={HomeScreen} />               
          <Tab.Screen name="Profile" component={ProfileScreen} />   
      
        </Tab.Navigator>                                                  
      
      </NavigationContainer>                                            
    
    </CountContext.Provider>                                            
  );
}