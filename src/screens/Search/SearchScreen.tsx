// // import React, { useEffect, useState } from 'react';
// // import {
// //   FlatList,
// //   SafeAreaView,
// //   TextInput,
// //   View,
// //   StyleSheet,
// // } from 'react-native';
// // import { colors, scale } from 'utils';
// // import { useAppDispatch, useAppSelector } from 'redux/hooks';
// // import { fetchGenresWithPosters } from 'redux/apis';
// // import { GenreWithPoster, UpcomingMovie } from 'types';
// // // import { searchMovies } from 'services/apiClient';
// // import Loader from 'components/Loader';
// // import { GenereCard, MovieCard, CustomText } from 'components';

// // const SearchScreen = () => {
// //   const dispatch = useAppDispatch();
// //   const { genres, loading } = useAppSelector(state => state.genereReducer);

// //   const [query, setQuery] = useState('');
// //   const [searchResults, setSearchResults] = useState<UpcomingMovie[]>([]);
// //   const [searchLoading, setSearchLoading] = useState(false);

// //   useEffect(() => {
// //     dispatch(fetchGenresWithPosters());
// //   }, [dispatch]);

// //   // const handleSearch = async (text: string) => {
// //   //   setQuery(text);
// //   //   if (text.length === 0) {
// //   //     setSearchResults([]);
// //   //     return;
// //   //   }

// //   //   setSearchLoading(true);
// //   //   try {
// //   //     const res = await searchMovies(text); // custom API wrapper
// //   //     setSearchResults(res.results || []);
// //   //   } catch (error) {
// //   //     console.error('Search error:', error);
// //   //     setSearchResults([]);
// //   //   } finally {
// //   //     setSearchLoading(false);
// //   //   }
// //   // };

// //   const renderGenreItem = ({ item }: { item: GenreWithPoster }) => (
// //     <GenereCard genere={item} />
// //   );

// //   const renderMovieItem = ({ item }: { item: UpcomingMovie }) => (
// //     <MovieCard movie={item} />
// //   );
// //   console.log('generes', genres);

// //   return (
// //     <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
// //       <View style={styles.inputWrapper}>
// //         <TextInput
// //           placeholder="Search for a movies"
// //           value={query}
// //           // onChangeText={handleSearch}
// //           style={styles.input}
// //         />
// //       </View>

// //       {query.length === 0 ? (
// //         loading ? (
// //           <Loader />
// //         ) : (
// //           // <FlatList
// //           //   data={genres}
// //           //   numColumns={2}
// //           //   renderItem={({ item, index }) => {
// //           //     const isLeft = index % 2 === 0;

