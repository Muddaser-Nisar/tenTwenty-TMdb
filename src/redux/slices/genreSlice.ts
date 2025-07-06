import { createSlice } from '@reduxjs/toolkit';
import { fetchGenresWithPosters } from 'redux/apis';
import { GenreWithPoster } from 'types';

interface GenreState {
  genres: GenreWithPoster[];
  loading: boolean;
  error: string | null;
}

const initialState: GenreState = {
  genres: [],
  loading: false,
  error: null,
};

const genreSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGenresWithPosters.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenresWithPosters.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(fetchGenresWithPosters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to load genres';
      });
  },
});

export default genreSlice.reducer;
