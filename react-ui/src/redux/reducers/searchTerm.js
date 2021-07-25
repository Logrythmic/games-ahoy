import { GET_SEARCH_TERM } from '../actionTypes';

const initialState = '';

export default function(state=initialState, action){
  if(action.type === GET_SEARCH_TERM){
    return action.payload.searchTerm
  }
  return state;
}