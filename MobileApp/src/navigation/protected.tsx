import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProtectedStackParamList} from '../types';

import BottomTabs from './tabs';
import {LoginScreen} from '../screens';

const ProtectedStack = createNativeStackNavigator<ProtectedStackParamList>();

function Tabs() {
  return <BottomTabs />;
}
export function ProtectedStackNavigator() {
  return (
    <ProtectedStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeStack">
      <ProtectedStack.Screen
        name="HomeStack"
        options={{headerShown: false}}
        component={BottomTabs}
      />
    </ProtectedStack.Navigator>
  );
}
