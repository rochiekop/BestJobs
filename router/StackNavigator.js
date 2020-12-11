import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../components/LoginPage'

import FindJobsByName from '../components/FindJobsByName'
import FindJobsByNameResultFalse from '../components/FindJobsByNameResultFalse'
import FindJobsByNameResultTrue from '../components/FindJobsByNameResultTrue'
import DetailJobsByName from '../components/DetailJobsByName';

import FindJobsBySkillsResultFalse from '../components/FindJobsBySkillsResultFalse'
import FindJobsBySkillsResultTrueDetail from '../components/FindJobsBySkillsResultTrueDetail'

const Stack = createStackNavigator();
function StackNavigator(props) {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name="FindJobsByName" 
            component={FindJobsByName} 
            options={{headerShown: false }}
            />
            <Stack.Screen 
            name="FindJobsByNameResultFalse" 
            component={FindJobsByNameResultFalse} 
            options={{headerShown: false }}
            />
            <Stack.Screen 
            name="FindJobsByNameResultTrue" 
            component={FindJobsByNameResultTrue} 
            options={{headerShown: false }}
            />
            <Stack.Screen 
            name="DetailJobsByName" 
            component={DetailJobsByName} 
            options={{headerShown: false }}
            />
            <Stack.Screen 
            name="FindJobsBySkillsResultFalse" 
            component={FindJobsBySkillsResultFalse} 
            options={{headerShown: false }}
            />
            <Stack.Screen 
            name="FindJobsBySkillsResultTrueDetail" 
            component={FindJobsBySkillsResultTrueDetail} 
            options={{headerShown: false }}
            />
            <Stack.Screen 
            name="LoginPage" 
            component={LoginPage} 
            options={{headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;