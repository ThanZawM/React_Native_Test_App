import React from 'react';
import {Button, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from './app/components/Screen';
import ListingsScreen from './app/screens/ListingsScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListEditScreen from './app/screens/ListEditScreen';
import AuthNavigation from './app/navigation/AuthNavigation';
import AppNavigator from './app/navigation/AppNavigator';

const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="Click"
      onPress={() => navigation.navigate('TweetDetails', {id: 1})}
    />
  </Screen>
);

const TweetDetails = ({route}) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Account = () => {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: 'grey',
      inactiveTintColor: 'black',
    }}>
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

const FeedNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      //activeBackgroundColor: 'white',
      activeTintColor: 'tomato',
      //inactiveBackgroundColor: 'black',
      inactiveTintColor: 'grey',
    }}>
    <Tab.Screen
      name="Feed"
      component={ListingsScreen}
      options={{
        tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="ListEdit" component={ListEditScreen} />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({size, color}) => (
          <FontAwesome name="user" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: 'tomato'},
      headerTitleAlign: 'center',
      headerTintColor: 'white',
      headerShown: true,
    }}>
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: {backgroundColor: 'dodgerblue'},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({route}) => ({title: route.params.id})}
    />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
