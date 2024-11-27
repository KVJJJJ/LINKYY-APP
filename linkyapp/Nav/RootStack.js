import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react';

import HomeScreen from './../screens/HomeScreen';
import ProfileScreen from './../screens/ProfileScreen';
import Login from './../screens/SingUp';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const {primary, tertiary} = Colors

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftConstainerstyle: {
                        paddingLeft: 20
                    }
                }}    
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack

//const style= StyleSheet.create({
   // screenOptions:{
    //    headerStyle: {
    //        backgroundColor: 'transparent'
    //    },
    //    headerTintColor: tertiary,
    //    headerTransparent: true,
    //    headerTitle: '',
    //    headerLeftConstainerstyle: {
    //        paddingLeft: 20
    //},
//}
//}
//);