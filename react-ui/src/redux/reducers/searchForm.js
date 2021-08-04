import { GET_ADVANCED_SEARCH_RESULTS, GET_SEARCH_TERM, LOADER_RESET } from '../actionTypes';


const initialState = {
  keywords: '',
  loader: null,
  platforms: [],
  genres: [],
  dataQuery: `fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,cover.*; limit 7;`
};

export default function(state=initialState, action){
  if(action.type === LOADER_RESET){
    return{
      ...state,
      loader: null
    }
  }

  if(action.type === GET_SEARCH_TERM){
    return{
      keywords: action.payload.keywords,
      loader: false,
      platforms: [],
      genres: [],
      dataQuery: `search "`+action.payload.keywords+`"; fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,cover.*; limit 7;`
    }
  }
  
  if(action.type === GET_ADVANCED_SEARCH_RESULTS){
    if(action.payload.keywords==="" && action.payload.platforms.length===0 && action.payload.genres.length===0){
      console.log('no inputs')
      return{
        keywords: action.payload.keywords,
        loader: false,
        platforms: action.payload.platforms,
        genres: action.payload.genres,
        dataQuery: `fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,cover.*; limit 7;`
      }
    } else {
      if(action.payload.keywords && action.payload.platforms.length===0 && action.payload.genres.length===0){
        console.log('no genre or platform')
        return{
          keywords: action.payload.keywords,
          loader: false,
          platforms: action.payload.platforms,
          genres: action.payload.genres,
          dataQuery: `search "`+action.payload.keywords+`"; fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,cover.*; limit 7;`
        }
      } else if(action.payload.keywords==="" && action.payload.platforms && action.payload.genres.length===0){
        console.log('no genre or search')
        return{
          keywords: action.payload.keywords,
          loader: false,
          platforms: action.payload.platforms,
          genres: action.payload.genres,
          dataQuery: `fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,cover.*; limit 7; where platforms=[`+action.payload.platforms+"];"
        }
      } else if(action.payload.keywords==="" && action.payload.platforms.length===0 && action.payload.genres){
        console.log('no search or platform')
        return{
          keywords: action.payload.keywords,
          loader: false,
          platforms: action.payload.platforms,
          genres: action.payload.genres,
          dataQuery: `fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,cover.*; limit 7; where genres=[`+action.payload.genres+"];"
        }
      } else if(action.payload.keywords==="" && action.payload.platforms && action.payload.genres){
        console.log('no search term')
        return{
          keywords: action.payload.keywords,
          loader: false,
          platforms: action.payload.platforms,
          genres: action.payload.genres,
          dataQuery: `fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,cover.*; limit 7; where platforms=[`+action.payload.platforms+`] | genres=[`+action.payload.genres+"];"
        }
      } else if(action.payload.keywords && action.payload.platforms.length===0 && action.payload.genres){
        console.log('no platform')
        return{
          keywords: action.payload.keywords,
          loader: false,
          platforms: action.payload.platforms,
          genres: action.payload.genres,
          dataQuery: `search "`+action.payload.keywords+`"; fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,cover.*; limit 7; where genres=[`+action.payload.genres+"];"
        }
      } else if(action.payload.keywords && action.payload.platforms && action.payload.genres.length===0){
        console.log('no genre')
        return{
          keywords: action.payload.keywords,
          loader: false,
          platforms: action.payload.platforms,
          genres: action.payload.genres,
          dataQuery: `search "`+action.payload.keywords+`"; fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,cover.*; limit 7; where platforms=[`+action.payload.platforms+"];"
        }
      } else{
        console.log('full query')
        return{
          keywords: action.payload.keywords,
          loader: false,
          platforms: action.payload.platforms,
          genres: action.payload.genres,
          dataQuery: `search "`+action.payload.keywords+`";fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,cover.*; limit 7; where platforms=[`+action.payload.platforms+`] | genres=[`+action.payload.genres+"];"
        }
      }
    }
  }
  return state;
}