// //           //     return (
// //           //       <View
// //           //         style={{
// //           //           flex: 1,
// //           //           marginRight: isLeft ? scale(6) : 0,
// //           //           marginLeft: isLeft ? 0 : scale(6),
// //           //           marginBottom: scale(12),
// //           //         }}
// //           //       >
// //           //         <GenereCard genere={item} />
// //           //       </View>
// //           //     );
// //           //   }}
// //           //   keyExtractor={item => item.id.toString()}
// //           //   contentContainerStyle={{
// //           //     paddingHorizontal: scale(12),
// //           //     paddingVertical: scale(16),
// //           //   }}
// //           //   ListEmptyComponent={
// //           //     <CustomText.TextComponent style={styles.noResult}>
// //           //       No Category available
// //           //     </CustomText.TextComponent>
// //           //   }
// //           // />
// //           <FlatList
// //             data={genres}
// //             renderItem={({ item }) => (
// //               <View style={styles.cardWrapper}>
// //                 <GenereCard genere={item} />
// //               </View>
// //             )}
// //             keyExtractor={item => item.id.toString()}
// //             numColumns={2}
// //             columnWrapperStyle={styles.row}
// //             contentContainerStyle={styles.contentContainer}
// //           />
// //         )
// //       ) : searchLoading ? (
// //         <Loader />
// //       ) : (
// //         <FlatList
// //           data={searchResults}
// //           renderItem={renderMovieItem}
// //           keyExtractor={item => item.id.toString()}
// //           contentContainerStyle={styles.list}
// //           ListEmptyComponent={
// //             <CustomText.TextComponent style={styles.noResult}>
// //               No results found
// //             </CustomText.TextComponent>
// //           }
// //         />
// //       )}
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   inputWrapper: {
// //     padding: scale(14),
// //     backgroundColor: colors.secondaryBackgroundColor,
// //   },
// //   input: {
// //     backgroundColor: colors.white,
// //     padding: scale(10),
// //     borderRadius: scale(10),
// //     fontSize: 16,
// //   },
// //   list: {
// //     padding: scale(12),
// //   },
// //   noResult: {
// //     textAlign: 'center',
// //     marginTop: 50,
// //     fontSize: 16,
// //     color: colors.fadeBlack,
// //   },

// //   contentContainer: {
// //     paddingHorizontal: scale(12),
// //     paddingBottom: scale(16),
// //     backgroundColor: colors.white,
// //   },
// //   row: {
// //     justifyContent: 'space-between',
// //     marginBottom: scale(12),
// //   },
// //   cardWrapper: {
// //     flex: 0.488, // Use less than 0.5 to give spacing between columns
// //   },
// // });

// // export default SearchScreen;

// import React, { useEffect, useState } from 'react';
// import {
//   FlatList,
//   SafeAreaView,
//   TextInput,
//   View,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import { colors, scale } from 'utils';
// import { useAppDispatch, useAppSelector } from 'redux/hooks';
// import { fetchGenresWithPosters } from 'redux/apis';
// import { GenreWithPoster, UpcomingMovie } from 'types';
// import Loader from 'components/Loader';
// import { GenereCard, MovieCard, CustomText, Icon, IconNames } from 'components';
// import useMovieSearch from './hooks/useMovieSearch';

// const SearchScreen = () => {
//   const dispatch = useAppDispatch();
//   const { genres, loading } = useAppSelector(state => state.genereReducer);

//   const [query, setQuery] = useState('');
//   const { searchResults, loading: searchLoading } = useMovieSearch(query);

//   useEffect(() => {
//     dispatch(fetchGenresWithPosters());
//   }, [dispatch]);

//   const renderGenreItem = ({ item }: { item: GenreWithPoster }) => (
//     <View style={styles.cardWrapper}>
//       <GenereCard genere={item} />
//     </View>
//   );

//   const renderMovieItem = ({ item }: { item: UpcomingMovie }) => (
//     <MovieCard movie={item} />
//   );

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
//       <View style={styles.inputWrapper}>
//         <Icon.component
//           name={IconNames.searchIcon}
//           size={Icon.iconSizes.MEDIUM}
//           color={colors.fadeBlack}
//         />
//         <TextInput
//           placeholder="Search for movies"
//           value={query}
//           onChangeText={setQuery}
//           style={styles.input}
//           placeholderTextColor={colors.fadeBlack}
//         />
//         {query.length > 0 && (
//           <TouchableOpacity onPress={() => setQuery('')}>
//             <Icon.component
//               name={IconNames.crossIcon}
//               size={Icon.iconSizes.SMALL}
//               color={colors.fadeBlack}
//             />
//           </TouchableOpacity>
//         )}
//       </View>

//       {query.length === 0 ? (
//         <FlatList
//           key="genreList" // force remount
//           data={genres}
//           renderItem={({ item }) => (
//             <View style={styles.cardWrapper}>
//               <GenereCard genere={item} />
//             </View>
//           )}
//           keyExtractor={item => item.id.toString()}
//           numColumns={2}
//           columnWrapperStyle={styles.row}
//           contentContainerStyle={styles.contentContainer}
//           ListEmptyComponent={
//             <CustomText.TextComponent style={styles.noResult}>
//               No Category available
//             </CustomText.TextComponent>
//           }
//         />
//       ) : (
//         <FlatList
//           key="movieList" //  different key
//           data={searchResults}
//           renderItem={({ item }) => <MovieCard movie={item} />}
//           keyExtractor={item => item.id.toString()}
//           contentContainerStyle={styles.list}
//           ListEmptyComponent={
//             <CustomText.TextComponent style={styles.noResult}>
//               No results found
//             </CustomText.TextComponent>
//           }
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: scale(14),
//     paddingVertical: scale(10),
//     backgroundColor: colors.secondaryBackgroundColor,
//     gap: scale(10),
//   },
//   input: {
//     flex: 1,
//     backgroundColor: colors.white,
//     paddingVertical: scale(8),
//     paddingHorizontal: scale(10),
//     borderRadius: scale(10),
//     fontSize: 16,
//     color: colors.fadeBlack,
//   },
//   list: {
//     padding: scale(12),
//   },
//   noResult: {
//     textAlign: 'center',
//     marginTop: 50,
//     fontSize: 16,
//     color: colors.fadeBlack,
//   },
//   contentContainer: {
//     paddingHorizontal: scale(12),
//     paddingBottom: scale(16),
//     backgroundColor: colors.white,
//   },
//   row: {
//     justifyContent: 'space-between',
//     marginBottom: scale(12),
//   },
//   cardWrapper: {
//     flex: 0.488,
//   },
// });

// export default SearchScreen;

import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors, fonts, scale } from 'utils';
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
  Header,
} from 'components';
import useMovieSearch from './hooks/useMovieSearch';

