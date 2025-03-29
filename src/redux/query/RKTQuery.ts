import { createApi } from '@reduxjs/toolkit/query/react';
import {
  ApiResponse,
  BaseModel,
  MovieItem,
  SingInSignUpResponse,
} from '@/src/types/ApiResponse';
import axiosBaseQuery from '@/src/redux/query/BaseQuery';
import { useBoilerPlateStore } from '@/src/zustand/BoilerPlateStore';

export const MovieApi = createApi({
  reducerPath: 'home',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    postRefreshToken: builder.mutation<SingInSignUpResponse, void>({
      query: () => ({
        url: 'auth/refresh',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${useBoilerPlateStore.getState()?.user?.refreshToken}`,
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: ApiResponse<SingInSignUpResponse>) =>
        response.data,
    }),
    getNowPlayingMovie: builder.query<Array<MovieItem>, void>({
      query: () => ({
        url: 'movie/now_playing',
        method: 'GET',
      }),
      transformResponse: (response: BaseModel) => response.results,
    }),
  }),
});

export const { useLazyGetNowPlayingMovieQuery } = MovieApi;
