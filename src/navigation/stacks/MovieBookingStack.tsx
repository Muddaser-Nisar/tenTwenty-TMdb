import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Routes_Names } from '../Routes';
import { SearchScreen, WatchScreen } from 'screens';

const Stack = createNativeStackNavigator();
const MovieBookingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Routes_Names.MovieBookingScreens.Watch}
    >
      <Stack.Screen
        name={Routes_Names.MovieBookingScreens.Watch}
        component={WatchScreen}
      />
      <Stack.Screen
        name={Routes_Names.MovieBookingScreens.Search}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default MovieBookingStack;
