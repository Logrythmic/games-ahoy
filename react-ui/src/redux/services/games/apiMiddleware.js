import axios from 'axios';
import * as actions from './apiActions';

const { AUTH_TOKEN, CLIENT_ID } = process.env;

const gameApi = 
  ({ dispatch }) => 
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if(onStart) dispatch({type: onStart});

    next(action);

    try {
      const response = await axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': CLIENT_ID,
            'Authorization': 'Bearer '+AUTH_TOKEN,
        },
        data: `fields aggregated_rating,aggregated_rating_count,summary,slug,rating,rating_count,name,genres,platforms,screenshots; limit 7;`
      });
      if(onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch(error){
      if(onError) dispatch({ type: onError, payload: error.message });
    }
  }

  export default gameApi;