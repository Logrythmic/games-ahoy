import { GET_ADVANCED_SEARCH_RESULTS } from '../actionTypes';


const initialState = {
  keywords: '',
  platforms: [],
  genres: [],
};
const bodyDataBase = `fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,screenshots; limit 7;`

export default function(state=initialState, action){
  if(action.type === GET_ADVANCED_SEARCH_RESULTS){
    console.log(action.payload);
    return{
      keywords: action.payload.keywords,
      platforms: action.payload.platforms,
      genres: action.payload.genres,
    }
  }
  return state;
}

// export default function(state=initialState, action){
//   if(action.type === GET_ADVANCED_SEARCH_RESULTS){
//     if(state.keywords==="" || state.keywords===null){
//       return loadGames(bodyDataBase+` where platforms=${state.platforms} && genres=${state.genres};`);
//     }
//     if(state.platforms===[]||state.platforms===null){
//       return loadGames(`search "${state.keywords}"; `+bodyDataBase+` where genres=${state.genres};`);
//     }
//     if(state.genres===[]||state.genres===null){
//       return loadGames(`search "${state.keywords}"; `+bodyDataBase+` where platforms=${state.platforms};`);
//     }
//     return loadGames(`search "${state.keywords}"; `+bodyDataBase+` where platforms=${state.platforms} && genres=${state.genres};`);
//   }
//   return state;
// }