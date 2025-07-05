import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigationRef } from './navigationService';
import MainStack from './stacks/MainStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomStatusBar } from 'components';
import { colors } from 'utils';

// Render the appropriate navigator based on authentication state
const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export type StackProps = NativeStackScreenProps<{}>;

export default AppNavigation;
