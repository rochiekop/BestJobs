import React from 'react';

import TabNavigator from './TabNavigator';
import AuthNavigator from './Auth';
import JobsBySkillNavigator from './JobsBySkillNavigator';
import JobsByNameNavigator from './JobsByNameNavigator';
import JobsResultNavigator from './JobResultNavigator';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth'
const Stack = createStackNavigator();
function Router(props) {

    return (
        <Stack.Navigator
        initialRouteName={(auth().currentUser) ? 'Home' : 'Auth'}
        >
            <Stack.Screen 
                name="Auth"
                component={AuthNavigator}
                options={
                    {headerShown: false}
                }
            />
            <Stack.Screen 
                name="Home"
                component={TabNavigator}
                options={
                    {headerShown: false,
                       
                    }
                }
            />
            <Stack.Screen 
                name="JobsBySkill"
                component={JobsBySkillNavigator}
                options={
                    {headerShown: false}
                }
            />
            <Stack.Screen 
                name="JobsByName"
                component={JobsByNameNavigator}
                options={
                    {headerShown: false}
                }
            />
            <Stack.Screen 
                name="JobsResult"
                component={JobsResultNavigator}
                options={
                    {headerShown: false}
                }
            />
        </Stack.Navigator>
    );
}

export default Router;