import React, { useCallback, useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { colors } from 'utils';
import { useAppDispatch } from 'redux/store';
import { useAppSelector } from 'redux/hooks';
import { fetchUpcomingMovies } from 'redux/apis';
import { UpcomingMovie } from 'types';
import Loader from 'components/Loader';
import { CustomText, Icon, IconNames, MovieCard } from 'components';
import { h1M } from 'theme';
import styles from './styles';
import { navigate, Routes_Names } from 'navigation';

const WatchScreen = () => {
  const dispatch = useAppDispatch();
  const { upcomingMovies, loading, error } = useAppSelector(
    state => state.movieReducer,
  );

  useEffect(() => {
    dispatch(fetchUpcomingMovies()); //call the upcoming movies List
  }, [dispatch]);

  //render item which pass the item to the component
  const renderItem = useCallback(
    ({ item }: { item: UpcomingMovie }) => (
      <MovieCard
        movie={item}
        onPress={() =>
          navigate(Routes_Names.MovieBookingScreens.MovieDetails, {
            movieId: item.id,
          })
        }
      />
    ),
    [],
  );

  if (loading) return <Loader />;
  if (error)
    return (
      <CustomText.TextComponent customStyle={styles.error}>
        {error}
      </CustomText.TextComponent>
    );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topHeader}>
        <CustomText.TextComponent
          typographyStyle={h1M}
          customStyle={{ color: colors.fadeBlack }}
        >
          Watch
        </CustomText.TextComponent>

        <Icon.component
          name={IconNames.searchIcon}
          size={Icon.iconSizes.MEDIUM}
          onPress={() => navigate(Routes_Names.MovieBookingScreens.Search)}
        />
      </View>
      <FlatList
        data={upcomingMovies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

export default WatchScreen;
