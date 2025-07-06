import React from 'react';
import { Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { UpcomingMovie } from 'types';
import styles from './styles';
import { scale } from 'utils';
import { CustomText } from '../CustomText';
import { h1M } from 'theme';
import Config from 'react-native-config';

interface MovieCardProps {
  movie: UpcomingMovie;
  height?: number;
  onPress?: () => void; //<--add onPress
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  height = scale(180),
  onPress,
}) => {
  return (
    <Pressable style={[styles.card, { height }]} onPress={onPress}>
      <FastImage
        source={{
          uri: `${Config.IMAGE_BASE}${movie.poster_path}`,
          priority: FastImage.priority.high,
        }}
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.titleContainer}>
        <CustomText.TextComponent
          numberOfLines={1}
          typographyStyle={h1M}
          customStyle={styles.title}
        >
          {movie.title}
        </CustomText.TextComponent>
      </View>
    </Pressable>
  );
};
