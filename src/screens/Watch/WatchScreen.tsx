import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { navigate, Routes_Names } from 'navigation';
import Config from 'react-native-config';

const WatchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        onPress={() => {
          navigate(Routes_Names.MovieBookingScreens.Search);
        }}
      >
        Watch screen {Config.BASE_URL}
      </Text>
    </View>
  );
};

export default WatchScreen;
