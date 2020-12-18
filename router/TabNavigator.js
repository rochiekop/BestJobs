import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Home from '../component/Home';
import JobOption from '../component/JobOption';
import Profile from '../component/Profile';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();
function TabNavigator(props) {
    return (
        <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: '#000',
            showLabel:false
          }}
        
        >
            <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size, focused }) => (
                            focused ?  <Icon name="home" color={color} size={size} /> : <Icon name="home-outline" color={color} size={size} />
                        
                        ),
                    }}
            />
            <Tab.Screen name="JobOption" component={JobOption} 
                options={{
                    tabBarLabel: 'Job',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?  <Icon name="briefcase" color={color} size={size} /> : <Icon name="briefcase-outline" color={color} size={size} />
                    
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?  <IconFA name="user" color={color} size={size} /> : <IconFA name="user-o" color={color} size={size} />
                    
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;