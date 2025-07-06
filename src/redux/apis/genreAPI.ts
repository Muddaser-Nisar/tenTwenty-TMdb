import { createAsyncThunk } from '@reduxjs/toolkit';
import { Genre, GenreWithPoster, UpcomingMovie } from 'types';
import { apiName } from 'utils';
import apiClient from 'services/apiClient';

export const fetchGenresWithPosters = createAsyncThunk<
  GenreWithPoster[],
  void,
  { state: { movieReducer: { upcomingMovies: UpcomingMovie[] } } }
>('genres/fetchWithPosters', async (_, { getState }) => {
  const genreResponse = await apiClient.getData(apiName.getCategoryList); //get categories from here

  const genres = genreResponse?.data?.genres;

  // get movies list which has been already fetched
  const { upcomingMovies } = getState().movieReducer;

  //do maping on genre id bas
  const genreMap: { [key: number]: string } = {};

  for (const movie of upcomingMovies) {
    for (const genreId of movie.genre_ids) {
      if (!genreMap[genreId]) {
        genreMap[genreId] = movie.poster_path;
      }
    }
  }

  // now add poster_path to each genre in order to display
  const result: GenreWithPoster[] = genres
    .map((genre: Genre) => ({
      ...genre,
      poster_path: genreMap[genre.id],
    }))
    .filter((genre: GenreWithPoster) => !!genre.poster_path); //filtering only those whose have poster path

  console.log('result', result);

  return result;
});
