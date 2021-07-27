import { combineReducers } from 'redux';
import searchTerm from './searchTerm';
import advancedSearchForm from './searchForm';

export default combineReducers({ searchTerm , advancedSearchForm });