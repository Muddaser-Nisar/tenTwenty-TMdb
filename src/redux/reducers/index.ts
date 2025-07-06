import { combineReducers } from 'redux';
import movieReducer from 'redux/slices/moviesListingSlice';
import genereReducer from 'redux/slices/genreSlice';

const reducers = combineReducers({
  movieReducer,
  genereReducer,
});

export default reducers;
