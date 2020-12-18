import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginPage from '../component/LoginPage'
import RegisterPage from '../component/RegisterPage'

const Stack = createStackNavigator();
function Auth(props) {
createStackNavigator
    return (
        <Stack.Navigator>
             <Stack.Screen 
            name="LoginPage" 
            component={LoginPage} 
            options={
              {
              headerShown: false,
              transitionSpec:{
                open:TransitionPresets.RevealFromBottomAndroid,
                close:TransitionPresets.RevealFromBottomAndroid
              }
            
          }}
            />
             <Stack.Screen 
            name="RegisterPage" 
            component={RegisterPage} 
            options={
              {
              headerShown: false,
              transitionSpec:{
                open:TransitionPresets.RevealFromBottomAndroid,
                close:TransitionPresets.RevealFromBottomAndroid
              }
          }}
            />
        </Stack.Navigator>
    );
}

export default Auth;