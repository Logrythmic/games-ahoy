import { combineReducers } from 'redux';
// import searchTerm from './searchTerm';
import advancedSearchForm from './searchForm';
import gamesReducer from '../services/games/gameSlice';
import userReviews from './userReview';


export default combineReducers({ userReviews, advancedSearchForm, gamesReducer });