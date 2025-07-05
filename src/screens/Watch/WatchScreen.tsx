import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { navigate, Routes_Names } from 'navigation';

const WatchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        onPress={() => {
          navigate(Routes_Names.MovieBookingScreens.Search);
        }}
      >
        Watch screen
      </Text>
    </View>
  );
};

export default WatchScreen;
