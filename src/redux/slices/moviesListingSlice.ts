import { createSlice } from '@reduxjs/toolkit';
import { fetchUpcomingMovies } from 'redux/apis';
import { UpcomingMovie } from 'types';

interface MovieState {
  upcomingMovies: UpcomingMovie[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  upcomingMovies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUpcomingMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.upcomingMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load movies';
      });
  },
});

export default movieSlice.reducer;
