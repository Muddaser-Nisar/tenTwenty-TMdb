import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { GenreWithPoster } from 'types';
import styles from './styles';
import { scale } from 'utils';
import { CustomText } from '../CustomText';
import { h1M } from 'theme';
import Config from 'react-native-config';

interface GenereCardProps {
  genere: GenreWithPoster;
  height?: number;
}

const GenereCardComponent: React.FC<GenereCardProps> = ({
  genere,
  height = scale(100),
}) => {
  return (
    <View style={[styles.card, { height }]}>
      <FastImage
        source={{ uri: `${Config.IMAGE_BASE}${genere.poster_path}` }}
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.titleContainer}>
        <CustomText.TextComponent
          numberOfLines={1}
          typographyStyle={h1M}
          customStyle={styles.title}
        >
          {genere.name}
        </CustomText.TextComponent>
      </View>
    </View>
  );
};

export const GenereCard = React.memo(GenereCardComponent);
