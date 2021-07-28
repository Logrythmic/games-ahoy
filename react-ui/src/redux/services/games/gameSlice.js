import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from "./apiActions";


const gameSlice = createSlice({
  name:"gamesApi",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    gamesRequested: (gamesApi, action) => {
      gamesApi.loading = true;
    },
    gamesReceived: (gamesApi, action) => {
      gamesApi.list = action.payload;
      gamesApi.loading = false;
    },
    gamesRequestFailed: (gamesApi, action) => {
      gamesApi.loading = false;
    },
  },
});

export default gameSlice.reducer;

const { gamesRequested, gamesReceived, gamesRequestFailed } = gameSlice.actions;

export const loadGames = (bodyData) => (dispatch) => {
  return dispatch(
    apiCallBegan({
      data: bodyData,
      onStart: gamesRequested.type,
      onSuccess: gamesReceived.type,
      onError: gamesRequestFailed.type,
    })
  );
};