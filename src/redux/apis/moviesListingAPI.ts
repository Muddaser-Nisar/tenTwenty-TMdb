import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from 'services/apiClient';
import { UpcomingMovieResponse } from 'types';
import { apiName } from 'utils';

export const fetchUpcomingMovies = createAsyncThunk<
  UpcomingMovieResponse['results'],
  void,
  {
    rejectValue: string;
  }
>('movies/fetchUpcoming', async (_, { rejectWithValue }) => {
  try {
    const response = await apiClient.getData(apiName.getUpComingList);
    console.log('response.data.results', response.data.results);

    return response.data.results;
  } catch (error: any) {
    return rejectWithValue(
      error?.response?.data?.message || 'Something went wrong',
    );
  }
});
