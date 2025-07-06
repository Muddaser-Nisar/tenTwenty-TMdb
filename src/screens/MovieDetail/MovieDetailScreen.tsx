import { Text, View } from 'react-native';
import React from 'react';
import { colors } from 'utils';
import { Header } from 'components';

const MovieDetailScreen = () => {
  return (
    <View>
      <Text>MovieDetailScreen</Text>
      <Header textStyle={{ color: colors.fadeBlack }} title="WATCHHH" />
    </View>
  );
};

export default MovieDetailScreen;
