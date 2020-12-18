
import React from 'react';
import 'react-native-gesture-handler'
import StackNavigator from './router/StackNavigator';
import TabNavigator from './router/TabNavigator';
import AuthNavigator from './router/Auth';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import Router from './router/Router';

const App = () => {
  return (

   <NavigationContainer>
      <Router />
    {/* <StackNavigator />  */}
   </NavigationContainer>
    
  );
};

export default App;
