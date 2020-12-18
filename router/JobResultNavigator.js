import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailJobsByName from '../components/DetailJobsByName'
import HardskillContent from '../components/HardskillContent'
import HardskillContent2 from '../components/HardskillContent2'
import HardskillContentDetail from '../components/HardskillContentDetail'

import WhyContent from '../components/WhyContent';

import SoftskillContent from '../components/SoftskillContent';
import SoftskillContentDetail from '../components/SoftskillContentDetail';

import BottomLineContent from '../components/BottomLineContent';

const Stack = createStackNavigator();
function JobsResultNavigator(props) {
createStackNavigator
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="DetailJobs" 
            component={DetailJobsByName} 
            options={
              {headerShown: false}
            }
            />
            <Stack.Screen 
            name="HardskillContent" 
            // component={HardskillContent} 
            component={HardskillContent2} 
            options={
              {headerShown: false}
            }
            />
            <Stack.Screen 
            name="HardskillContentDetail" 
            // component={HardskillContent} 
            component={HardskillContentDetail} 
            options={
              {headerShown: false}
            }
            />
          <Stack.Screen 
            name="WhyContent" 
            // component={HardskillContent} 
            component={WhyContent} 
            options={
              {headerShown: false}
            }
            />
            <Stack.Screen 
            name="SoftskillContent" 
            // component={HardskillContent} 
            component={SoftskillContent} 
            options={
              {headerShown: false}
            }
            />
            <Stack.Screen 
            name="SoftskillContentDetail" 
            // component={HardskillContent} 
            component={SoftskillContentDetail} 
            options={
              {headerShown: false}
            }
            />
            <Stack.Screen 
            name="BottomLineContent" 
            // component={HardskillContent} 
            component={BottomLineContent} 
            options={
              {headerShown: false}
            }
            />
        </Stack.Navigator>
    );
}

export default JobsResultNavigator;