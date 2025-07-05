import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Routes_Names } from '../Routes';
import TabNavigator from '../bottomBar/BottomTabBar';

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
    </Stack.Navigator>
  );
};

export default MainStack;
