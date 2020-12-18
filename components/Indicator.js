import React from 'react';
import auth from '@react-native-firebase/auth'
import { ActivityIndicator, View } from 'react-native';

function Indicator({navigation}) {
    if(auth().currentUser){
        navigation.replace('Home');
    }else{
        navigation.replace('LoginPage');
    }
    return (
        
        <View>
            <ActivityIndicator 
                    />
        </View>
        
    );
}

export default Indicator;