import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Routes_Names } from '../Routes';
import { DashboardScreen, MediaScreen, MoreScreen } from 'screens';
import CustomTabBar from './CustomTabBar';
import MovieBookingStack from 'navigation/stacks/MovieBookingStack';

const Tab = createBottomTabNavigator();

const renderCustomTabBar = (props: BottomTabBarProps) => (
  <CustomTabBar {...props} />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Watch"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={renderCustomTabBar}
    >
      <Tab.Screen
        name={Routes_Names.MainScreens.Dashboard}
        component={DashboardScreen}
      />
      <Tab.Screen
        name={Routes_Names.MovieBookingScreens.Watch}
        component={MovieBookingStack}
      />
      <Tab.Screen
        name={Routes_Names.MainScreens.Media}
        component={MediaScreen}
      />
      <Tab.Screen name={Routes_Names.MainScreens.More} component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
