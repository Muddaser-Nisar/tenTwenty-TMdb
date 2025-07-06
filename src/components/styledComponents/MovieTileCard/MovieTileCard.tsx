import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { UpcomingMovie } from 'types';
import { colors, scale } from 'utils';
import { Icon, IconNames } from '../Icon';
import Config from 'react-native-config';
import FastImage from 'react-native-fast-image';
import { CustomText } from '../CustomText';
import { h1M } from 'theme';

type Props = {
  movie: UpcomingMovie;
};

export const MovieTileCard: React.FC<Props> = ({ movie }) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: `${Config.IMAGE_BASE}${movie.poster_path}`,
          priority: FastImage.priority.high,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <CustomText.TextComponent
          customStyle={styles.title}
          typographyStyle={h1M}
          numberOfLines={1}
        >
          {movie.title}
        </CustomText.TextComponent>
        <CustomText.TextComponent customStyle={styles.genre}>
          {movie.popularity ?? 'Unknown'}
        </CustomText.TextComponent>
      </View>
      <Icon.component name={IconNames.menuIcon} size={Icon.iconSizes.SMALL} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: scale(15),
    alignItems: 'center',
  },
  image: {
    width: scale(130),
    height: scale(100),
    borderRadius: scale(8),
    marginRight: scale(10),
  },
  info: {
    flex: 1,
  },
  title: {
    color: colors.fadeBlack,
  },
  genre: {
    fontSize: 13,
    color: colors.fadeBlack,
    marginTop: scale(4),
  },
});