const SearchScreen = () => {
  const dispatch = useAppDispatch();
  const { genres, loading } = useAppSelector(state => state.genereReducer);

  const [query, setQuery] = useState('');
  const { searchResults, loading: searchLoading } = useMovieSearch(query);

  useEffect(() => {
    dispatch(fetchGenresWithPosters());
  }, [dispatch]);

  const renderGenreItem = ({ item }: { item: GenreWithPoster }) => (
    <View style={styles.cardWrapper}>
      <GenereCard genere={item} />
    </View>
  );

  const renderMovieItem = ({ item }: { item: UpcomingMovie }) => (
    <MovieTileCard movie={item} />
  );

  const isSearchMode = query.length > 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
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
          <TouchableOpacity onPress={() => setQuery('')}>
            <Icon.component
              name={IconNames.crossIcon}
              size={Icon.iconSizes.SMALL}
              color={colors.fadeBlack}
            />
          </TouchableOpacity>
        )}
      </View>

      <Header query={query} resultCount={searchResults.length} />

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
            <CustomText.TextComponent style={styles.noResult}>
              No Category available
            </CustomText.TextComponent>
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(14),
    // paddingVertical: scale(10),
    backgroundColor: colors.secondaryBackgroundColor,
    gap: scale(10),
    borderRadius: scale(30),
    marginHorizontal: scale(12),
    height: scale(48),
  },
  input: {
    flex: 1,
    backgroundColor: colors.secondaryBackgroundColor,
    paddingVertical: scale(8),
    paddingHorizontal: scale(10),
    borderRadius: scale(10),
    color: colors.fadeBlack,
    fontFamily: fonts.PoppinsRegular,
  },
  list: {
    marginTop: scale(16),
    paddingTop: scale(20),
    paddingHorizontal: scale(12),
    paddingBottom: scale(16),
    backgroundColor: colors.secondaryBackgroundColor,
  },
  noResult: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: colors.fadeBlack,
  },
  contentContainer: {
    marginTop: scale(16),
    paddingTop: scale(30),
    paddingHorizontal: scale(12),
    paddingBottom: scale(16),
    backgroundColor: colors.secondaryBackgroundColor,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: scale(12),
  },
  cardWrapper: {
    flex: 0.488,
  },
});

export default SearchScreen;
