import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Routes_Names } from '../Routes';
import TabNavigator from '../bottomBar/BottomTabBar';
import { MovieDetailScreen } from 'screens';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Routes_Names.MainScreens.Tabs}
    >
      <Stack.Screen
        name={Routes_Names.MainScreens.Tabs}
        component={TabNavigator}
      />
      <Stack.Screen
        name={Routes_Names.MovieBookingScreens.MovieDetails}
        component={MovieDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
