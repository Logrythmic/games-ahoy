import axios from 'axios';
import * as actions from './apiActions';


const gameApi = 
  ({ dispatch }) => 
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { method, data, onStart, onSuccess, onError } = action.payload;

    if(onStart) dispatch({type: onStart});

    next(action);

    try {
      const response = await axios({
        url: "/igdb/v4/games",
        method,
        headers: {},
        data,
      });
      if(onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch(error){
      if(onError) dispatch({ type: onError, payload: error.message });
    }
  }

  export default gameApi;