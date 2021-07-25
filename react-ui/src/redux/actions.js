import {
  GET_SEARCH_TERM
} from './actionTypes';

export const updateSearchTerm = searchTerm =>{
  return{
    type: GET_SEARCH_TERM,
    payload:{
      searchTerm
    }
  }
}