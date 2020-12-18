import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FindJobsBySkills from '../component/FindJobs'
import FindJobsBySkills2 from '../components/FIndJobsBySkill'
import FindJobsBySkillsResultFalse from '../components/FindJobsBySkillsResultFalse'
import FindJobsBySkillsResultTrueDetail from '../components/FindJobsBySkillsResultTrueDetail'


const Stack = createStackNavigator();
function JobsBySkillNavigator(props) {
createStackNavigator
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="FindJobsBySkills" 
            component={FindJobsBySkills} 
            // component={FindJobsBySkills2} 
            options={
              {headerShown: false}
            }
            />
            <Stack.Screen 
            name="FindJobsBySkillsResultFalse" 
            component={FindJobsBySkillsResultFalse} 
            options={
              {headerShown: false}
            }
            />
            <Stack.Screen 
            name="FindJobsBySkillsResultTrue" 
            component={FindJobsBySkillsResultTrueDetail} 
            options={
              {headerShown: false}
            }
            />
        </Stack.Navigator>
    );
}

export default JobsBySkillNavigator;