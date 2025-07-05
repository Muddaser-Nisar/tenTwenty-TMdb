import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'utils/constants/dimensions';
import { colors } from 'utils';

const Loader = () => {
  return (
    <View style={styles.mainContainer}>
      <ActivityIndicator size="large" color={colors.tabColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
});

export default Loader;
