import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchMovieDetail } from 'redux/apis';
import useMovieTrailer from './hooks/useMovieTrailer';
import YoutubePlayer from 'react-native-youtube-iframe';
import { colors } from 'utils';
import Config from 'react-native-config';
import { CustomText, Header } from 'components';
import { h1M, h2Style, h3Style } from 'theme';
import Loader from 'components/Loader';
import styles from './styles';
import { navigate, Routes_Names } from 'navigation';

const MovieDetailScreen = () => {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const { movieId } = route.params as { movieId: number };

  const { trailer } = useMovieTrailer(movieId);

  const { movieDetail, loading } = useAppSelector(
    state => state.movieDetailReducer,
  );

  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [movieId, dispatch]);

  const handleWatchTrailer = () => {
    if (trailer) {
      setShowPlayer(true);
    } else {
      Alert.alert('No trailer available');
    }
  };

  const closePlayer = () => setShowPlayer(false);

  if (loading || !movieDetail) {
    return <Loader />;
  }
  const genreColors = [
    colors.lightOrange,
    colors.lightRed,
    colors.lightDark,
    colors.goldenColor,
  ];

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri: `${Config.IMAGE_BASE}${movieDetail.backdrop_path}`,
        }}
        style={styles.poster}
      >
        <Header title="Watch" textStyle={{ color: colors.white }} />
        <View style={styles.overlay}>
          <CustomText.TextComponent
            customStyle={styles.title}
            typographyStyle={h1M}
          >
            {movieDetail.title}
          </CustomText.TextComponent>
          <CustomText.TextComponent
            typographyStyle={h1M}
            customStyle={styles.release}
          >
            In Theaters {movieDetail.release_date}
          </CustomText.TextComponent>

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => {
              navigate(Routes_Names.MovieBookingScreens.SeatMaping);
            }}
          >
            <CustomText.TextComponent
              typographyStyle={h3Style}
              customStyle={styles.primaryText}
            >
              Get Tickets
            </CustomText.TextComponent>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={handleWatchTrailer}
          >
            <CustomText.TextComponent
              typographyStyle={h3Style}
              customStyle={styles.secondaryText}
            >
              ▶ Watch Trailer
            </CustomText.TextComponent>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.genresWrapper}>
        <CustomText.TextComponent
          typographyStyle={h3Style}
          customStyle={styles.sectionTitle}
        >
          Genres
        </CustomText.TextComponent>
        <View style={styles.genres}>
          {movieDetail.genres.map((genre, index) => {
            const backgroundColor = genreColors[index % genreColors.length];
            return (
              <CustomText.TextComponent
                key={genre.id}
                customStyle={[styles.genreTag, { backgroundColor }]}
              >
                {genre.name}
              </CustomText.TextComponent>
            );
          })}
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.overviewWrapper}>
        <CustomText.TextComponent
          typographyStyle={h3Style}
          customStyle={styles.sectionTitle}
        >
          Overview
        </CustomText.TextComponent>
        <CustomText.TextComponent
          typographyStyle={h2Style}
          customStyle={styles.overview}
        >
          {movieDetail.overview}
        </CustomText.TextComponent>
      </View>

      {/* Trailer Modal */}
      <Modal visible={showPlayer} animationType="slide">
        <View style={styles.videoPlayer}>
          <YoutubePlayer
            height={300}
            play={true}
            videoId={trailer?.key}
            onChangeState={state => {
              if (state === 'ended') {
                closePlayer();
              }
            }}
          />
          <TouchableOpacity style={styles.doneBtn} onPress={closePlayer}>
            <CustomText.TextComponent customStyle={styles.doneText}>
              Done
            </CustomText.TextComponent>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default MovieDetailScreen;
