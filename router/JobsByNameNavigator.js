import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FindJobsByName from '../components/FindJobsByName'
import FindJobsByNameResultFalse from '../components/FindJobsByNameResultFalse'
import FindJobsByNameResultTrue from '../components/FindJobsByNameResultTrue'


const Stack = createStackNavigator();
function JobsByNameNavigator(props) {
createStackNavigator
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="FindJobsByName" 
            component={FindJobsByName} 
            options={
              {headerShown: false}
            }
            />
            <Stack.Screen 
            name="FindJobsByNameResultFalse" 
            component={FindJobsByNameResultFalse} 
            options={
              {headerShown: false}
            }
            />
            <Stack.Screen 
            name="FindJobsByNameResultTrue" 
            component={FindJobsByNameResultTrue} 
            options={
              {headerShown: false}
            }
            />
        </Stack.Navigator>
    );
}

export default JobsByNameNavigator;