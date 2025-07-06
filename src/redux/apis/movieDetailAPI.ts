import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from 'services/apiClient';
import { MovieDetail } from 'types';
import { apiName } from 'utils';

export const fetchMovieDetail = createAsyncThunk<
  MovieDetail,
  number, // movieId
  {
    rejectValue: string;
  }
>('movies/fetchDetail', async (movieId, { rejectWithValue }) => {
  try {
    const response = await apiClient.getData(
      `${apiName.getMovieDetail}${movieId}`,
    );

    console.log('movie detail', response.data);

    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error?.response?.data?.message || 'Something went wrong',
    );
  }
});
