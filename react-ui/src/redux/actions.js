import {
  GET_ADVANCED_SEARCH_RESULTS,
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

export const updateReviews = (keywords,platforms,genres) =>{
  return{
    type: GET_ADVANCED_SEARCH_RESULTS,
    payload:{
      keywords,
      platforms,
      genres
    }
  }
}