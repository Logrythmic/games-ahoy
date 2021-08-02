import { ADD_USER_REVIEW } from '../actionTypes';

const initialState = {
  games:[{
    id:0,
    wordReview: '',
    rating: '',
  }]
}

export default function(state=initialState, action){
  if(action.type === ADD_USER_REVIEW){
    return{
      ...state,
      games: state.games.concat({
        id: action.payload.id,
        wordReview: action.payload.wordReview,
        rating: action.payload.rating,
      })
    }
  }
  return state;
}