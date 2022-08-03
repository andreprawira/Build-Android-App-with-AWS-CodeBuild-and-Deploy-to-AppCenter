import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabNavigatorParamList} from '../types';
import {ReportScreen, MessageScreen, ProfileScreen} from '../screens';
import {IconChat, IconProfile, Iconreport} from '../assets';
import {StyleSheet} from 'react-native';
import {Colors} from '../theme';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const iconUnSelectedSize = {
  width: 24,
  height: 24,
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.white,
        tabBarInActiveTintColor: Colors.primary[0.5],
        tabBarStyle: styles.tab,
      })}
      initialRouteName="Report">
      <Tab.Screen
        name="Report"
        component={ReportScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'Report',
          tabBarIcon: ({color, size, focused}) => (
            <Iconreport
              color={focused ? Colors.white : Colors.primary[0.5]}
              {...iconUnSelectedSize}
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size, focused}) => (
            <IconChat
              color={focused ? Colors.white : Colors.primary[0.5]}
              {...iconUnSelectedSize}
            />
          ),
        }}
        name="Message"
        component={MessageScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: true,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size, focused}) => (
            <IconProfile
              color={focused ? Colors.white : Colors.primary[0.5]}
              {...iconUnSelectedSize}
            />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tab: {
    height: 90,
    paddingHorizontal: 5,
    paddingTop: 0,
    backgroundColor: Colors.primary[1],
    position: 'absolute',
    borderTopWidth: 0,
  },
});
