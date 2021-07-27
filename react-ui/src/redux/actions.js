import {
  GET_ADVANCED_SEARCH,
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

export const updateAdvancedSearchForm = (keywords,platforms,genres) =>{
  return{
    type: GET_ADVANCED_SEARCH,
    payload:{
      keywords,
      platforms,
      genres
    }
  }
}