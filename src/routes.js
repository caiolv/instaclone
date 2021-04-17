import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from './assets/instagram.png';

import Feed from './pages/Feed';

const Stack = createStackNavigator();

const LogoTitle = () => <Image source={logo} />;

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
                backgroundColor: '#f5f5f5'
            }
        }}>
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;