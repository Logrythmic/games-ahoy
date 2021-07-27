import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.igdb.com/v4/games/'}),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getSearchedGames: builder.query({})
  })
})