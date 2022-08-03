import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {GuestStackParamList} from '../types';
import {LoginScreen} from '../screens';

const GuestStack = createNativeStackNavigator<GuestStackParamList>();

export function GuestStackNavigator() {
  return (
    <GuestStack.Navigator screenOptions={{headerShown: true}}>
      <GuestStack.Screen name="Login" component={LoginScreen} />
    </GuestStack.Navigator>
  );
}
