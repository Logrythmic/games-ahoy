import { combineReducers } from 'redux';
import searchTerm from './searchTerm';
import advancedSearchForm from './searchForm';
import gamesReducer from '../services/games/gameSlice';


export default combineReducers({ searchTerm , advancedSearchForm, gamesReducer });