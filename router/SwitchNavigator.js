
createSwitchNavigator

import { createStackNavigator,createSwitchNavigator } from '@react-navigation/stack';
import LoginPage from '../component/LoginPage'
import RegisterPage from '../component/RegisterPage'
import MainTab from './TabNavigator';


const AuthStack = createStackNavigator({
    LoginPage: {
      screen: LoginPage,
      navigationOptions: {
        header: null
      },
    },
    RegisterPage:{
        screen: RegisterPage,
        navigationOptions:{
            header:null
        }
    }
  });

const AppStack = createSwitchNavigator({
    Home:{
        screen: MainTab,
        navigationOptions:{
            header:null
        }
    },
    FindJobsByName:{
        screen: FindJobsByName,
        navigationOptions:{
            header:null
        }
    }
});
function SwitchNavigator(props) {
    return (
        createSwitchNavigator(
            {
                App: AppStack,
                Auth: AuthStack,
            },
            {
              initialRouteName: 'Auth',
            }
        )
    );
}

export default SwitchNavigator;