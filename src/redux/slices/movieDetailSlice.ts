import { createSlice } from '@reduxjs/toolkit';
import { fetchMovieDetail } from 'redux/apis';
import { MovieDetail } from 'types';

interface MovieDetailState {
  movieDetail: MovieDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailState = {
  movieDetail: null,
  loading: false,
  error: null,
};

const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    clearMovieDetail: state => {
      state.movieDetail = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovieDetail.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetail = action.payload;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load movie detail';
      });
  },
});

export const { clearMovieDetail } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
