import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { colors } from 'utils';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchGenresWithPosters } from 'redux/apis';
import { GenreWithPoster, UpcomingMovie } from 'types';
import Loader from 'components/Loader';
import {
  GenereCard,
  CustomText,
  Icon,
  IconNames,
  MovieTileCard,
} from 'components';
import useMovieSearch from './hooks/useMovieSearch';
import { h1M } from 'theme';
import styles from './styles';

const SearchScreen = () => {
  const dispatch = useAppDispatch();
  const { genres, loading } = useAppSelector(state => state.genereReducer);

  const [query, setQuery] = useState('');
  const { searchResults, loading: searchLoading } = useMovieSearch(query);

  useEffect(() => {
    dispatch(fetchGenresWithPosters());
  }, [dispatch]);

  const renderGenreItem = useCallback(
    ({ item }: { item: GenreWithPoster }) => (
      <View style={styles.cardWrapper}>
        <GenereCard genere={item} />
      </View>
    ),
    [],
  );

  const renderMovieItem = ({ item }: { item: UpcomingMovie }) => (
    <MovieTileCard movie={item} />
  );

  const isSearchMode = query.length > 0;
  const clearQuery = useCallback(() => setQuery(''), []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.inputWrapper}>
        <Icon.component
          name={IconNames.searchIcon}
          size={Icon.iconSizes.MEDIUM}
          color={colors.fadeBlack}
        />
        <TextInput
          placeholder="Search for movies"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          placeholderTextColor={colors.placeHolderColor}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={clearQuery}>
            <Icon.component
              name={IconNames.crossIcon}
              size={Icon.iconSizes.SMALL}
              color={colors.fadeBlack}
            />
          </TouchableOpacity>
        )}
      </View>
      {isSearchMode ? (
        searchLoading ? (
          <Loader />
        ) : (
          <FlatList
            key="movieList"
            data={searchResults}
            renderItem={renderMovieItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.list}
            ListHeaderComponent={
              searchResults.length > 0 ? (
                <CustomText.TextComponent
                  typographyStyle={h1M}
                  customStyle={styles.headerText}
                >
                  Top Results
                </CustomText.TextComponent>
              ) : null
            }
            ListEmptyComponent={
              <CustomText.TextComponent style={styles.noResult}>
                No results found
              </CustomText.TextComponent>
            }
          />
        )
      ) : (
        <FlatList
          key="genreList"
          data={genres}
          renderItem={renderGenreItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={
            <CustomText.TextComponent customStyle={styles.noResult}>
              No Category available
            </CustomText.TextComponent>
          }
        />
      )}
      {loading && <Loader />}
    </SafeAreaView>
  );
};

export default SearchScreen;
