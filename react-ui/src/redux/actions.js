import {
  GET_ADVANCED_SEARCH_RESULTS,
  GET_SEARCH_TERM,
  ADD_USER_REVIEW,
} from './actionTypes';

export const updateSearchTerm = keywords =>{
  return{
    type: GET_SEARCH_TERM,
    payload:{
      keywords
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

export const addReviews = (id, wordReview, rating) => {
  return{
    type: ADD_USER_REVIEW,
    payload:{
      id,
      wordReview,
      rating,
    }
  }
}