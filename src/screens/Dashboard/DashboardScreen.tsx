// src/screens/Dashboard/DashboardScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const DashboardScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
    </View>
  );
};

export default DashboardScreen;
