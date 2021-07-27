import { GET_ADVANCED_SEARCH } from '../actionTypes';

const initialState = {
  keywords: '',
  platforms: [],
  genres: [],
};

export default function(state=initialState, action){
  if(action.type === GET_ADVANCED_SEARCH){
    return action.payload
  }
  return state;
}