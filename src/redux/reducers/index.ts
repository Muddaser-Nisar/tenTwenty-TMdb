import { combineReducers } from 'redux';
import movieReducer from 'redux/slices/moviesListingSlice';
import genereReducer from 'redux/slices/genreSlice';
import movieDetailReducer from 'redux/slices/movieDetailSlice';

const reducers = combineReducers({
  movieReducer,
  genereReducer,
  movieDetailReducer,
});

export default reducers;
