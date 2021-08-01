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

export const loadGames = (data) => (dispatch) => {
  return dispatch(
    apiCallBegan({
      data,
      onStart: gamesRequested.type,
      onSuccess: gamesReceived.type,
      onError: gamesRequestFailed.type,
    })
  );
};