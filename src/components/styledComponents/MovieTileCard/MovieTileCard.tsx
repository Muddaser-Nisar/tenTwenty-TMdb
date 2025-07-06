import React from 'react';
import { View } from 'react-native';
import { UpcomingMovie } from 'types';
import { Icon, IconNames } from '../Icon';
import Config from 'react-native-config';
import FastImage from 'react-native-fast-image';
import { CustomText } from '../CustomText';
import { h1M } from 'theme';
import styles from './styles';

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
        <CustomText.TextComponent
          typographyStyle={h1M}
          customStyle={styles.genre}
        >
          {movie.title ?? 'Unknown'}
        </CustomText.TextComponent>
      </View>
      <Icon.component name={IconNames.menuIcon} size={Icon.iconSizes.SMALL} />
    </View>
  );
};
