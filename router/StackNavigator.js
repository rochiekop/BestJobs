import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';

import LoginPage2 from '../components/LoginPage'

import FindJobsByName from '../components/FindJobsByName'
import FindJobsByNameResultFalse from '../components/FindJobsByNameResultFalse'
import FindJobsByNameResultTrue from '../components/FindJobsByNameResultTrue'
import DetailJobsByName from '../components/DetailJobsByName';

import FindJobsBySkillsResultFalse from '../components/FindJobsBySkillsResultFalse'
import FindJobsBySkillsResultTrueDetail from '../components/FindJobsBySkillsResultTrueDetail'

import LoginPage from '../component/LoginPage'
import RegisterPage from '../component/RegisterPage'
import MainTab from './TabNavigator';

import FindJobsBySkills from '../component/FindJobs'


const Stack = createStackNavigator();
function StackNavigator(props) {

    return (
        
          <Stack.Navigator>
          <Stack.Screen 
            name="LoginPage" 
            component={LoginPage} 
            options={
              {
              headerShown: false,
              transitionSpec: {
                open: TransitionPresets.ScaleFromCenterAndroid,
                close: TransitionPresets.ScaleFromCenterAndroid,
              },
            
          }}
            />
          <Stack.Screen 
            name="RegisterPage" 
            component={RegisterPage} 
            options={{headerShown: false,
              transitionSpec: {
                open: TransitionPresets.ScaleFromCenterAndroid,
                close: TransitionPresets.ScaleFromCenterAndroid,
              },
            }}
            />
            <Stack.Screen 
            name="Home" 
            component={MainTab} 
            options={{headerShown: false }}
            />
            <Stack.Screen 
            name="FindJobsBySkills" 
            component={FindJobsBySkills} 
            options={{headerShown: false,
              transitionSpec: {
                open: TransitionPresets.ModalTransition,
                close: TransitionPresets.ModalTransition,
              }
            }}
            />
            <Stack.Screen 
            name="FindJobsBySkillsResultFalse" 
            component={FindJobsBySkillsResultFalse} 
            options={{headerShown: false,
              transitionSpec: {
                open: TransitionPresets.ModalTransition,
                close: TransitionPresets.ModalTransition,
              }
            }}
            />
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
            name="FindJobsBySkillsResultTrueDetail" 
            component={FindJobsBySkillsResultTrueDetail} 
            options={{headerShown: false }}
            />
            
          </Stack.Navigator>
       
        
    );
}

export default StackNavigator;