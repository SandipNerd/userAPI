import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UserDetailScreen from '../screens/UserDetailScreen';
import UserListScreen from '../screens/UserListScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="userList" component={UserListScreen} />
      <HomeStack.Screen name="userDetail" component={UserDetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
