import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import MessagesScreen from '../screens/MessagesScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerTitleAlign: 'center'}}
    tabBarOptions={{
      //activeBackgroundColor: 'white',
      activeTintColor: 'tomato',
      //inactiveBackgroundColor: 'black',
      inactiveTintColor: 'grey',
    }}>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
